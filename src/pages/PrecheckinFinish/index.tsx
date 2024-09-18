import { Logo, BigImage } from "../../common/styles/Imgs";
import { Title, SmallText, SLink } from "../../common/styles/Text";
import { Button, ButtonSecundary } from "../../common/styles/Button";
import { Container } from "../../common/styles/FloatContainer";

import { DivTitle, DivTop, ContainerFinish, AlignIcon } from "./style";

export default function PreCheckin() {
    function handleSignIn() {
        window.location.href = "/CheckPage";
    }

    return (
        <Container gap="18px" display={true} paddingBotton="0.1px">
            <ContainerFinish>
                <DivTop>
                    <DivTitle>
                        <Title>
                            Pré Check-in Completo!
                        </Title>
                        <SmallText>
                            Parabéns! Seu cré check-in está completo. Agora, o conforto Orquestre espera por você.
                        </SmallText>
                    </DivTitle>
                </DivTop>
                <AlignIcon>
                    <BigImage src={require("../../common/images/badge-check.png")} alt="Ok"/>
                </AlignIcon>
                <Button
                    onClick={handleSignIn}
                >
                    Finalizar
                </Button>
            </ContainerFinish>
        </Container>
    )
}
