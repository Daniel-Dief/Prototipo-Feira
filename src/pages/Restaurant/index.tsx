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

import rectangle3 from '../../common/images/rectangle3.png';
import rectangle4 from '../../common/images/rectangle4.png';
import rectangle5 from '../../common/images/rectangle5.png';
import rectangle6 from '../../common/images/rectangle6.png';
import rectangle7 from '../../common/images/rectangle7.png';
import rectangle8 from '../../common/images/rectangle8.png';
import rectangle9 from '../../common/images/rectangle9.png';
import rectangle10 from '../../common/images/rectangle10.png';

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

    function redirect() {
        window.location.href = "/CheckPage"
    }

    let modalContainer;
    if (modalPage == 1) {
        modalContainer = <FloatContainer id={id} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 2) {
        modalContainer = <OpenTicket display={displayFloatContainer} togleFloatContainer={togleFloatContainer} NextTicket={openTicket2} />
    } else if (modalPage == 3) {
        modalContainer = <OpenTicket2 display={displayFloatContainer} togleFloatContainer={togleFloatContainer} NextTicket={openGuests} />
    }  else if (modalPage == 7) {
        modalContainer = <FiveStepContainer buttonBack={openTicket2} buttonNext={congratulations} togleFloatContainer={togleFloatContainer} display={true}/>
    } else if (modalPage == 8) {
        modalContainer = <PreCheckin />
    }

    const jsonProducts = [
        {
            'id' : '1',
            'product' : 'Lorem ipsum',
            'image' : rectangle3,
            'time' : '45min',
            'value' : 32.00
        },
        {
            'id' : '2',
            'product' : 'Lorem ipsum',
            'image' : rectangle4,
            'time' : '30min',
            'value' : 16.00
        },
        {
            'id' : '3',
            'product' : 'Lorem ipsum',
            'image' : rectangle5,
            'time' : '60min',
            'value' : 56.00
        },
        {
            'id' : '4',
            'product' : 'Lorem ipsum',
            'image' : rectangle6,
            'time' : '60min',
            'value' : 34.00
        },
        {
            'id' : '5',
            'product' : 'Lorem ipsum',
            'image' : rectangle7,
            'time' : '50min',
            'value' : 40.00
        },
        {
            'id' : '6',
            'product' : 'Lorem ipsum',
            'image' : rectangle8,
            'time' : '10min',
            'value' : 25.00
        },
        {
            'id' : '7',
            'product' : 'Lorem ipsum',
            'image' : rectangle9,
            'time' : '5min',
            'value' : 6.00
        },
        {
            'id' : '8',
            'product' : 'Lorem ipsum',
            'image' : rectangle10,
            'time' : '30min',
            'value' : 16.00
        }
    ]

    localStorage.setItem('json-products', JSON.stringify(jsonProducts))

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
                {
                    jsonProducts.map(product => (
                        <DishContainer 
                            backgroundImage={product.image}
                            time={product.time}
                            value={product.value}
                            link={() => togleFloatContainer(product.id)}
                            
                        />
                    ))
                }
            </Menu>
            {modalContainer}
            <FooterTicket display="flex" openTicket={openTicket} value="R$ 32,00 / 1 item" text="Ver sacola" />
        </Container>
    )
}