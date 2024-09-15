import styled from "styled-components";

export const Container = styled.div`
    height: 48px;
    gap: 12px;
    padding: 4px;
    border-radius: 16px;
    background-color: #EEE;
    margin-bottom: 24px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    filter: drop-shadow(10px 10px 10px #949494);
`;

export const Option = styled.div`
    width: 56px;
    height: 40px;
    padding: 8px 16px 8px 16px;
    gap: 4px;
    border-radius: 12px;
    background-color: #EEE;
`

export const OptionSelected = styled.div`
    width: 56px;
    height: 40px;
    padding: 8px 16px 8px 16px;
    gap: 4px;
    border-radius: 12px;
    background-color: #FFF;
`