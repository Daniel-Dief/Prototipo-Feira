import { WhiteSpanText, WhiteSmallText } from "../../common/styles/Text";
import { BigIcon } from "../../common/styles/Imgs";
import { IconBoxDiv, Empty } from "../../common/styles/Divs";

import { Container, TextDiv } from "./style";

interface HeaderProps {
    kind: "home" | "page";
    namePage?: string;
}

export default function Header({ kind, namePage }: HeaderProps) {
    const userName = localStorage.getItem('userName')

    function handleBack() {
        window.history.back()
    }

    if(kind === "home") {
        return (
            <Container>
                <TextDiv>
                    <WhiteSpanText>Olá, {userName}👋</WhiteSpanText>
                    <WhiteSmallText>Bem vindo ao Orquestre!</WhiteSmallText>
                </TextDiv>
                <IconBoxDiv>
                    <BigIcon src={require("../../common/images/settings.png")}/>
                </IconBoxDiv>
            </Container>
        )
    } else {
        return (
            <Container>
                <IconBoxDiv onClick={handleBack}>
                    <BigIcon src={require("../../common/images/leftArrow.png")}/>
                </IconBoxDiv>
                <TextDiv>
                    <WhiteSpanText>{namePage}</WhiteSpanText>
                </TextDiv>
                <Empty/>
            </Container>
        )
    }

}