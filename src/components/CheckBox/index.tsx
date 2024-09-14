import { Container } from "./style";
import { Label, SpanText } from "../../common/styles/Text";
import { Checkbox } from "../../common/styles/Checkbox";

interface CheckBoxProps {
    labelText: string;
    checked?: boolean;
    spanText?: string;
    onChange?: () => void;
}

export default function CheckBox({ labelText, checked, onChange, spanText } : CheckBoxProps ) {
    return (
        <Container>
            <div>
                <Checkbox type="checkbox" checked={checked} onChange={onChange} />
                <Label>{labelText}</Label>
            </div>
            <SpanText>
                {spanText}
            </SpanText>
        </Container>
    )
}