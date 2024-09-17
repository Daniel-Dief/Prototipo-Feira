import { Container, Divider } from '../../common/styles/Divs'
import { Title, SmallText, WhiteSpanText } from '../../common/styles/Text'
import { Icon } from '../../common/styles/Imgs';

import { HotelImage, DivTop, DivText, DivBottom, InfoDiv } from './style';

export default function BookingResume() {
    function handleClick() {
        window.location.href = "/booking";
    }

    return (
        <Container
            gap='12px'
            style={{
                backgroundColor: "#FFF",
                padding: "12px",
                borderRadius: "12px",
            }}>
            <DivTop>
                <HotelImage src={require("../../common/images/rectangle2.png")}/>
                <DivText>
                    <Title>
                        Suíte Montanhosa
                    </Title>
                    <p
                        style={{
                            textAlign: "left",
                            width: "100%",
                            color: "#000"
                        }}
                    >
                        A 123 / 2°
                    </p>
                </DivText>
            </DivTop>
            <Divider />
            <DivBottom>
                <InfoDiv>
                    <SmallText>Check-in</SmallText>
                    <WhiteSpanText
                        color="#000"
                    >
                        Seg., 15 de jun
                    </WhiteSpanText>
                </InfoDiv>
                <InfoDiv>
                    <SmallText>Check-in</SmallText>
                    <WhiteSpanText
                        color="#000"
                    >
                        Sab., 20 de jun
                    </WhiteSpanText>
                </InfoDiv>
                <Icon onClick={handleClick} src={require("../../common/images/rightArrowBrown.png")}/>
            </DivBottom>
        </Container>
    )
}