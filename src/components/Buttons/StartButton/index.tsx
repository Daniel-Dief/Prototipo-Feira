import { Empty } from "../../../common/styles/Empty";
import { Icon } from "../../../common/styles/Imgs";
import { ButtonContainer, Text } from "./style";

export default function StartButton() {
    const path : string = localStorage.getItem("user") ? "/Home" : "/Verify";

    return (
       <ButtonContainer to={path}>
            <Empty />
            <Text>Iniciar</Text>
            <Icon src={require("../../../common/images/rightArrow.png")} />
       </ButtonContainer>
    )
}