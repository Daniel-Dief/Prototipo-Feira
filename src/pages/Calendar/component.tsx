import { NavContainer, BodyContainer, TextNav } from "../../common/styles/FloatContainer";
import { Button } from "../../common/styles/Button";
import { ImageSteps } from "../../components/FloatContainer/style";
import { ImageSignature } from "../Signature/style";
import { Container } from "../../common/styles/FloatContainer";

interface RedirectProps{
    link: () => void;
}

export default function Component({ link } : RedirectProps) {

    return (
        <Container gap="12px" paddingBotton="1px" display={true}>          
            <NavContainer>
                <TextNav>Voltar</TextNav>
                <TextNav>Fechar</TextNav>
            </NavContainer>

            <ImageSteps src={require("../../common/images/Step for step 5.png")} />

            <BodyContainer width="375px" height="660px" gap="24px">
                <ImageSignature src={require("../../common/images/signature.png")} />
                <Button onClick={link}>
                    Finalizar
                </Button>
            </BodyContainer>
                
        </Container>
    )
}
