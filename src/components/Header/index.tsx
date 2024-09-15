import { WhiteSpanText, WhiteSmallText } from "../../common/styles/Text";
import { BigIcon } from "../../common/styles/Imgs";
import { IconBoxDiv } from "../../common/styles/Divs";

import { Container, TextDiv } from "./style";

export default function Header() {
    const userName = localStorage.getItem('userName')

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
}