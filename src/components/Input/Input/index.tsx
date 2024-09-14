import { Container, SInput } from "./style";

interface InputProps {
    type: string;
    requiered?: boolean;
    placeholder?: string;
}

export default function Input({ type, requiered, placeholder } : InputProps) {
    return (
        <Container>
            <SInput type={type} required={requiered} placeholder={placeholder} />
        </Container>
    )
}