import { Logo } from "../../common/styles/Imgs";
import { ProgressContainer, Progress } from "../../common/styles/Divs";
import { Title, SmallText, SLink } from "../../common/styles/Text";
import { Form } from "../../common/styles/Form";
import Fild from "../../components/Fild";
import { Container } from "../../common/styles/Divs";
import { Button, ButtonSecundary } from "../../common/styles/Button";
import CheckBox from "../../components/CheckBox";

import { DivTitle } from "./style";
import { useRef, useState } from "react";

export default function SignUp() {
    const [userName,  setUserName] = useState<string | null>(localStorage.getItem("userName"));

    const inputName = useRef<HTMLInputElement | null>(null);
    const inputEmail = useRef<HTMLInputElement | null>(null);
    const inputPassword = useRef<HTMLInputElement | null>(null);


    function handleContinue(event: React.FormEvent) {
        if(inputName.current) {
            localStorage.setItem("userName", inputName.current.value);
        }
        if(inputEmail.current) {
            localStorage.setItem("userEmail", inputEmail.current.value);
        }
        if(inputPassword.current) {
            localStorage.setItem("userPassword", inputPassword.current.value);
        }

        if(
            localStorage.getItem("userName") &&
            localStorage.getItem("userEmail") &&
            localStorage.getItem("userPassword")
        ) {
            window.location.href = "/Home";
        } else if(
            localStorage.getItem("userName") &&
            localStorage.getItem("userEmail")
        ) {
            setUserName(localStorage.getItem("userName"));
        }
    }

    function handleBack() {
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");

        setUserName(null);
    }

    if(userName) {
        return (
            <Container
                justify_content="space-between"
                gap="48px"
            >
                <Logo src={require("../../common/images/logoBlack.png")}/>
                <ProgressContainer>
                    <Progress 
                        enabled={true}
                    />
                    <Progress 
                        enabled={true}
                    />
                </ProgressContainer>
                <DivTitle>
                    <Title>
                        Criar uma conta
                    </Title>
                    <SmallText>
                        Complete seu registro e conecte-se ao conforto
                    </SmallText>
                </DivTitle>
                <Form>
                    <Fild
                        labelText="Digite sua senha"
                        type="password"
                        required={true}
                        placeholder="Crie sua senha"
                        inputRef={inputPassword}
                    />
                    <Fild
                        labelText="Corfime sua senha"
                        type="password"
                        required={true}
                        placeholder="Confirme sua senha"
                    />
                    <CheckBox
                        labelText="Eu aceito todos os"
                        spanText="Termos & Condições"
                    />
                    <Button
                        onClick={handleContinue}
                    >
                        Continuar
                    </Button>
                </Form>
                <ButtonSecundary
                    onClick={handleBack}
                >
                    Voltar
                </ButtonSecundary>
                <Container
                    flex_direction="row"
                    align_items="center"
                    justify_content="center"
                    gap="8px"
                >
                    <SmallText>
                        Já tem uma conta?
                    </SmallText>
                    <SLink to="/SignIn">Faça Login</SLink>
                </Container>
            </Container>
        )
    } else {
        return (
            <Container
                justify_content="space-between"
                gap="48px"
            >
                <Logo src={require("../../common/images/logoBlack.png")}/>
                <ProgressContainer>
                    <Progress 
                        enabled={true}
                    />
                    <Progress 
                        enabled={false}
                    />
                </ProgressContainer>
                <DivTitle>
                    <Title>
                        Criar uma conta
                    </Title>
                    <SmallText>
                        Complete seu registro e conecte-se ao conforto
                    </SmallText>
                </DivTitle>
                <Form>
                    <Fild
                        labelText="Nome completo"
                        type="text"
                        required={true}
                        placeholder="Digite seu nome completo"
                        inputRef={inputName}
                    />
                    <Fild
                        labelText="E-mail"
                        type="email"
                        required={true}
                        placeholder="Digite seu endereço de e-mail"
                        inputRef={inputEmail}
                    />
                    <Fild 
                        labelText="Telefone para contato"
                        type="phone"
                        required={false}
                        placeholder="Digite seu número de telefone"
                    />
                    <Button
                        onClick={handleContinue}
                    >
                        Continuar
                    </Button>
                </Form>
                <Container
                    flex_direction="row"
                    align_items="center"
                    justify_content="center"
                    gap="8px"
                >
                    <SmallText>
                        Já tem uma conta?
                    </SmallText>
                    <SLink to="/SignIn">Faça Login</SLink>
                </Container>
            </Container>
        )
    }
}