import { Container, Divider } from "../../common/styles/Divs";
import Header from "../../components/Header";
import { Title, SmallText } from "../../common/styles/Text";
import Input from "../../components/Input/Input";
import ShortInfo from "../../components/ShortInfo";
import DishContainer from "../../components/DishContainer";
import FloatContainer from "../../components/FloatContainerShop";
import FooterTicket from "../../components/FooterTicket";

import { useState } from "react";

import { Menu, Filters, ScrollCategories, TitleDiv, NavContainer } from "./style";

export default function Restaurant() {

    const [displayFloatContainer, setDisplayFloatContainer] = useState<boolean>(false);

    function togleFloatContainer() {
        setDisplayFloatContainer(!displayFloatContainer);
    }

    const [modalPage, setModalPage] = useState<number>(1)

    let teste

    function buttonAdd () {
        teste = <FooterTicket display="flex"/>
    }

    let modalContainer;
    if (modalPage == 1) {
        modalContainer = <FloatContainer execFooter={buttonAdd} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
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
            {teste}
            <FooterTicket display="flex"/>
        </Container>
    )
}