import { DivFooterTickets, DivInformations, DivTextFooter, Title, Value, ButtonAdd, TextButtonAdd } from "./style"; 

interface FooterTicket{
    display: string;
}

export default function FooterTicket ({ display } : FooterTicket) {
    return(
        <DivFooterTickets display={display}>
            <DivInformations>
                <DivTextFooter>
                    <Title>Valor total</Title>
                    <Value>R$ 32,00 / 1 item</Value>
                </DivTextFooter>
                <ButtonAdd>
                    <TextButtonAdd>
                        Ver sacola
                    </TextButtonAdd>
                </ButtonAdd>
            </DivInformations>
        </DivFooterTickets>
    )   
}
