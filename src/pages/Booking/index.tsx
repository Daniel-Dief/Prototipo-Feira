import Header from "../../components/Header"
import YourBooking from "../../components/YourBooking"
import ShortInfo from "../../components/ShortInfo"

import { Container } from "../../common/styles/Divs"
import { Title, SLink, SmallText } from "../../common/styles/Text";

import { SpecificDiv, CardContainer, TextDiv } from "./style"

export default function Booking () {
    return (
        <Container
            justify_content="space-between"
            gap="24px"
        >
            <Header kind="page" namePage="Reserva"/>
            <YourBooking title={false} togleFloatContainer={() => {}}/>
            <CardContainer>
                <Title>Características do quarto</Title>
                <SpecificDiv>
                    <ShortInfo 
                        icon={require("../../common/images/users-round.png")}
                        text="4"
                    />
                    <ShortInfo 
                        icon={require("../../common/images/bed.png")}
                        text="Queen"
                    />
                    <ShortInfo 
                        icon={require("../../common/images/bed-double.png")}
                        text="Sofá-cama"
                    />
                    <ShortInfo 
                        icon={require("../../common/images/mountain-snow.png")}
                        text="Vista para a montanha"
                    />
                    <ShortInfo 
                        icon={require("../../common/images/ruler.png")}
                        text="26 m2"
                    />
                </SpecificDiv>
            </CardContainer>
            <CardContainer>
                <TextDiv>
                    <Title>Amenidades principais</Title>
                    <SLink to="/Services">ver tudo</SLink>
                </TextDiv>
                <SpecificDiv>
                    <ShortInfo 
                        icon={require("../../common/images/air-vent.png")}
                        text="Ar condicionado"
                    />
                    <ShortInfo 
                        icon={require("../../common/images/phone.png")}
                        text="Telefone"
                    />
                    <ShortInfo 
                        icon={require("../../common/images/vault.png")}
                        text="Cofre"
                    />
                    <ShortInfo 
                        icon={require("../../common/images/wifi.png")}
                        text="Wi-fi"
                    />
                    <ShortInfo 
                        icon={require("../../common/images/refrigerator.png")}
                        text="Frigobar"
                    />
                </SpecificDiv>
            </CardContainer>
            <CardContainer>
                <Title>
                    Descrição do quarto
                </Title>
                <SpecificDiv>
                    <SmallText
                        align="justify"
                    >
                        Os apartamentos da Categoria Superior com Vista, possuem vista para a piscina, eles são aconchegantes, possuem lareira elétrica, que traz todo o charme do frio da cidade para seu apartamento, conta com cama Queen Size e Sofá-cama. Este quarto possui wi-fi gratuito, ar-condicionado, cofre, telefone, serviço de despertar, banheiro privativo e Smart TV.
                    </SmallText>
                </SpecificDiv>
            </CardContainer>
        </Container>
    )
}