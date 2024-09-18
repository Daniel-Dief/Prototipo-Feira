import { DivAlign, DivValue, DivTexts, DivButton, Text, Number, TextButton, ImageBody } from "./style";
import { Container, BodyContainer, NavContainer, TextNav } from "../../common/styles/FloatContainer";
import { useState } from "react";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
    buttonBack: () => void;
    buttonNext: () => void;
}

export default function FloatContainer({ display, togleFloatContainer, buttonBack, buttonNext }: FloatContainerProps) {

    function handleCloseModal() {
        togleFloatContainer();
    }

    return (
        <Container paddingBotton="0px" gap="24px" display={display}>            
            
            <NavContainer>
                <TextNav onClick={buttonBack}>
                    Voltar
                </TextNav>
                <TextNav onClick={handleCloseModal}>
                    Fechar
                </TextNav>
            </NavContainer>

            <BodyContainer width="375px" height="340px" gap="24px">
                <ImageBody src={require("../../common/images/BodyPayment.png")} />
            </BodyContainer>

            <DivValue>
                <DivAlign>
                    <DivTexts>
                        <Text>Valor total</Text>
                        <Number>R$ 535,00</Number>
                    </DivTexts>
                    <DivButton onClick={buttonNext}>
                        <TextButton>
                            Continuar
                        </TextButton>
                    </DivButton>
                </DivAlign>
            </DivValue>

        </Container>
    )
}