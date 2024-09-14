import { Logo } from "../../common/styles/Imgs";
import { ProgressContainer, Progress } from "../../common/styles/Divs";
import { Title, SmallText, SLink } from "../../common/styles/Text";
import { Form } from "../../common/styles/Form";
import Fild from "../../components/Fild";
import { Container } from "../../common/styles/Divs";
import { Button, ButtonSecundary } from "../../common/styles/Button";
import CheckBox from "../../components/CheckBox";

import { DivTitle } from "./style";

export default function SignUp() {
    const userEmail = localStorage.getItem("email");

    if(userEmail) {
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
                        requiered={true}
                        placeholder="Crie sua senha"
                    />
                    <Fild
                        labelText="Corfime sua senha"
                        type="password"
                        requiered={true}
                        placeholder="Confirme sua senha"
                    />
                    <CheckBox
                        labelText="Eu aceito todos os"
                        spanText="Termos & Condições"
                    />
                    <Button>
                        Continuar
                    </Button>
                    <ButtonSecundary>
                        Voltar
                    </ButtonSecundary>
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
                <Container
                    flex_direction="column"
                    align_items="start"
                    gap="24px"
                >
                    <Title>
                        Criar uma conta
                    </Title>
                    <SmallText>
                        Complete seu registro e conecte-se ao conforto
                    </SmallText>
                </Container>
                <Form>
                    <Fild
                        labelText="Nome completo"
                        type="text"
                        requiered={true}
                        placeholder="Digite seu nome completo"
                    />
                    <Fild
                        labelText="E-mail"
                        type="email"
                        requiered={true}
                        placeholder="Digite seu endereço de e-mail"
                    />
                    <Fild 
                        labelText="Telefone para contato"
                        type="phone"
                        requiered={true}
                        placeholder="Digite seu número de telefone"
                    />
                    <Button>
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