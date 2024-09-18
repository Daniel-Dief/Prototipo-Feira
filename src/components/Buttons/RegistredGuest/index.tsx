import { DivGuest, PersonIcon, SettingsIcon, NameGuest, DocumentGuest, TextsGuest } from "./style";

interface GuestRegistredProps{
    name: string;
    document: string;
    display: string;
}

export default function GuestRegistred({ name, document, display } :GuestRegistredProps ){
    
    return (
        <DivGuest>
            <PersonIcon src={require("../../../common/images/PersonIcon.png")} />
            <TextsGuest>
                <NameGuest>
                    {name}
                </NameGuest>
                <DocumentGuest>
                    {document}
                </DocumentGuest>
            </TextsGuest>
            <SettingsIcon display={display} src={require("../../../common/images/crown.png")} />
            <SettingsIcon display="flex" src={require("../../../common/images/settings-hospedes.png")} />
        </DivGuest>
    )
}
