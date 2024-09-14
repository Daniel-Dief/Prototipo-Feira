import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-radius: 24px;
    border: none;
    background-color: #FFFFFF55;
    width: calc(100% / 3 * 2);

    text-decoration: none;
`

export const Text = styled.p`
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 17.6px;
    text-align: center;
    color: #FFF;
`