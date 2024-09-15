import { Title, Label } from "../../common/styles/Text";
import { BigIcon } from "../../common/styles/Imgs";

import { MasterContainer, ServicesDiv, ServiceDiv } from "./style";

export default function Services() {
    return (
        <MasterContainer>
            <Title>O que você precisa?</Title>
            <ServicesDiv>
                <ServiceDiv>
                    <BigIcon src={require("../../common/images/utensils-crossed.png")} alt="Restaurante" />
                    <Label>Restaurante</Label>
                </ServiceDiv>
                <ServiceDiv>
                    <BigIcon src={require("../../common/images/paintbrush.png")} alt="Limpeza" />
                    <Label>Limpeza</Label>
                </ServiceDiv>
                <ServiceDiv>
                    <BigIcon src={require("../../common/images/washing-machine.png")} alt="Lavanderia" />
                    <Label>Lavanderia</Label>
                </ServiceDiv>
                <ServiceDiv>
                    <BigIcon src={require("../../common/images/baby.png")} alt="BabySitting" />
                    <Label>BabySitting</Label>
                </ServiceDiv>
            </ServicesDiv>
        </MasterContainer>
    )
}