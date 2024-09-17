import styled from "styled-components";

interface DivTextPreCheckinProps{
    width: string;
    height: string;
}

export const DivTextPreCheckin = styled.div<DivTextPreCheckinProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 0px, 0px, 100px, 0px;
    gap: 4px;
`;

export const ImagePreCheckin = styled.img`
    width: 336.77px;
    height: 186.65px;
`;

export const ImageSteps = styled.img`
    width: 343px;
    height: 14px;
    padding: 4px, 0px, 4px, 0px;
    gap: 12px;
`;

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 343px;
    height: 404px;
    gap: 24px;
`;
