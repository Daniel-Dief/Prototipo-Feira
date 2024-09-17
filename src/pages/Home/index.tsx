import { Container } from "../../common/styles/Divs";

import Header from "../../components/Header";
import Expenses from "../../components/Expenses";
import YourBooking from "../../components/YourBooking";
import Footer from "../../components/Footer";

import { useEffect, useState } from "react";
import Services from "../../components/Services";

import FloatContainer from "../../components/FloatContainer/index";

export default function Home() {
    useEffect(() => {
        if(localStorage.getItem('userName') === null) {
            window.location.href = '/SignIn'
        }
    }, [])

    const [displayFloatContainer, setDisplayFloatContainer] = useState<boolean>(false);

    function togleFloatContainer() {
        setDisplayFloatContainer(!displayFloatContainer);
    }

    return (
        <Container
            flex_direction="column"
            align_items="center"
            gap="24px"
        >
            <Header kind="home" />
            <Expenses />
            <YourBooking togleFloatContainer={togleFloatContainer} />
            <Services />
            <Footer />
            <FloatContainer togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
        </Container>
    )
}