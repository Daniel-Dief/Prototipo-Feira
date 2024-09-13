import styled, { ExecutionProps } from "styled-components";

interface inputProps{
    placeholder: string;
    type: string;
}

export const InputStyle = styled.input<inputProps> `
    width: 327px;
    height: 48px;
    border-radius: 12px;
    padding: 12px;
    gap: 10px; 
`;
