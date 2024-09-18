import { DivRegisterGuest, TextRegisterGuest, ImageRegisterGuest } from "./style";

interface GuestRegisterProps{
    buttonNext05: () => void;
}
 
export default function GuestRegister({ buttonNext05 }: GuestRegisterProps){
    
    return (
        <DivRegisterGuest onClick={buttonNext05}>
            <ImageRegisterGuest src={require("../../../common/images/register-guest.png")} />
            <TextRegisterGuest>
                Cadastrar Hóspede
            </TextRegisterGuest>
        </DivRegisterGuest>
    )
}
