import { Container, Divider } from "../../common/styles/Divs";
import { Title, WhiteSpanText, SmallText } from "../../common/styles/Text";
import Header from "../../components/Header";

import { WhiteDiv, Li } from "./style";

export default function VirtualKey() {
    return (
        <Container
            gap="24px"
        >
            <Header 
                kind="page"
                namePage="Chave virtual"
            />
            <WhiteDiv>
                <div>
                    <SmallText>
                        Quarto
                    </SmallText>
                    <WhiteSpanText color={"#000"}>
                        A 123 / 2°
                    </WhiteSpanText>
                </div>
                <Divider />
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                    }}
                >
                    <div>
                        <SmallText>
                            Check-in
                        </SmallText>
                        <WhiteSpanText color={"#000"}>
                            Seg., 10 de jun
                        </WhiteSpanText>
                    </div>
                    <div>
                        <SmallText>
                            Check-out
                        </SmallText>
                        <WhiteSpanText color={"#000"}>
                            Sab., 15 de jun
                        </WhiteSpanText>
                    </div>
                    <div>
                        <SmallText>
                            Hóspedes
                        </SmallText>
                        <WhiteSpanText color={"#000"}>
                            4
                        </WhiteSpanText>
                    </div>
                </div>
                <img src={require("../../common/images/virtual-key.png")} style={{
                    width: "30%",
                }}/>
                <SmallText
                    align="center"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem ea nisi perspiciatis illo culpa.
                </SmallText>
            </WhiteDiv>
            <Title
                style={{
                    width: "90%",
                }}
            >
                Para sua segurança
            </Title>
            <WhiteDiv>
                <ul>
                    <Li>Lorem ipsum dolor sit amet.</Li>
                    <Li>Veniam ex laudantium eligendi iusto.</Li>
                    <Li>Est minus accusantium cumque? Reprehenderit.</Li>
                    <Li>Error rerum mollitia ut autem!</Li>
                    <Li>Omnis veritatis impedit assumenda eius.</Li>
                    <Li>Reiciendis expedita omnis minus libero.</Li>
                </ul>
            </WhiteDiv>
        </Container>
    )
}