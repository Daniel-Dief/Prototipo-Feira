import { Container, Divider } from "../../common/styles/Divs";
import Header from "../../components/Header";
import { Title, SmallText } from "../../common/styles/Text";
import Input from "../../components/Input/Input";
import ShortInfo from "../../components/ShortInfo";
import DishContainer from "../../components/DishContainer";

import { Menu, Filters, ScrollCategories, TitleDiv, NavContainer } from "./style";

export default function Restaurant() {
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
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle4.png")}
                    time="40min"
                    value="50,00"
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle5.png")}
                    time="40min"
                    value="50,00"
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle6.png")}
                    time="40min"
                    value="50,00"
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle7.png")}
                    time="40min"
                    value="50,00"
                />
                <DishContainer 
                    backgroundImage={require("../../common/images/rectangle8.png")}
                    time="40min"
                    value="50,00"
                />
            </Menu>
        </Container>
    )
}