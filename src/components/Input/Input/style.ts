import { Icon } from "../../../common/styles/Imgs";
import styled from "styled-components";

export const Container = styled.div`
    width: 327px;
    height: 48px;
    padding: 12px;
    gap: 10px;
    border-radius: 12px;
    background-color: #EFF0F3;

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    text-align: left;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SInput = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    color: #09090B;
    width: 100%;
    height: 100%;
`;

export const CursorIcon = styled(Icon)`
    cursor: pointer;
`;