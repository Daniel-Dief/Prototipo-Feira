import { Container } from '../../common/styles/Divs';

import styled from 'styled-components';

interface DishContainerProps {
    backgroundImage: string;
}

export const SContainer = styled(Container)<DishContainerProps>`
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    width: 165px;
    height: 130px;
    padding: 4px;

    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 12px;
`;

export const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 4px;
`;