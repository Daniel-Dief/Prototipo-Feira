import { SmallIcon } from "../../common/styles/Imgs";
import { LanguagesContainer, Select } from "./style";

export default function Languages() {
    return (
        <LanguagesContainer>
            <SmallIcon src={require("../../common/images/translate.png")} alt="Translate" />
            <Select name="language" id="language">
                <option value="pt-br">Português</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="ja">日本語</option>
                <option value="zh">中文</option>
            </Select>
            <SmallIcon src={require("../../common/images/downArrow.png")} alt="DropDown"/>
        </LanguagesContainer>
    );
}