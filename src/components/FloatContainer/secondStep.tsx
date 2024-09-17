import { Title, SmallText } from "../../common/styles/Text";
import { Button } from "../../common/styles/Button";
import { DivTextPreCheckin, ImageSteps } from "./style";
import { Container, BodyContainer, NavContainer, TextNav } from "../../common/styles/FloatContainer";
import Fild from "../Fild";
import { Form } from "../../common/styles/Form";
import { useState } from "react";

interface FloatContainerProps{
    display: boolean;
    togleFloatContainer: () => void;
    buttonNext: () => void;
    buttonBack: () => void;
}

export default function SecondStepContainer({ display, togleFloatContainer, buttonNext, buttonBack }: FloatContainerProps) {

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
            <BodyContainer width="375px" height="838px" gap="12px">
            
                <DivTextPreCheckin width="343px" height="58px">
                    
                    <Title>
                        Dados residenciais
                    </Title>
                    <SmallText color="#71717A">
                        Preencha os campos necessários para continuar com check-in.                    
                    </SmallText>
                </DivTextPreCheckin>
                
                <Form
        >
            <Fild
                labelText="País"
                type="text"
                required={true}
                placeholder="Digite seu país"
            />
            <Fild
                labelText="CEP"
                type="number"
                required={true}
                placeholder="Digite seu CEP"
            />
            <Fild
                labelText="Estado"
                type="text"
                required={true}
                placeholder="Digite seu estado"
            />
            <Fild
                labelText="Rua"
                type="text"
                required={true}
                placeholder="Digite seu endereço residencial"
            />
            <Fild
                labelText="Número"
                type="number"
                required={true}
                placeholder="Digite seu número residencial"
            />
            <Fild
                labelText="Complemento"
                type="text"
                required={false}
                placeholder="Ex: Apartamento 10, Portão Marrom"
            />
            <Button
                    property="disable"
                    onClick={buttonNext}
                >
                Continuar
            </Button>
        </Form>
            </BodyContainer>
        </Container>
    )
}
