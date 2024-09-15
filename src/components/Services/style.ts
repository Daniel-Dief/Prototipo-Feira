import { Container } from "../../common/styles/Divs";

import styled from "styled-components";

export const MasterContainer = styled(Container)`
    width: 85%;
    height: 144px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 12px;
`;

export const ServicesDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
`;

export const ServiceDiv = styled.div`
    width: 150px;
    height: 48px;
    padding: 12px;
    gap: 12px;
    background-color: #FFF;
    border-radius: 12px;
    border: 2px solid #F5F9FF;

    display: flex;
    align-items: center;
    justify-content: start;
`;