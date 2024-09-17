import { Container } from "../../common/styles/Divs";

import Header from "../../components/Header";
import Expenses from "../../components/Expenses";
import YourBooking from "../../components/YourBooking";
import Footer from "../../components/Footer";

import { useEffect, useState } from "react";
import Services from "../../components/Services";

import FloatContainer from "../../components/FloatContainer/index";
import FirstStepContainer from "../../components/FloatContainer/firstStep";
import SecondStepContainer from "../../components/FloatContainer/secondStep";
import ThirdStepContainer from "../../components/FloatContainer/thirdStep";

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

    const [modalPage, setModalPage] = useState<number>(1)

    function buttonNext() {
        if (modalPage < 4) {
            setModalPage(modalPage + 1)
        } else {
            alert("Anta")
        }  
    }

    function buttonBack() {
        if (modalPage > 1) {
            setModalPage(modalPage - 1)
        } else {
            alert("Animal")
        }  
    }

    let modalContainer;
    if (modalPage == 1) {
        modalContainer = <FloatContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 2) {
        modalContainer = <FirstStepContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 3) {
        modalContainer = <SecondStepContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 4) {
        modalContainer = <ThirdStepContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
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
            {modalContainer}
        </Container>
    )

}