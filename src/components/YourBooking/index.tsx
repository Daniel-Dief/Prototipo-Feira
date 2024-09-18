import { Title, SLink, Label, SmallText } from "../../common/styles/Text";
import { Container } from "../../common/styles/Divs";
import { Button } from "../../common/styles/Button";
import { HotelImage } from "../../common/styles/Imgs";
import { useState } from "react";

import PreCheckOut from "../.././components/PreCheckout/index";
import PreCheckOut2 from "../.././components/PreCheckout/paymentValues";
import PreCheckOut3 from "../.././components/PreCheckout/paymentFinish";
import PreCheckOut4 from "../.././components/PreCheckout/finishCheckout";


import { MasterContainer, YourBookingContainer, TextDiv, InfoDiv, CheckInOutDiv, CheckDateTimeDiv, SlaDiv } from "./style";

interface YourBookingProps {
    title?: boolean;
    togleFloatContainer: () => void;
}

export default function YourBooking({ title = true, togleFloatContainer } : YourBookingProps) {
    const checkin = localStorage.getItem('checkin') === "true" ? true : false;

    const [modalPage, setmodalPage] = useState<number>(0)
    const [display, setdisplay] = useState<boolean>(false)
    

    function handlePreCheckin() {
        setmodalPage(1000)
        togleFloatContainer();
    }

    function buttonNext(){
        setmodalPage(modalPage + 1)
    }

    function buttonBack() {
        setmodalPage(modalPage - 1)
    }

    let modalContainer;

    if (modalPage == 1000) {
        modalContainer = <PreCheckOut buttonBack={togleFloatContainer} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={true}/>
    } else if (modalPage == 1001) {
        modalContainer = <PreCheckOut2 buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={true}/>
    } else if (modalPage == 1002) {
        modalContainer = <PreCheckOut3 buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={true}/>
    } else if (modalPage == 1003) {
        modalContainer = <PreCheckOut4 />
    }

    return (
        <MasterContainer
            gap="16px"
        >
            {
                title
                ?
                <TextDiv>
                    <Title>Sua reserva</Title>
                    <SLink to={"/Booking"}>Ver reserva</SLink>
                </TextDiv>
                :
                <></>
            }
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
                        {
                            checkin
                            ?
                            "Check-out"
                            :
                            "Pré Check-in"
                        }
                    </Button>
                </InfoDiv>
            </YourBookingContainer>
            {modalContainer}
        </MasterContainer>
    )
}