import { BigIcon } from "../../common/styles/Imgs";

import { Container, Option, OptionSelected } from "./style";

export default function Footer() {
    const windowPath = window.location.pathname;

    return (
        <Container>
            {
                windowPath == "/Home" ? (
                    <OptionSelected>
                        <BigIcon src={require("../../common/images/house-selected.png")} />
                    </OptionSelected>
                ) : (
                    <Option>
                        <BigIcon src={require("../../common/images/house.png")} />
                    </Option>
                )
            }
            {
                windowPath == "/Calendar" ? (
                    <OptionSelected>
                        <BigIcon src={require("../../common/images/calendar-selected.png")} />
                    </OptionSelected>
                ) : (
                    <Option>
                        <BigIcon src={require("../../common/images/calendar.png")} />
                    </Option>
                )
            }
            {
                windowPath == "/Chat" ? (
                    <OptionSelected>
                        <BigIcon src={require("../../common/images/chat-selected.png")} />
                    </OptionSelected>
                ) : (
                    <Option>
                        <BigIcon src={require("../../common/images/chat.png")} />
                    </Option>
                )
            }
        </Container>
    );
}