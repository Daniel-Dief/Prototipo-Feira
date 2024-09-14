import { Container } from '../../common/styles/Divs';
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
        <Container
            justify_content="space-between"
            flex_direction="row"
            gap="16px"
        >
            <Container
                justify_content="space-between"
                flex_direction="row"
                gap="8px"
            >
                <Checkbox type="checkbox" checked={checked} onChange={onChange} />
                <Label>{labelText}</Label>
            </Container>
            <SpanText>
                {spanText}
            </SpanText>
        </Container>
    )
}