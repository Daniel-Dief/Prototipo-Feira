import { RefObject, useRef, useState } from "react";
import { Container, SInput, CursorIcon } from "./style";

interface InputProps {
    type: string;
    required?: boolean;
    placeholder?: string;
    inputRef?: RefObject<HTMLInputElement>;
}

export default function Input({ type, required, placeholder, inputRef } : InputProps) {
    const [visibility, setVisibility] = useState<boolean>(false);

    const passwordRef = useRef<HTMLInputElement>(null);

    function handleVisibility() {
        if(inputRef){
            if(visibility) {
                inputRef.current?.setAttribute("type", "password");
                setVisibility(false);
            } else {
                inputRef.current?.setAttribute("type", "text");
                setVisibility(true);
            }
        } else {
            if(visibility) {
                passwordRef.current?.setAttribute("type", "password");
                setVisibility(false);
            } else {
                passwordRef.current?.setAttribute("type", "text");
                setVisibility(true);
            }
        }
    }

    if(type !== "password"){
        return (
            <Container>
                <SInput ref={inputRef} type={type} required={required} placeholder={placeholder} />
            </Container>
        )
    } else {
        return (
            <Container>
                <SInput ref={inputRef ?? passwordRef} type={type} required={required} placeholder={placeholder} />
                <CursorIcon src={require(visibility ? "../../../common/images/eye.png" : "../../../common/images/eye-off.png")} onClick={handleVisibility}/>
            </Container>
        )
    }
}