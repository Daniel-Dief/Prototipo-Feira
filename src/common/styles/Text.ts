import { Link } from "react-router-dom";

import styled from "styled-components";

export const Welcome = styled.h1`
    font-family: Inter, sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
    text-align: center;
    color: #FFF;
`;

interface TextProps {
    color?: string;
}

export const SmallText = styled.p<TextProps>`
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    color: ${(props) => props.color || "#71717A"};
`;

export const Label = styled.label`
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 15.4px;
    text-align: center;
    color: #000;
`;

export const Title = styled.h1`
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.2px;
    text-align: left;
    color: #18181B;
`;

export const SpanText = styled.span`
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    text-align: left;
    color: #C2AE8F;
`;

export const SLink = styled(Link)`
    font-family: Inter;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #C2AE8F;
`;

export const WhiteSpanText = styled.span`
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
    text-align: left;
    color: #FFF;
`;

export const WhiteSmallText = styled.p`
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    text-align: left;
    color: #F4F4F5;
`;