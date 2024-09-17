import { DivRegisterGuest, TextRegisterGuest, ImageRegisterGuest } from "./style";

export default function GuestRegister({ }){
    
    return (
        <DivRegisterGuest>
            <ImageRegisterGuest src={require("../../../common/images/register-guest.png")} />
            <TextRegisterGuest>
                Cadastrar Hóspede
            </TextRegisterGuest>
        </DivRegisterGuest>
    )
}
