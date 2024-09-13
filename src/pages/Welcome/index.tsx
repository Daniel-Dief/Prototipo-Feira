import { Logo } from "../../common/styles/Imgs";
import { Welcome as Title, SmallText } from "../../common/styles/Text";
import Languages from "../../components/Languages";
import StartButton from "../../components/StartButton";

import { Container, BottomContainer } from "./style";

export default function Welcome() {
    return (
        <Container>
            <Logo src={require("../../common/images/logoWhite.png")}/>
            <BottomContainer>
                <Title>Vamos realçar seu conforto!</Title>
                <SmallText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iure nesciunt dignissimos.</SmallText>
                <Languages />
                <StartButton />
            </BottomContainer>
        </Container>
    )
}