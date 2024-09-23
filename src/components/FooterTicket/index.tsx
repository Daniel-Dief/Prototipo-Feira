import { DivFooterTickets, DivInformations, DivTextFooter, Title, Value, ButtonAdd, TextButtonAdd } from "./style"; 
import { VerifyProducts, ResetProducts, UpdateProducts } from "../../pages/Restaurant/functionsShop";

interface FooterTicketProps { 
    display: string;
    openTicket: () => void;
    text: string
}

export default function FooterTicket ({ display, openTicket, text } : FooterTicketProps) {
    const jsonProducts = VerifyProducts()

    let value : number = 0;
    let amount : number = 0;

    jsonProducts.forEach(product => {
        value += product.value * product.amount;
        amount += product.amount;
    });
    
    return(
        <DivFooterTickets display={display}>
            <DivInformations>
                <DivTextFooter>
                    <Title>Valor total</Title>
                    <Value>{`R$${value},00 / ${amount} itens`}</Value>
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
