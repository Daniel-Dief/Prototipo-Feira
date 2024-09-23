import { Container, BodyContainer } from "../../common/styles/FloatContainer";
import { useState } from "react";
import { NavTicket, Title, DownArrow, CleanTicket, AddItensDiv, AddItensIcon, AddItensText, TitleShop } from "./style"
import FooterTicket from "../FooterTicket";
import addIcon from "../../common/images/plus.png";
import ShopComponent from "../DivShopProducts";
import { VerifyProducts, ResetProducts, UpdateProducts, CheckAmount } from "../../pages/Restaurant/functionsShop";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
    NextTicket: () => void;
}

export default function OpenTicket({ display, togleFloatContainer, NextTicket }: FloatContainerProps) {

    const jsonProducts = VerifyProducts()

    localStorage.setItem("valueTicket", "0")

    function handleCloseModal() {
        togleFloatContainer();
    }

    function CloseTicket() {
        togleFloatContainer();
    }


    const [valueTicket, setvalueTicket] = useState<number>(32.00)

    return (
        <Container paddingBotton="0px" gap="24px" display={display}>           
            
            <NavTicket>
                <DownArrow src={require("../../common/images/chevron-down.png")} />
                <Title>Sacola</Title>
                <CleanTicket>Limpar</CleanTicket>
            </NavTicket>

            <BodyContainer width="375px" height="532px" gap="24px">
                <AddItensDiv>
                    <AddItensIcon src={addIcon} />
                    <AddItensText>
                        Adicionar mais itens
                    </AddItensText>
                </AddItensDiv>
                <TitleShop>Itens adicionados</TitleShop>
                {
                    jsonProducts.map(product => {
                        if (product.amount > 0) {
                            return (
                                <ShopComponent 
                                    Name={product.product}
                                    Time={product.time}
                                    Value={product.value}
                                    Amount={product.amount}
                                    Image={product.image}
                                />
                            )
                        }
                    })
                }
            </BodyContainer>
            <FooterTicket display={true} openTicket={NextTicket} text="Continuar" />

        </Container>
    )
}
