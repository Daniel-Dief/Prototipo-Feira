import { BigIcon } from "../../common/styles/Imgs";

import { Container, Option, OptionSelected } from "./style";

export default function Footer() {
    const windowPath = window.location.pathname;

    function handleClick(path : string) {
        window.location.href = path
    }
    
    return (
        <Container>
            {
                windowPath === "/Home" ||  windowPath === "/home" ? (
                    <OptionSelected>
                        <BigIcon src={require("../../common/images/house-selected.png")} />
                    </OptionSelected>
                ) : (
                    <Option
                        onClick={() => handleClick("Home")}
                    >
                        <BigIcon src={require("../../common/images/house.png")} />
                    </Option>
                )
            }
            {
                windowPath === "/Calendar" ||  windowPath === "/calendar" ? (
                    <OptionSelected>
                        <BigIcon src={require("../../common/images/calendar-selected.png")} />
                    </OptionSelected>
                ) : (
                    <Option
                        onClick={() => handleClick("Calendar")}
                    >
                        <BigIcon src={require("../../common/images/calendar.png")} />
                    </Option>
                )
            }
            {
                windowPath === "/Chat" ||  windowPath === "/chat" ? (
                    <OptionSelected>
                        <BigIcon src={require("../../common/images/chat-selected.png")} />
                    </OptionSelected>
                ) : (
                    <Option
                        onClick={() => handleClick("Home")}
                    >
                        <BigIcon src={require("../../common/images/chat.png")} />
                    </Option>
                )
            }
        </Container>
    );
}