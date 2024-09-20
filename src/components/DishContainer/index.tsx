import { WhiteSpanText } from "../../common/styles/Text";
import ShortInfoTime from "../ShortInfoTime";

import { SContainer, TopDiv } from "./style";

interface DishContainerProps {
    backgroundImage: string;
    value: number;
    time: string;
    link: () => string | undefined;
}

export default function DishContainer({ backgroundImage, value, time, link }: DishContainerProps) {
    return (
        <SContainer
            backgroundImage={backgroundImage}
            onClick={link}
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