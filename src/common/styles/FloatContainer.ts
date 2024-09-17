import styled from "styled-components";

interface FloatContainer{
    display: boolean;
}

export const Container = styled.div<FloatContainer>`
    background-color: #FFFFFF;
    border-radius: 24px 24px 0px 0px;
    height: ${(props) => props.display ? "85%" : "0"};
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 1;
    position: fixed;
    bottom: 0;
    width: 100%;
    border: 2px solid #4E4639;

    transition: .5s height ease-in-out;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 375px;
    height: 562px;
    padding: 24px, 16px, 24px, 16px;
    gap: 48px;
    text-align: center;
    align-items: center;
`;

export const NavContainer = styled.div`
    border-radius: 12px 12px 0px 0px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    width: 375px;
    height: 40px;
    justify-content: space-between;
    padding: 16px, 16px, 0px, 16px;
`;

export const TextNav = styled.a`
    font-family: Inter, sans-serif;
    width: 53px;
    height: 19px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.36px;
    color: #A1A1AA;
    margin: 0px 7px 0px 7px;
`;
