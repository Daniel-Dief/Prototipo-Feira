import { RefObject } from "react";
import { Container, SInput } from "./style";

interface InputProps {
    type: string;
    required?: boolean;
    placeholder?: string;
    inputRef?: RefObject<HTMLInputElement>;
}

export default function Input({ type, required, placeholder, inputRef } : InputProps) {
    return (
        <Container>
            <SInput ref={inputRef} type={type} required={required} placeholder={placeholder} />
        </Container>
    )
}