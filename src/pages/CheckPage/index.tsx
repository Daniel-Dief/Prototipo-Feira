import ClimateContainer from "../../components/ClimateContainer"
import BookingResume from "../../components/BookingResume"
import Header from "../../components/Header"
import { Container } from "../../common/styles/Divs"
import ServicesContainer from "../../components/ServicesContainer"
import CardAgend from "../../components/CardAgend"
import Expenses from "../../components/Expenses"

export default function CheckPage() {
    return (
        <Container
            gap="24px"
        >
            <Header kind="home"/>
            <BookingResume />
            <ServicesContainer />
            <CardAgend />
            <ClimateContainer />
            <Expenses />
        </Container>
    )
}