import { Container, Input } from "./style"

interface CodeVerifyProps {
    setInputValue: (value: string) => void;
}

export default function CodeVerify({ setInputValue }: CodeVerifyProps) {
    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value, 10);
        if (value >= 0 && value <= 9) {
            event.target.value = value.toString();
        } else {
            event.target.value = value > 9 ? (value % 10).toString() : "";
        }
        
        if(event.target.value !== "") {
            const nextSibling = event.target.nextElementSibling as HTMLInputElement;
            if (nextSibling) {
                nextSibling.focus();
            }
        }

        setInputValue(event.target?.value);
    }

    return (
        <Container>
            <Input type="number" min="0" max="9" onInput={handleInput}/>
            <Input type="number" min="0" max="9" onInput={handleInput}/>
            <Input type="number" min="0" max="9" onInput={handleInput}/>
            <Input type="number" min="0" max="9" onInput={handleInput}/>
            <Input type="number" min="0" max="9" onInput={handleInput}/>
        </Container>
    )
}