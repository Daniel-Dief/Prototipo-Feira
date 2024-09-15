import styled from "styled-components";

export const Container = styled.div`
    width: 343px;
    height: 138px;
    padding: 16px;
    gap: 12px;
    border-radius: 24px;
    border: 2px solid #F5F9FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
`

export const ExpensesDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 8px;
`;

export const ValueDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 8px;
`;

export const StatementDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;