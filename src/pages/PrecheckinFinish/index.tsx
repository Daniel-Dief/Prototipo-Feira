import { Logo, BigImage } from "../../common/styles/Imgs";
import { Title, SmallText, SLink } from "../../common/styles/Text";
import { Button, ButtonSecundary } from "../../common/styles/Button";

import { DivTitle, DivTop, ContainerFinish } from "./style";

export default function PreCheckin() {
    function handleSignIn() {
        window.location.href = "/CheckPage";
    }

    return (
        <ContainerFinish>
            <DivTop>
                <Logo src={require("../../common/images/logoBlack.png")}/>
                <DivTitle>
                    <Title>
                        Pré Check-in Completo!
                    </Title>
                    <SmallText>
                        Parabéns! Seu cré check-in está completo. Agora, o conforto Orquestre espera por você.
                    </SmallText>
                </DivTitle>
            </DivTop>
            <BigImage src={require("../../common/images/badge-check.png")} alt="Ok"/>
            <Button
                onClick={handleSignIn}
            >
                Finalizar
            </Button>
        </ContainerFinish>
    )
}
