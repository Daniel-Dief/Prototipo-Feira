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
import { VerifyProducts, ResetProducts, UpdateProducts, CheckAmount } from "./functionsShop";



import { useState } from "react";

import { Menu, Filters, ScrollCategories, TitleDiv, NavContainer } from "./style";

export default function Restaurant() {

    const [displayFloatContainer, setDisplayFloatContainer] = useState<boolean>(false);

    const [id, setid] = useState<string | undefined>(undefined)

    function togleFloatContainer(product ?: string) {
        if (product) {
            setDisplayFloatContainer(!displayFloatContainer);
            setid(product)
            return id
        } else{
            setDisplayFloatContainer(!displayFloatContainer);
        }
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

    let modalContainer;
    if (modalPage == 1) {
        modalContainer = <FloatContainer id={id} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 2) {
        modalContainer = <OpenTicket display={!displayFloatContainer} togleFloatContainer={togleFloatContainer} NextTicket={openTicket2} />
    } else if (modalPage == 3) {
        modalContainer = <OpenTicket2 display={!displayFloatContainer} togleFloatContainer={togleFloatContainer} NextTicket={openGuests} />
    }  else if (modalPage == 7) {
        modalContainer = <FiveStepContainer buttonBack={openTicket2} buttonNext={congratulations} togleFloatContainer={togleFloatContainer} display={true}/>
    } else if (modalPage == 8) {
        modalContainer = <PreCheckin />
    }

    const jsonProducts = VerifyProducts() as Array<{ id: string; image: string; time: string; value: number }>



    return (
        <Container
            gap="12px"
            margin={CheckAmount()}
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
                {
                    jsonProducts.map(product => (
                        <DishContainer 
                            backgroundImage={product.image}
                            time={product.time}
                            value={`${product.value}.00`}
                            link={() => togleFloatContainer(product.id)}
                            
                        />
                    ))
                }
            </Menu>
            {modalContainer}
            <Container margin={CheckAmount()}/>
            <FooterTicket display={CheckAmount()} openTicket={openTicket} text="Ver sacola" />
        </Container>
    )
}
