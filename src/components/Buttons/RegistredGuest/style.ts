import styled from "styled-components";
 
export const DivGuest = styled.div`
    display: flex;

    width: 343px;
    height: 64px;
    border-radius: 12px;
    border: 2px solid #F9F7F3;
    padding: 12px;
    gap: 12px;
    align-items: center;
`;

export const TextsGuest = styled.div`
    width: 203px;
    height: 34px;
    display: flex;
    flex-direction: column;
`;
export const PersonIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 6px;
`;

interface SettingsIconProps{
    display: string;
}

export const SettingsIcon = styled.img<SettingsIconProps>`
    width: 20px;
    height: 20px;
    float: right;
    display: flex;
    z-index: ${(props) => props.display === "block" ? -1 : 1};
`;

export const NameGuest = styled.h2`
    width: 106px;
    height: 19px;
    font-family: Inter;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.36px;
    color: Neutral/900;
`;

export const DocumentGuest = styled.h3`
    width: 84px;
    height: 15px;
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.52px;
    color: #71717A;
`;
