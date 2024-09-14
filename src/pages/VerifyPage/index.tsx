import { useState } from "react"

import { Title, SmallText } from "../../common/styles/Text"
import { Logo } from "../../common/styles/Imgs"
import CodeVerify from "../../components/Input/CodeVerify"
import { Button } from "../../common/styles/Button"

import { Container, Header } from "./styled"

export default function VerifyPage() {
    const [inputValue, setInputValue] = useState<string | "">("");

    function handlePath() {
        window.location.href = "/SignIn";
    }

    function handleInput(value: string) {
        if(inputValue.length >= 5){
            setInputValue(inputValue.slice(0, 4) + value);
        } else {
            setInputValue(inputValue + value);
        }
    }

    return (
        <Container>
            <Header>
                <Logo src={require("../../common/images/logoBlack.png")} />
                <div>
                    <Title>
                        Código de acesso
                    </Title>
                    <SmallText>
                        Use o código do hotel para desbloquear sua jornada Orquestre.
                    </SmallText>
                </div>
            </Header>
            <CodeVerify 
                setInputValue={handleInput}
            />
            <Button
                onClick={handlePath}
                disabled={inputValue.length < 5}
            >
                Verificar
            </Button>
        </Container>
    )
}