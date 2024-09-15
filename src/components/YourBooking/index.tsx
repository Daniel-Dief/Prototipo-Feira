import { Title, SLink, Label, SmallText } from "../../common/styles/Text";
import { Container } from "../../common/styles/Divs";
import { Button } from "../../common/styles/Button";
import { HotelImage } from "../../common/styles/Imgs";

import { YourBookingContainer, TextDiv, InfoDiv, CheckInOutDiv, CheckDateTimeDiv, SlaDiv } from "./style";

export default function YourBooking() {
    function handlePreCheckin() {
        window.location.href = "/PreCheckin";
    }

    return (
        <Container
            gap="16px"
        >
            <TextDiv>
                <Title>Sua reserva</Title>
                <SLink to={"/Booking"}>Ver reserva</SLink>
            </TextDiv>
            <YourBookingContainer>
                <HotelImage src={require("../../common/images/rectangle2.png")} alt="Imagem do quarto" />
                <InfoDiv>
                    <Label>Suíte Cadenza</Label>
                    <CheckInOutDiv>
                        <CheckDateTimeDiv>
                            <SlaDiv>
                                <SmallText>Check-in</SmallText>
                                <SmallText>15:00</SmallText>
                            </SlaDiv>
                            <SlaDiv>
                                <SmallText
                                    color={"#18181B"}
                                >
                                    Seg., 10 de Junho
                                </SmallText>
                            </SlaDiv>
                        </CheckDateTimeDiv>
                        <CheckDateTimeDiv>
                            <SlaDiv>
                                <SmallText>Check-out</SmallText>
                                <SmallText>12:00</SmallText>
                            </SlaDiv>
                            <SlaDiv>
                                <SmallText
                                    color={"#18181B"}
                                >
                                    Sab., 15 de Junho
                                </SmallText>
                            </SlaDiv>
                        </CheckDateTimeDiv>
                    </CheckInOutDiv>
                    <Button
                        onClick={handlePreCheckin}
                    >
                        Pré Check-in
                    </Button>
                </InfoDiv>
            </YourBookingContainer>
        </Container>
    )
}