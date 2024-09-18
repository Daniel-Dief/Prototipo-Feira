import { BigIcon, Icon } from "../../common/styles/Imgs"
import { Container } from "../../common/styles/Divs"
import { Title, WhiteSpanText, } from "../../common/styles/Text";

import { IconBoxDiv, AgendDiv } from "./style";

export default function CardAgend() {
    return (
        <Container
            flex_direction="row"
            justify_content="space-between"
            gap="24px"

            style={{
                background: "#FFF",
                borderRadius: "12px",
                padding: "12px",
                width: "90%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px"
                }}
            >
                <IconBoxDiv>
                    <BigIcon src={require("../../common/images/calendar-selected.png")}/>
                </IconBoxDiv>
                <AgendDiv>
                    <Title>Agendamentos</Title>
                    <WhiteSpanText
                        color="#000"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "4px"
                        }}
                    >
                        <Icon src={require("../../common/images/utensils-crossed.png")} />
                        4
                        <Icon src={require("../../common/images/paintbrush.png")} />
                        2
                        <Icon src={require("../../common/images/washing-machine.png")} />
                        3
                        <Icon src={require("../../common/images/baby.png")} />
                        1
                    </WhiteSpanText>
                </AgendDiv>
            </div>
            <div
                onClick={() => window.location.href = "/Calendar"}
            >
                <BigIcon src={require("../../common/images/rightArrowBrown.png")}/>
            </div>
        </Container>
    )
}