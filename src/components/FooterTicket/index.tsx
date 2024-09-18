import { DivFooterTickets, DivInformations, DivTextFooter, Title, Value, ButtonAdd, TextButtonAdd } from "./style"; 

interface FooterTicketProps { 
    display: string;
    openTicket: () => void;
    value: string;
    text: string
}

export default function FooterTicket ({ display, openTicket, value, text } : FooterTicketProps) {
    return(
        <DivFooterTickets display={display}>
            <DivInformations>
                <DivTextFooter>
                    <Title>Valor total</Title>
                    <Value>{value}</Value>
                </DivTextFooter>
                <ButtonAdd onClick={openTicket}>
                    <TextButtonAdd>
                        {text}
                    </TextButtonAdd>
                </ButtonAdd>
            </DivInformations>
        </DivFooterTickets>
    )   
}
