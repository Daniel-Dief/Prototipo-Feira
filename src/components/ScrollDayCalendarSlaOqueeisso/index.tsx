import { SmallText } from "../../common/styles/Text";
import { Container, Divider } from "../../common/styles/Divs";
import { Icon } from "../../common/styles/Imgs";
import { CampHour, LabelHour, EventDiv } from "./style";
import { start } from "repl";

interface Props {
    hhandleClick: (
        servicePath: string,
        serviceName: string,
        serviceHour: string
    ) => void;
}

export default function ScrollDayCalendarSlaOqueeisso({ hhandleClick }: Props) {
    return (
        <Container
            gap="48px"
            style={{
                width: "90%"
            }}
        >
            <CampHour>
                <LabelHour>
                    <SmallText>09:00</SmallText>
                    <SmallText>am</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>10:00</SmallText>
                    <SmallText>am</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>11:00</SmallText>
                    <SmallText>am</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>12:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv
                    onClick={() => hhandleClick(require("../../common/images/utensils-crossed-selected.png"), "Restaurante", "12:00")}
                >
                    <Divider />
                    <div
                        style={{
                            backgroundColor: "#C2AE8F",
                            padding: "16px",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "90%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                gap: "25px"
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#FFF",
                                    padding: "4px",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon src={require("../../common/images/utensils-crossed-selected.png")} />
                            </div>
                            <SmallText
                                style={{
                                    color: "#FFF"
                                }}
                            >Restaurante</SmallText>
                        </div>
                        <Icon src={require("../../common/images/square-arrow-out-up-right.png")}/>
                    </div>
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>01:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>02:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>03:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv
                    onClick={() => hhandleClick(require("../../common/images/baby.png"), "Baby Sitter", "12:00")}
                >
                    <Divider />
                    <div
                        style={{
                            backgroundColor: "#C2AE8F",
                            padding: "16px",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "90%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                gap: "25px"
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#FFF",
                                    padding: "4px",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon src={require("../../common/images/baby.png")} />
                            </div>
                            <SmallText
                                style={{
                                    color: "#FFF"
                                }}
                            >Baby-Sitter</SmallText>
                        </div>
                        <Icon src={require("../../common/images/square-arrow-out-up-right.png")}/>
                    </div>
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>04:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>05:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>06:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>07:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv
                    onClick={() => hhandleClick(require("../../common/images/washing-machine.png"), "Lavanderia", "12:00")}
                >
                    <Divider />
                    <div
                        style={{
                            backgroundColor: "#C2AE8F",
                            padding: "16px",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "90%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                gap: "25px"
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#FFF",
                                    padding: "4px",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon src={require("../../common/images/washing-machine.png")} />
                            </div>
                            <SmallText
                                style={{
                                    color: "#FFF"
                                }}
                            >Lavanderia</SmallText>
                        </div>
                        <Icon src={require("../../common/images/square-arrow-out-up-right.png")}/>
                    </div>
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>08:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
                <LabelHour>
                    <SmallText>09:00</SmallText>
                    <SmallText>pm</SmallText>
                </LabelHour>
                <EventDiv>
                    <Divider />
                </EventDiv>
            </CampHour>
            <CampHour>
            </CampHour>
        </Container>
    )
}