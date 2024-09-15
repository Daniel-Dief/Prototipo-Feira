import { Title, SmallText } from "../../common/styles/Text";
import { BigIcon, Icon } from "../../common/styles/Imgs";
import { Divider } from "../../common/styles/Divs";

import { Container, ExpensesDiv, ValueDiv, StatementDiv } from "./style";

export default function Expenses() {
    return (
        <Container>
            <ExpensesDiv>
                <Title>
                    Resumo de gastos
                </Title>
                <ValueDiv>
                    <Title>R$ 0,00</Title>
                    <BigIcon src={require("../../common/images/eye.png")} alt="Visibilidade" />
                </ValueDiv>
            </ExpensesDiv>
            <Divider />
            <StatementDiv>
                <SmallText>Consultar extrato</SmallText>
                <Icon src={require("../../common/images/rightArrow.png")} />
            </StatementDiv>
        </Container>
    )
}