import ScrollDayCalendarSlaOqueeisso from '../../components/ScrollDayCalendarSlaOqueeisso';
import Header from "../../components/Header";
import { Title, SpanText } from "../../common/styles/Text";
import { Icon } from "../../common/styles/Imgs";
import Footer from "../../components/Footer";
import { Container } from "../../common/styles/Divs";

import { WhiteDiv } from "../VirtualKey/style";

export default function Calendar() {
    return (
        <Container
            gap="20px"
        >
            <Header 
                kind="page"
                namePage="Agendamentos"
            />
            <Container
                flex_direction="row"
                justify_content="space-between"
                style={{
                    width: "90%"
                }}
            >
                <Title>Jun, 2024</Title>
                <SpanText
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px"
                    }}
                >
                    Adicionar serviço +
                    <Icon src={require("../../common/images/calendar-selected.png")}/>
                </SpanText>
            </Container>
            <Container
                flex_direction="row"
                gap="20px"
                style={{
                    width: "90%"
                }}
            >
                <WhiteDiv
                    style={{
                        padding: "10px 20px",
                        borderRadius: "12px"
                    }}
                >
                    <SpanText>Seg</SpanText>
                    <SpanText>15</SpanText>
                </WhiteDiv>
                <WhiteDiv
                    style={{
                        padding: "10px 20px",
                        borderRadius: "12px",
                        backgroundColor: "#C2AE8F",
                    }}
                >
                    <SpanText
                        style={{
                            color: "#FFF"
                        }}
                    >Ter</SpanText>
                    <SpanText
                        style={{
                            color: "#FFF"
                        }}
                    >16</SpanText>
                </WhiteDiv>
                <WhiteDiv
                    style={{
                        padding: "10px 20px",
                        borderRadius: "12px"
                    }}
                >
                    <SpanText>Qua</SpanText>
                    <SpanText>17</SpanText>
                </WhiteDiv>
                <WhiteDiv
                    style={{
                        padding: "10px 20px",
                        borderRadius: "12px"
                    }}
                >
                    <SpanText>Qui</SpanText>
                    <SpanText>18</SpanText>
                </WhiteDiv>
                <WhiteDiv
                    style={{
                        padding: "10px 20px",
                        borderRadius: "12px"
                    }}
                >
                    <SpanText>Sex</SpanText>
                    <SpanText>19</SpanText>
                </WhiteDiv>
            </Container>
            <ScrollDayCalendarSlaOqueeisso />
            <Footer />
        </Container>
    )
}