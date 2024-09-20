import styled from "styled-components";
import RetangleImage from "../../common/images/rectangle10.png"

export const DivProduct = styled.div`
    width: 343px;
    height: 292px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
`;

export const NameProduct = styled.h1`
    width: 343px;
    height: 24px;
    font-family: Inter;
    font-weight: 700;
    font-size: 20px;
    line-height: 24.2px;
    color: #18181B;
`;

export const ValueProduct = styled.p`
   width: 343px;
   height: 17px;
   font-family: Inter;
   font-weight: 500;
   font-size: 14px;
   line-height: 16.94px;
   color: #71717A; 
`;

export const DescriptionProduct = styled.p`
    width: 343px;
    height: 119px;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    color: #71717A;
    text-align: justify;
`;

export const WeightProduct = styled.h2`
    width: 343px;
    height: 17px;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    color: #18181B;
`;

export const FooterProduct = styled.footer`
    width: 375px;
    height: 92px;
    border: 2px, 0px, 0px, 0px solid #F9F7F3;
    padding: 24px, 16px, 24px, 16px;
    gap: 12px;
    text-align: center;
    align-items: center;
`;

export const DivFooterProduct = styled.div`
    width: 343px;
    height: 44px;
    gap: 24px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: auto;
`;

export const DivAmountProduct = styled.div`
    width: 99px;
    height: 44px;
    border-radius: 12px;
    border: 2px solid #F9F7F3;
    padding: 10px;
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IconAmountProduct = styled.img`
    width: 24px;
    height: 24px;
`;

export const TextAmountProduct = styled.p`
    width: 7px;
    height: 17px;
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.94px;
    color: #000000;
`;

export const ButtonAdd = styled.div`
    width: 220px;
    height: 44px;
    border-radius: 12px;
    justify-content: space-between;
    padding: 8px, 16px, 8px, 16px;
    background-color: #C2AE8F;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 12px;
`;

interface TextButtonAddProps {
    width: string;
}

export const TextButtonAdd = styled.p<TextButtonAddProps>`
    width: ${(props) => props.width};
    height: 17px;
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.94px;
    color: #FFFFFF;
    margin-left: 15px;
    margin-right: 15px;
`;

interface ImageProductProps {
    url: () => string | null;
}

export const ImageProduct = styled.div<ImageProductProps>`
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 15px;
    border-radius: 12px;
    width: 100%;
    height: 200px;
`;

export const TimeProduct = styled.div`
    width: 71px;
    height: 24px;
    top: 164px;
    left: 12px;
    border-radius: 24px;
    padding: 4px, 8px, 4px, 8px;
    gap: 2px;
    background-color: #FFFFFF99;
`;

export const TimeIcon = styled.img`
    width: 16px;
    height: 16px;
`;

export const TimeText = styled.p`
    width: 37px;
    height: 15px;
    font-family: Inter;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.52px;
    color: #3F3F46;
`;

export const ArrowIcon = styled.img`
    float: left;
    width: 36px;
    height: 36px;
    top: 12px;
    left: 12px;
    border-radius: 24px;
    background-color: #00000099;
`;

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    z-index: -1;
`;
