import { Button } from "./style";

interface FormButtonProps {
    children: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function FormButton({ children, onClick, disabled}: FormButtonProps) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}