import styled from "styled-components";

export const Select = styled.select`
    background-color: transparent;
    border: none;
    color: #FFF;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
        outline: none;
    }

    option {
        color: #000;
    }
`;

export const LanguagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;