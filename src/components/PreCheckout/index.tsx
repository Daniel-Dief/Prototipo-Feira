import { Title, SmallText } from "../../common/styles/Text";
import { Button } from "../../common/styles/Button";
import { DivTextPreCheckin, ImagePreCheckin } from "./style";
import { Container, BodyContainer, NavContainer, TextNav } from "../../common/styles/FloatContainer";

import { useState } from "react";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
    buttonNext: () => void;
    buttonBack: () => void;
}

export default function FloatContainer({ display, togleFloatContainer, buttonNext, buttonBack }: FloatContainerProps) {

    function handleCloseModal() {
        togleFloatContainer();
    }

    return (
        <Container paddingBotton="0px" gap="20px" display={display}>
            <NavContainer>
                <TextNav onClick={buttonBack}>
                    Voltar
                </TextNav>
                <TextNav onClick={handleCloseModal}>
                    Fechar
                </TextNav>
            </NavContainer>
            <BodyContainer width="375px" height="562px" gap="48px">
                <DivTextPreCheckin width="343px" height="158px">
                    <Title>
                        Pré Check-out
                    </Title>
                    <SmallText color="#71717A">
                        A seguir, orientaremos você a fazer o check-out da sua estadia em alguns passos simples.
                    </SmallText>
                </DivTextPreCheckin>
                
                <ImagePreCheckin src={require("../../common/images/bro.png")}/>

                <Button
                    onClick={buttonNext}
                >
                    Iniciar
                </Button>
            </BodyContainer>
        </Container>
    )
}
