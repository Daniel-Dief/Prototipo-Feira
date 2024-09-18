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
    buttonBack05: () => void;
    buttonNext05: () => void;
}

export default function Third05StepContainer({ display, togleFloatContainer, buttonBack05, buttonNext05 }: FloatContainerProps) {

    function handleCloseModal() {
        togleFloatContainer();
    }

    return (
        <Container paddingBotton="90px" gap="15px" display={display}>
            <NavContainer>
                <TextNav onClick={buttonBack05}>
                    Voltar
                </TextNav>
                <TextNav onClick={handleCloseModal}>
                    Fechar
                </TextNav>
            </NavContainer>
            <BodyContainer width="375px" height="882px" gap="12px">
            
                <DivTextPreCheckin width="343px" height="58px">
                    
                    <Title>
                        Cadastrar hóspede
                    </Title>
                    <SmallText color="#71717A">
                        Complete o cadastro para continuar com o check-in.
                    </SmallText>
                </DivTextPreCheckin>
                
                <Form
        >
            <Fild
                labelText="Nome Completo"
                type="text"
                required={true}
                placeholder="Digite seu nome"
            />
            <Fild
                labelText="Sexo"
                type="text"
                required={true}
                placeholder="Digite seu sexo"
            />
            <Fild
                labelText="Data de nascimento"
                type="date"
                required={true}
                placeholder="Selecione sua data de nascimento"
            />
            <Fild
                labelText="CPF"
                type="Number"
                required={true}
                placeholder="000.000.000-X"
            />
            <Fild
                labelText="E-mail"
                type="email"
                required={true}
                placeholder="Digite seu email"
            />
            <Fild
                labelText="Telefone"
                type="number"
                required={true}
                placeholder="Digite seu telefone"
            />
            <Button
                    property="disable"
                    onClick={buttonNext05}
                >
                Salvar
            </Button>
        </Form>
            </BodyContainer>
        </Container>
    )
}
