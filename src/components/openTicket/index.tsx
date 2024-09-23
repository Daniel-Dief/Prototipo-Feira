import { Container, BodyContainer } from "../../common/styles/FloatContainer";
import { useState } from "react";
import TimerIconImg from "../../common/images/timer.png"
import { NavTicket, Title, DownArrow, CleanTicket, ImageBody } from "./style"
import FooterTicket from "../FooterTicket";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
    NextTicket: () => void;
}

export default function OpenTicket({ display, togleFloatContainer, NextTicket }: FloatContainerProps) {

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
            
            <NavTicket>
                <DownArrow src={require("../../common/images/chevron-down.png")} />
                <Title>Sacola</Title>
                <CleanTicket>Limpar</CleanTicket>
            </NavTicket>

            <BodyContainer width="375px" height="532px" gap="0.1px">
                <ImageBody src={require("../../common/images/BodyTickets.png")} />
            </BodyContainer>
            
            <FooterTicket display="flex" openTicket={NextTicket} text="Continuar" />

        </Container>
    )
}
