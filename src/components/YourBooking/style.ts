import styled from "styled-components";
import { Container } from "../../common/styles/Divs";

export const MasterContainer = styled(Container)`
    width: 100%;
`;

export const TextDiv = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const YourBookingContainer = styled.div`
    width: 85%;
    height: 300px;
    padding: 16px;
    gap: 12px;
    border-radius: 24px;
    background-color: #FFF;
    border: 2px solid #F5F9FF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 8px;
`;

export const CheckInOutDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
    padding: 8px;
`;

export const CheckDateTimeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const SlaDiv = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
`