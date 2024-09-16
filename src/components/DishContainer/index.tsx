import { WhiteSpanText } from "../../common/styles/Text";
import ShortInfoTime from "../ShortInfoTime";

import { SContainer, TopDiv } from "./style";

interface DishContainerProps {
    backgroundImage: string;
    value: string;
    time: string;
}

export default function DishContainer({ backgroundImage, value, time }: DishContainerProps) {
    return (
        <SContainer
            backgroundImage={backgroundImage}
        >
            <TopDiv>
                <WhiteSpanText>
                    Lorem ipsum
                </WhiteSpanText>
                <WhiteSpanText>
                    R${value}
                </WhiteSpanText>
            </TopDiv>
            <ShortInfoTime
                text={time}
            />
        </SContainer>
    )
}