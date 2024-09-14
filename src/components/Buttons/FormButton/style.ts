import styled from "styled-components";

export const Button = styled.button`
    background-color: #C2AE8F;
    color: #FFF;
    
    width: 327px;
    height: 48px;
    padding: 12px;
    
    border: none;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 17.6px;
    text-align: center;

    cursor: pointer;

    &:disabled {
        background-color: #D4D4D8;
        color: #71717A;
        cursor: not-allowed;
    }
`;