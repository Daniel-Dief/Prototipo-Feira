import ScrollDayCalendarSlaOqueeisso from '../../components/ScrollDayCalendarSlaOqueeisso';
import Header from "../../components/Header";
import { Title, SpanText } from "../../common/styles/Text";
import { Icon } from "../../common/styles/Imgs";
import Footer from "../../components/Footer";
import { Container } from "../../common/styles/Divs";
import { useState } from "react";
import { WhiteDiv } from "../VirtualKey/style";
import CalendarFloatContainer from '../../components/FloatContainer/calendarFloatContainer';

export default function Calendar() {
    const [display, setDisplay] = useState<boolean>(false);
    const [ddisplay, ssetDisplay] = useState<boolean>(false);

    const [servicePath, setServicePath] = useState<string>("");
    const [serviceName, setServiceName] = useState<string>("");
    const [serviceHour, setServiceHour] = useState<string>("");

    function handleClicksosumi() {
        ssetDisplay(!ddisplay);
    }

    function hhandleClick(path : string, name : string, hour : string) {
        setServicePath(path)
        setServiceName(name)
        setServiceHour(hour)
        ssetDisplay(!ddisplay);
    }

    function handleClick() {
        setDisplay(!display);
    }

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
                    onClick={handleClick}
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
            <ScrollDayCalendarSlaOqueeisso 
                hhandleClick={(path, name, hour) => hhandleClick(path, name, hour)}
            />
            <CalendarFloatContainer 
                kind="new"
                display={display}
                toggleDisplay={handleClick}
            />
            <CalendarFloatContainer 
                kind="another"
                display={ddisplay}
                toggleDisplay={handleClicksosumi}
                serviceName={serviceName}
                servicePath={servicePath}
                serviceHour={serviceHour}
            />
            <Footer />
        </Container>
    )
}