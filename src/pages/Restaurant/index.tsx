import { Container, Divider } from "../../common/styles/Divs";
import Header from "../../components/Header";
import { Title, SmallText } from "../../common/styles/Text";
import Input from "../../components/Input/Input";
import ShortInfo from "../../components/ShortInfo";
import DishContainer from "../../components/DishContainer";
import FloatContainer from "../../components/FloatContainerShop";
import FooterTicket from "../../components/FooterTicket";
import OpenTicket from "../../components/openTicket";
import OpenTicket2 from "../../components/openTicket/openTicket2";
import FiveStepContainer from "../../components/FloatContainer/fiveStep";
import PreCheckin from "../PrecheckinFinish";

import { useState } from "react";

import { Menu, Filters, ScrollCategories, TitleDiv, NavContainer } from "./style";

export default function Restaurant() {

    const [displayFloatContainer, setDisplayFloatContainer] = useState<boolean>(false);

    function togleFloatContainer() {
        setDisplayFloatContainer(!displayFloatContainer);
    }

    const [modalPage, setModalPage] = useState<number>(1)

    function openTicket() {
        setModalPage(2)
    }

    function openTicket2() {
        setModalPage(3)
    }

    function openGuests() {
        setModalPage(7)
    }
    
    function congratulations() {
        setModalPage(8)
    }

    function redirect() {
        window.location.href = "/CheckPage"
    }

    let modalContainer;
    if (modalPage == 1) {
        modalContainer = <FloatContainer togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 2) {
        modalContainer = <OpenTicket display={true} togleFloatContainer={togleFloatContainer} NextTicket={openTicket2} />
    } else if (modalPage == 3) {
        modalContainer = <OpenTicket2 display={true} togleFloatContainer={togleFloatContainer} NextTicket={openGuests} />
    }  else if (modalPage == 7) {
        modalContainer = <FiveStepContainer buttonBack={openTicket2} buttonNext={congratulations} togleFloatContainer={togleFloatContainer} display={true}/>
    } else if (modalPage == 8) {
        modalContainer = <PreCheckin />
    }

    return (
        <Container
            gap="12px"
        >
            <Header
                kind="page"
                namePage="Restaurante"
            />
            <TitleDiv>
                <Title>
                    Quarto - Hoje 16:00h
                </Title>
                <Input 
                    type="text"
                    placeholder="Explore nossa gastronomia"
                />
            </TitleDiv>
            <NavContainer>
                <Filters>
                    <SmallText>Ver tudo</SmallText>
                    <ShortInfo
                        text="Comidas"
                    />
                    <SmallText>Bebidas</SmallText>
                </Filters>
                <Divider />
                <ScrollCategories>
                    <ShortInfo
                        text="Ipsum"
                    />
                    <ShortInfo
                        text="Lorem Ipsum"
                    />
                    <ShortInfo
                        text="Lorem"
                    />
                    <ShortInfo
                        text="Ipsum Lorem"
                    />
                    <ShortInfo
                        text="Dolor"
                    />
                </ScrollCategories>
            </NavContainer>
            <Menu>
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle3.png")}
                    time="40min"
                    value="50,00"
                    link={togleFloatContainer}
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle4.png")}
                    time="40min"
                    value="50,00"
                    link={togleFloatContainer}
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle5.png")}
                    time="40min"
                    value="50,00"
                    link={togleFloatContainer}
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle6.png")}
                    time="40min"
                    value="50,00"
                    link={togleFloatContainer}
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle7.png")}
                    time="40min"
                    value="50,00"
                    link={togleFloatContainer}
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle8.png")}
                    time="40min"
                    value="50,00"
                    link={togleFloatContainer}
                />
            </Menu>
            {modalContainer}
            <FooterTicket display="flex" openTicket={openTicket} value="R$ 32,00 / 1 item" text="Ver sacola" />
        </Container>
    )
}