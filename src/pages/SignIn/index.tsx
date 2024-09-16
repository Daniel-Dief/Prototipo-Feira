import { useRef } from "react";
import { Button, ButtonCreateAccount } from "../../common/styles/Button";
import { Form } from "../../common/styles/Form";
import { Logo } from "../../common/styles/Imgs";
import { Title, SmallText, SpanText } from "../../common/styles/Text";
import Fild from "../../components/Fild";
import CheckBox from "../../components/CheckBox";

import { Container, Header, DivTitle, CreateAccount, AuxDiv } from "./style";

export default function SignIn() {
    const formRef = useRef<HTMLFormElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if(localStorage.getItem('userName') === null) {
            window.location.href = '/SignUp'
        } else {
            if(inputEmail && inputPassword) {
                const emailCorrect = localStorage.getItem('userEmail') === inputEmail.current?.value;
                const passWordCorrect = localStorage.getItem('userPassword') === inputPassword.current?.value;
                if(emailCorrect && passWordCorrect) {
                    window.location.href = '/Home';
                } else {
                    alert('Email ou senha incorretos');
                }
            }
        }
    };

    function handleButtonClick() {
        formRef.current?.dispatchEvent(new Event('submit'));
    }

    function handleCreateAccount() {
        window.location.href = '/SignUp';
    }

    return (
    <Container>
        <Header>
            <Logo src={require("../../common/images/logoBlack.png")} />
            <DivTitle>
                <Title>
                    Bem vindo!
                </Title>
                <SmallText>
                    Faça o login para continuar
                </SmallText>
            </DivTitle>
        </Header>
        <Form
            ref={formRef}
            onSubmit={handleSubmit}
        >
            <Fild
                inputRef={inputEmail} 
                labelText="Email"
                type="email"
                required={true}
                placeholder="Digite seu email"
            />
            <Fild
                inputRef={inputPassword} 
                labelText="Senha"
                type="password"
                required={true}
                placeholder="Digite sua senha"
            />
            <CheckBox 
                labelText="Lembrar de mim"
                spanText="Esqueceu sua senha?"
            />
            <Button
                onClick={handleButtonClick}
            >
                Entrar
            </Button>
        </Form>
        <CreateAccount>
            <AuxDiv>
                <SmallText>
                    Não tem uma conta ainda?
                </SmallText>
                <ButtonCreateAccount
                    onClick={handleCreateAccount}
                >
                    Criar conta
                </ButtonCreateAccount>
            </AuxDiv>
            <SpanText>
                Termos e condições
            </SpanText>
        </CreateAccount>
    </Container>
    );
}