import { Title, SmallText } from "../../common/styles/Text";
import { Button } from "../../common/styles/Button";
import { DivTextPreCheckin, ImageSteps, DivContent } from "./style";
import { Container, BodyContainer, NavContainer, TextNav } from "../../common/styles/FloatContainer";
import GuestRegistred from "../Buttons/RegistredGuest";
import GuestRegister from "../Buttons/RegisterGuest";
import { useState } from "react";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
    buttonNext: () => void;
    buttonBack: () => void;
}

export default function ThirdStepContainer({ display, togleFloatContainer, buttonNext, buttonBack }: FloatContainerProps) {

    function handleCloseModal() {
        togleFloatContainer();
    }

    return (
        <Container paddingBotton="90px" gap="15px" display={display}>
            <NavContainer>
                <TextNav onClick={buttonBack}>
                    Voltar
                </TextNav>
                <TextNav onClick={handleCloseModal}>
                    Fechar
                </TextNav>
            </NavContainer>
            <ImageSteps src={require("../../common/images/Step for step 2.png")}/>
            <BodyContainer width="375px" height="562px" gap="12px">
                
                <DivContent>
                    <DivTextPreCheckin width="343px" height="58px">
                        
                        <Title>
                            Hóspedes (1/4)
                        </Title>
                        <SmallText color="#71717A">
                            Clique para registrar os demais hóspedes de sua reserva.                    
                        </SmallText>
                    </DivTextPreCheckin>
                    
                    <GuestRegistred display="flex" name="José Eduardo" document="123.456.789-0" />

                    <GuestRegister />
                </DivContent>

                <Button
                        property="disable"
                        onClick={buttonNext}
                    >
                    Continuar
                </Button>
            </BodyContainer>
        </Container>
    )
}
