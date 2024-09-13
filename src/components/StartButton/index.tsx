import { Empty } from "../../common/styles/Empty";
import { Icon } from "../../common/styles/Imgs";
import { ButtonContainer, Text } from "./style";

export default function StartButton() {
    return (
       <ButtonContainer to="SignIn">
            <Empty />
            <Text>Iniciar</Text>
            <Icon src={require("../../common/images/rightArrow.png")} />
       </ButtonContainer>
    )
}