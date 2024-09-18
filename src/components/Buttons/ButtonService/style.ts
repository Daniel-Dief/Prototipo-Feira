import styled from "styled-components";
 
interface DivServices {
    width: string;
    height: string;
}

export const DivServices = styled.div<DivServices>`
    background-color: #FBFDFF;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 12px;
    border: 2px solid #F9F7F3;
    padding: 12px;
    gap: 12px;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const ImageServices = styled.img`
    width: 24px;
    height: 24px;
`;

export const TextServices = styled.h1`
    width: 105.5px;
    height: 17px;
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.94px;
    color: #18181B;
`;
