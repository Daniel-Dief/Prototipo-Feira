import styled, { ExecutionProps } from "styled-components";

export const DivStyle = styled.div `
    width: 327px;
    height: 48px;
    border-radius: 12px;
    padding: 7px;
    gap: 10px; 
    background-color: #EFF0F3;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InputStyle = styled.input `
    background-color: transparent;
    border: none;

    &:focus{
        border: none;
    }
`;

export const ShowPassStyle = styled.img `
    background-color: transparent;
    width: 20px;
    height: 20px;
`;
