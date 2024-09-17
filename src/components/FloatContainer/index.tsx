import { Title, SmallText } from "../../common/styles/Text";
import { Button } from "../../common/styles/Button";
import { DivTextPreCheckin, ImagePreCheckin } from "./style";
import { Container, BodyContainer, NavContainer, TextNav } from "../../common/styles/FloatContainer";

import { useState } from "react";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
}

export default function FloatContainer({ display, togleFloatContainer }: FloatContainerProps) {
    function handlePreCheckin() {
        window.location.href = '/SignUp';
    }

    function handleCloseModal() {
        togleFloatContainer();
    }

    return (
        <Container display={display}>
            <NavContainer>
                <TextNav>
                    Voltar
                </TextNav>
                <TextNav onClick={handleCloseModal}>
                    Fechar
                </TextNav>
            </NavContainer>
            <BodyContainer>
                <DivTextPreCheckin>
                    <Title>
                        Pré Check-in
                    </Title>
                    <SmallText color="#71717A">
                        A seguir, orientaremos você a fazer o check-in da sua reserva em alguns passos simples.
                    </SmallText>
                </DivTextPreCheckin>
                
                <ImagePreCheckin src={require("../../common/images/bro.png")}/>

                <Button
                    onClick={handlePreCheckin}
                >
                    Iniciar
                </Button>
            </BodyContainer>
        </Container>
    )
}
