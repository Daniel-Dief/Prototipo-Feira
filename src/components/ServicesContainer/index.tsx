import { SmallText } from "../../common/styles/Text";
import { Container } from "../../common/styles/Divs";
import { BigIcon } from "../../common/styles/Imgs";

import { ServiceDiv } from "./style";

export default function ServicesContainer() {
    return (
        <Container
            flex_direction="row"
            gap="16px"
        >
            <Container
                onClick={() => window.location.href = "/VirtualKey"}
                gap="4px"
            >
                <ServiceDiv>
                    <BigIcon src={require("../../common/images/key.png")} />
                </ServiceDiv>
                <SmallText>
                    Chave Virtual
                </SmallText>
            </Container>
            <Container
                gap="4px"
            >
                <ServiceDiv>
                    <BigIcon src={require("../../common/images/paintbrush.png")} />
                </ServiceDiv>
                <SmallText>
                    Limpeza
                </SmallText>
            </Container>
            <Container
                onClick={() => window.location.href = "/Restaurant"}
                gap="4px"
            >
                <ServiceDiv>
                    <BigIcon src={require("../../common/images/utensils-crossed.png")} />
                </ServiceDiv>
                <SmallText>
                    Restaurante
                </SmallText>
            </Container>
            <Container
                gap="4px"
            >
                <ServiceDiv>
                    <BigIcon src={require("../../common/images/layout-dashboard.png")} />
                </ServiceDiv>
                <SmallText>
                    Serviços
                </SmallText>
            </Container>
        </Container>
    )
}