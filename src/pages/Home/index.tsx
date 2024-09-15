import { Container } from "../../common/styles/Divs";

import Header from "../../components/Header";
import Expenses from "../../components/Expenses";
import YourBooking from "../../components/YourBooking";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        if(localStorage.getItem('userName') === null) {
            window.location.href = '/SignIn'
        }
    }, [])

    return (
        <Container
            flex_direction="column"
            align_items="center"
            gap="24px"
        >
            <Header />
            <Expenses />
            <YourBooking />
            <h1>Serviços</h1>
            <h1>Footer</h1>
        </Container>
    )
}