import Input from "../Input/Input";
import { Label } from "../../common/styles/Text";

import { Container, TextRequired } from "./style";

interface FildProps {
    labelText: string;
    type: string;
    requiered?: boolean;
    placeholder?: string;
}

export default function Fild({ labelText, type, requiered, placeholder } : FildProps) {
    return (
        <Container>
            <Label>
                {labelText}
                {requiered && <TextRequired>*</TextRequired>}
            </Label>
            <Input 
                type={type}
                requiered={requiered}
                placeholder={placeholder}
            />
        </Container>
    )
}