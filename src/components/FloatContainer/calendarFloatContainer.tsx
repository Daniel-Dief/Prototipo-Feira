import { Container, BodyContainer, NavContainer, TextNav } from "../../common/styles/FloatContainer";
import { Title, SmallText } from "../../common/styles/Text";
import { Form } from "../../common/styles/Form";
import Fild from "../Fild";
import ShortInfo from "../ShortInfo";
import { Button } from "../../common/styles/Button";
import { WhiteSpanText } from "../../common/styles/Text";

interface Props {
    kind: string;
    display: boolean;
    toggleDisplay: () => void;
    servicePath?: string;
    serviceName?: string;
    serviceHour?: string;
}

export default function CalendarFloatContainer({ kind, display, toggleDisplay, servicePath, serviceName,serviceHour  }: Props) {
    const listaDeHorarios = [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
        "06:00 PM",
        "07:00 PM",
        "08:00 PM",
        "09:00 PM"
    ];

    if (kind === "new") {
        return (
            <Container
                style={{
                    display: "flex",
                    padding: "20px",
                }}
            paddingBotton="90px" gap="15px" display={display}>
                <NavContainer>
                    <TextNav onClick={toggleDisplay}>Voltar</TextNav>
                </NavContainer>
                <BodyContainer
                    width="100%"
                    height="90%"
                    gap="12px"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            gap: "10px"
                        }}
                    >
                        <Title>
                            Novo serviço
                        </Title>
                        <SmallText color="#71717A">
                            Agende ou reserve serviços antecipadamente para os próximos dias.
                        </SmallText>
                    </div>
                    <Form>
                        <Fild 
                            labelText="Serviço"
                            type="text"
                            required={true}
                            placeholder="Digite o nome do serviço"
                        />
                        <Fild 
                            labelText="Data de agendamento"
                            type="date"
                            required={true}
                        />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            gap: "10px"
                        }}
                    >
                        <Title>
                            Horários disponíveis
                        </Title>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "start",
                                justifyContent: "start",
                                flexWrap: "wrap",
                                gap: "5px",
                                padding: "20px"
                            }}
                        >
                            {
                                listaDeHorarios.map((horario, index) => (
                                    <ShortInfo
                                        key={index}
                                        text={horario}
                                        color="#71717A"
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <Button
                        onClick={toggleDisplay}
                    >
                        Agendar
                    </Button>
                    </Form>
                </BodyContainer>
            </Container>
        )
    } else {
        return (
            <Container
                style={{
                    display: "flex",
                    padding: "20px",
                }}
            paddingBotton="90px" gap="15px" display={display}>
                <NavContainer>
                    <TextNav onClick={toggleDisplay}>Voltar</TextNav>
                </NavContainer>
                <BodyContainer
                    width="100%"
                    height="90%"
                    gap="12px"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            width: "100%",
                            gap: "10px"
                        }}
                    >
                        <Title>
                            Detalhes do serviço
                        </Title>
                        <ShortInfo 
                            icon={servicePath ?? ""}
                            text={serviceName ?? "Nome do serviço"}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            width: "100%",
                            gap: "10px"
                        }}
                    >
                        <WhiteSpanText color="#000">Data e horário</WhiteSpanText>
                        <ShortInfo 
                            icon={servicePath ?? ""}
                            text="Quarta-feira, 18 Junho 2024"
                        />
                        <ShortInfo 
                            icon={require("../../common/images/timer.png")}
                            text={serviceHour ?? "09:00 AM"}
                        />
                    </div>
                    <Button
                        onClick={toggleDisplay}
                    >
                        Cancelar Agendamento
                    </Button>
                </BodyContainer>
            </Container>
        )
    }
}