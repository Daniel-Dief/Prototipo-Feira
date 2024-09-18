import { Title, SmallText } from "../../common/styles/Text";
import { Button } from "../../common/styles/Button";
import { ImageProduct, ArrowIcon, TimeProduct, TimeIcon, BackgroundImage, TimeText, DivProduct, NameProduct, ValueProduct, DescriptionProduct, WeightProduct, FooterProduct, DivAmountProduct, DivFooterProduct, IconAmountProduct, TextAmountProduct, TextButtonAdd, ButtonAdd } from "./style";
import Fild from "../Fild";
import { Container, BodyContainer } from "../../common/styles/FloatContainer";
import { useState } from "react";
import ArrowIconProduct from "../../common/images/arrow-product.png";
import TimerIconImg from "../../common/images/timer.png"

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
}

export default function FloatContainer({ display, togleFloatContainer }: FloatContainerProps) {

    localStorage.setItem("valueTicket", "0")

    function handleCloseModal() {
        togleFloatContainer();
    }

    function CloseTicket() {
        togleFloatContainer();
    }

    const [amountProduct, setamountProduct] = useState<number>(1)

    function PlusAmount () {
        setamountProduct(amountProduct + 1)
        setvalueTicket(32.00 * (amountProduct + 1))
    }

    function MinusAmount () {
        if (amountProduct > 1) {
            setamountProduct(amountProduct - 1)
            setvalueTicket(32.00 * (amountProduct - 1))
        } else {
            handleCloseModal()
        }
    }

    const [valueTicket, setvalueTicket] = useState<number>(32.00)

    return (
        <Container paddingBotton="0px" gap="24px" display={display}>
            
            <ImageProduct>
                <ArrowIcon onClick={togleFloatContainer} src={ArrowIconProduct} />
            </ImageProduct>
            
            
            <BodyContainer width="375px" height="340px" gap="24px">
                <DivProduct>
                    <NameProduct>
                        Lorem ipsum
                    </NameProduct>
                    <ValueProduct>
                        R$ 32,00
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
