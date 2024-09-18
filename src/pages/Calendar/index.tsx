import ScrollDayCalendarSlaOqueeisso from '../../components/ScrollDayCalendarSlaOqueeisso';
import Header from "../../components/Header";
import { Title, SpanText } from "../../common/styles/Text";
import { Icon } from "../../common/styles/Imgs";
import Footer from "../../components/Footer";
import { Container } from "../../common/styles/Divs";
import { useState } from "react";
import { WhiteDiv } from "../VirtualKey/style";
import CalendarFloatContainer from '../../components/FloatContainer/calendarFloatContainer';
import FiveStepContainer from '../../components/FloatContainer/fiveStep';
import Component from './component';
import PreCheckin from '../PrecheckinFinish';

function Signature() {
    const [modalPage, setModalPage] = useState<number>(1);

    function openTicket2() {
        setModalPage(2);
    }

    let modalContainer;

    if (modalPage === 1) {
        modalContainer = <Component link={openTicket2} />;
    } else if (modalPage === 2) {
        modalContainer = <PreCheckin />;
    }

    return (
        <Container gap="12px">
            {modalContainer}
        </Container>
    );
}

export default function Calendar() {
    const [display, setDisplay] = useState<boolean>(false);
    const [ddisplay, ssetDisplay] = useState<boolean>(false);
    const [servicePath, setServicePath] = useState<string>("");
    const [serviceName, setServiceName] = useState<string>("");
    const [serviceHour, setServiceHour] = useState<string>("");
    const [showModal, setshowModal] = useState<number>(1);

    function handleClicksosumi() {
        ssetDisplay(!ddisplay);
    }

    function hhandleClick(path: string, name: string, hour: string) {
        setServicePath(path);
        setServiceName(name);
        setServiceHour(hour);
        ssetDisplay(!ddisplay);
    }

    function handleClick() {
        setDisplay(!display);
    }
    
    function setShowmodal4() {
        setshowModal(4);
    }

    function handleRedirect() { // Renomeie a função para evitar conflitos
        setshowModal(3);
    }

    function setShowmodal2() {
        setshowModal(2);
    }

    function setShowmodal1() {
        setshowModal(1);
    }

    let modalPlus;

    if (showModal === 1) {
        modalPlus = <CalendarFloatContainer kind="new" display={display} backButton={handleClick} toggleDisplay={setShowmodal2} />;
    } else if (showModal === 2) {
        modalPlus = <FiveStepContainer buttonBack={setShowmodal1} buttonNext={handleRedirect} togleFloatContainer={handleClick} display={display} />;
    } else if (showModal === 3) {
        modalPlus = <Component link={setShowmodal4} />; 
    } else if (showModal === 4) {
        modalPlus = <PreCheckin />;
    }

    return (
        <Container gap="20px">
            <Header kind="page" namePage="Agendamentos" />
            <Container flex_direction="row" justify_content="space-between" style={{ width: "90%" }}>
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
                    <Icon src={require("../../common/images/calendar-selected.png")} />
                </SpanText>
            </Container>
            <Container flex_direction="row" gap="20px" style={{ width: "90%" }}>
                <WhiteDiv style={{ padding: "10px 20px", borderRadius: "12px" }}>
                    <SpanText>Seg</SpanText>
                    <SpanText>15</SpanText>
                </WhiteDiv>
                <WhiteDiv style={{ padding: "10px 20px", borderRadius: "12px", backgroundColor: "#C2AE8F" }}>
                    <SpanText style={{ color: "#FFF" }}>Ter</SpanText>
                    <SpanText style={{ color: "#FFF" }}>16</SpanText>
                </WhiteDiv>
                <WhiteDiv style={{ padding: "10px 20px", borderRadius: "12px" }}>
                    <SpanText>Qua</SpanText>
                    <SpanText>17</SpanText>
                </WhiteDiv>
                <WhiteDiv style={{ padding: "10px 20px", borderRadius: "12px" }}>
                    <SpanText>Qui</SpanText>
                    <SpanText>18</SpanText>
                </WhiteDiv>
                <WhiteDiv style={{ padding: "10px 20px", borderRadius: "12px" }}>
                    <SpanText>Sex</SpanText>
                    <SpanText>19</SpanText>
                </WhiteDiv>
            </Container>
            <ScrollDayCalendarSlaOqueeisso hhandleClick={(path, name, hour) => hhandleClick(path, name, hour)} />
            {modalPlus}
            <CalendarFloatContainer
                kind="another"
                display={ddisplay}
                backButton={handleClicksosumi}
                toggleDisplay={handleClicksosumi}
                serviceName={serviceName}
                servicePath={servicePath}
                serviceHour={serviceHour}
            />
            <Footer />
        </Container>
    );
}