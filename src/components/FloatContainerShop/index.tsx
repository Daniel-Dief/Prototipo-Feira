import { Title, SmallText } from "../../common/styles/Text";
import { Button } from "../../common/styles/Button";
import { ImageProduct, ArrowIcon, TimeProduct, TimeIcon, BackgroundImage, TimeText, DivProduct, NameProduct, ValueProduct, DescriptionProduct, WeightProduct, FooterProduct, DivAmountProduct, DivFooterProduct, IconAmountProduct, TextAmountProduct, TextButtonAdd, ButtonAdd } from "./style";
import Fild from "../Fild";
import { Container, BodyContainer } from "../../common/styles/FloatContainer";
import { useState } from "react";
import ArrowIconProduct from "../../common/images/arrow-product.png";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
    id: string | undefined;
}

export default function FloatContainer({ display, togleFloatContainer, id }: FloatContainerProps) {
    const jsonProducts = localStorage.getItem('json-products')    

    let [value, setvalue] = useState<number | undefined>(undefined)

    function handleCloseModal() {
        togleFloatContainer();
    }

    function CloseTicket() {
        togleFloatContainer();
    }

    function getImage() {
        if (jsonProducts) {
            if (id) {
                const parsedProducts = JSON.parse(jsonProducts);
                for (let i = 0; i < parsedProducts.length; i++) {
                    const product = parsedProducts[i];
                    if (product['id'] == id) {
                        setvalue(product['value'])
                        value = product['value']
                        return product['image']
                    }
                }
            }
        }
        return null;
    }

    let [amountProduct, setamountProduct] = useState<number>(0)

    let [valueTicket, setvalueTicket] = useState<number | undefined>(0)

    function PlusAmount () {
        if (value) {
            setamountProduct(amountProduct + 1)
            amountProduct = amountProduct + 1
            setvalueTicket(value * amountProduct)
            valueTicket = value * amountProduct
        }      
    }

    function MinusAmount () {
        if (amountProduct > 0) {
            if (value) {
                setamountProduct(amountProduct - 1)
                amountProduct = amountProduct - 1
                setvalueTicket(value * amountProduct)
                valueTicket = value * amountProduct
            }     
        } else {
            handleCloseModal()
        }
    }

    return (
        <Container paddingBotton="0px" gap="24px" display={display}>
            
            <ImageProduct url={getImage}>
                <ArrowIcon onClick={togleFloatContainer} src={ArrowIconProduct} />
            </ImageProduct>
            
            
            <BodyContainer width="375px" height="340px" gap="24px">
                <DivProduct>
                    <NameProduct>
                        Lorem ipsum
                    </NameProduct>
                    <ValueProduct>
                        R${value}.00
                    </ValueProduct>
                    <DescriptionProduct>
                        Lorem ipsum dolor sit amet. Ea reprehenderit dolor et aliquam aspernatur ad dicta nisi. Nam fuga quia sed eveniet labore ea error voluptatem aut dolores distinctio in tempore placeat ut nesciunt culpa rem minus sint. Et rerum exercitationem et porro nulla qui quibusdam iure ut soluta adipisci vel deleniti quasi et inventore sint et corrupti pariatur.
                    </DescriptionProduct>
                    <WeightProduct>
                        Serve 1 pessoa (aprox. 350g)
                    </WeightProduct>
                    <Fild
                        labelText="Alguma observação?"
                        type="text"
                        required={false}
                        placeholder="Ex: Tirar a cebola, maionese à parte, etc."
                    />
                </DivProduct>
            </BodyContainer>

            <FooterProduct>
                <DivFooterProduct>
                    <DivAmountProduct>
                        <IconAmountProduct onClick={MinusAmount} src={require("../../common/images/minus.png")} />
                        <TextAmountProduct>{amountProduct}</TextAmountProduct>
                        <IconAmountProduct onClick={PlusAmount} src={require("../../common/images/plus.png")} />
                    </DivAmountProduct>
                    <ButtonAdd onClick={CloseTicket}>
                        <TextButtonAdd width="65px">Adicionar</TextButtonAdd>
                        <TextButtonAdd width="62px">R${valueTicket}.00</TextButtonAdd>
                    </ButtonAdd>
                </DivFooterProduct>
            </FooterProduct>

        </Container>
    )
}
