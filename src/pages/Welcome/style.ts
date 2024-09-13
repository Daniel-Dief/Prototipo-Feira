import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    padding: 24px 16px;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.58) 0%,
        rgba(0, 0, 0, 0.58) 50%,
        rgba(0, 0, 0, 0.15) 100%
    ),
    url(${require("../../common/images/welcomePage.png")}) no-repeat center center;
    background-size: cover;

`

export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 48px;
`