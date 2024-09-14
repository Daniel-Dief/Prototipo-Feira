import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;

export const Input = styled.input`
    width: 48px;
    height: 48px;
    padding: 12px;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid #C2AE8F;

    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;