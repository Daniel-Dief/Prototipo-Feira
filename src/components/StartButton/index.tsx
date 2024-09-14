import { useEffect } from "react";
import { Empty } from "../../common/styles/Empty";
import { Icon } from "../../common/styles/Imgs";
import { ButtonContainer, Text } from "./style";

export default function StartButton() {
    const path : string = localStorage.getItem("user") ? "/SignUp" : "/SignIn";

    return (
       <ButtonContainer to={path}>
            <Empty />
            <Text>Iniciar</Text>
            <Icon src={require("../../common/images/rightArrow.png")} />
       </ButtonContainer>
    )
}