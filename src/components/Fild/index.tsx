import Input from "../Input/Input";
import { Label } from "../../common/styles/Text";
import { Container } from "../../common/styles/Divs";

import { TextRequired } from "./style";
import { RefObject } from "react";

interface FildProps {
    labelText: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    inputRef?: RefObject<HTMLInputElement>;
}

export default function Fild({ labelText, type, required, placeholder, inputRef } : FildProps) {
    return (
        <Container
            flex_direction="column"
            align_items="start"
            gap="8px"
        >
            <Label>
                {labelText}
                {required && <TextRequired>*</TextRequired>}
            </Label>
            <Input 
                type={type}
                required={required}
                placeholder={placeholder}
                inputRef={inputRef}
            />
        </Container>
    )
}