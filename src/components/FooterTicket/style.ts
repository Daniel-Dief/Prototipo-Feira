import styled from "styled-components";

interface FooterTicketProps{
    display: string;
}

export const DivFooterTickets = styled.div<FooterTicketProps>`
    width: 375px;
    height: 88px;
    padding: 24px, 16px, 24px, 16px;
    gap: 12px;
    background-color: #FFFFFF;
    display: ${(props) => props.display};
    text-align: center;
    align-items: center;
    position: fixed;
    bottom: 0;
`;

export const DivInformations = styled.div`
    width: 343px;
    height: 40px;
    gap: 12px;
    display: flex;
    justify-content: space-between;
    margin: auto;

`

export const DivTextFooter = styled.div`
    width: 159px;
    height: 40px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    text-align: left;

`;

export const Title = styled.p`
    width: 69px;
    height: 17px;
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    line-height: 16.94px;
    color: #71717A;

`;

export const Value = styled.p`
    width: 140px;
    height: 19px;
    font-family: Inter;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.36px;
`;

export const ButtonAdd = styled.div`
    width: 120px;
    height: 40px;
    border-radius: 12px;
    padding: 8px, 16px, 8px, 16px;
    background-color: #C2AE8F;
    text-align: center;
    align-items: center;
    display: flex;
`;

export const TextButtonAdd = styled.p`
    width: 71px;
    height: 17px;
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.94px;
    color: #FFFFFF;
    margin: auto;
`