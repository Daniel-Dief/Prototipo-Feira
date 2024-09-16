import { Icon } from "../../common/styles/Imgs";
import { WhiteSpanText } from "../../common/styles/Text";
import { SContainer } from "./style";

interface ShortInfoTimeProps {
    text: string;
}

export default function ShortInfoTime({ text }: ShortInfoTimeProps) {
    return (
        <SContainer>
            <Icon src={require("../../common/images/timer.png")}/>
            <WhiteSpanText color="#3F3F46">{text}</WhiteSpanText>
        </SContainer>
    )
}