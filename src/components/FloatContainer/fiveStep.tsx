import { Title, SmallText } from "../../common/styles/Text";
import { Button } from "../../common/styles/Button";
import { DivTextPreCheckin, ImageSteps, DivContent, Div2x2 } from "./style";
import { Container, BodyContainer, NavContainer, TextNav } from "../../common/styles/FloatContainer";
import ButtonServices from "../Buttons/ButtonService";
import utensilsIcon from "../../common/images/utensils-crossed.png"
import cleanerIcon from "../../common/images/paintbrush.png"
import washingMachine from "../../common/images/washing-machine.png"
import babyIcon from "../../common/images/baby.png"
import { useState } from "react";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
    buttonNext: () => void;
    buttonBack: () => void;
}

export default function FiveStepContainer({ display, togleFloatContainer, buttonNext, buttonBack }: FloatContainerProps) {

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
            <ImageSteps src={require("../../common/images/Step for step 4.png")}/>
            <BodyContainer width="375px" height="562px" gap="12px">
                
                <DivContent>
                    <DivTextPreCheckin width="343px" height="58px">
                        
                        <Title>
                            Mais conforto
                        </Title>
                        <SmallText color="#71717A">
                            Agende ou reserve serviços antecipadamente para sua chegada ao hotel ou para os próximos dias.                        
                        </SmallText>
                    </DivTextPreCheckin>
                    
                    <Div2x2>
                        <ButtonServices title="Restaurante" icon={utensilsIcon} width="165.5px" height="48px" />
                        <ButtonServices title="Limpeza" icon={cleanerIcon} width="165.5px" height="48px" />
                        <ButtonServices title="Lavanderia" icon={washingMachine} width="165.5px" height="48px" />
                        <ButtonServices title="BabySitting" icon={babyIcon} width="165.5px" height="48px" />
                    </Div2x2>

                </DivContent>

                <Button
                        onClick={buttonNext}
                    >
                    Pular
                </Button>
            </BodyContainer>
        </Container>
    )
}
