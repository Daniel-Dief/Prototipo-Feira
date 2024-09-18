import { Container } from "../../common/styles/Divs";

import Header from "../../components/Header";
import Expenses from "../../components/Expenses";
import YourBooking from "../../components/YourBooking";
import Footer from "../../components/Footer/index";

import { useEffect, useState } from "react";
import Services from "../../components/Services";

import FloatContainer from "../../components/FloatContainer/index";
import FirstStepContainer from "../../components/FloatContainer/firstStep";
import SecondStepContainer from "../../components/FloatContainer/secondStep";
import ThirdStepContainer from "../../components/FloatContainer/thirdStep";
import Third05StepContainer from "../../components/FloatContainer/third,5Steps";
import FourStepContainer from "../../components/FloatContainer/fourStep";
import FiveStepContainer from "../../components/FloatContainer/fiveStep";
import Component from "../Calendar/component";
import PreCheckin from "../PrecheckinFinish";

import PreCheckOut from "../.././components/PreCheckout/index";
import PreCheckOut2 from "../.././components/PreCheckout/paymentValues";
import PreCheckOut3 from "../.././components/PreCheckout/paymentFinish";
import PreCheckOut4 from "../.././components/PreCheckout/finishCheckout";

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

    const localcheckin = localStorage.getItem("checkin") === "true" ? true : false;

    const [modalPage, setModalPage] = useState<number>(localcheckin ? 1000 : 1)

    function buttonNext() {
        if (modalPage < 8 || modalPage >= 1000) {
            setModalPage(modalPage + 1)
        }
    }

    function buttonBack() {
        if (modalPage > 1) {
            setModalPage(modalPage - 1)
        }   
    }

    function buttonNext05() {
        setModalPage(modalPage + 0.5)
    }

    function buttonBack05() {
        setModalPage(modalPage - 0.5)
    }

    let modalContainer;
    if (modalPage == 1) {
        modalContainer = <FloatContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 2) {
        modalContainer = <FirstStepContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 3) {
        modalContainer = <SecondStepContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 4) {
        modalContainer = <ThirdStepContainer buttonNext05={buttonNext05} buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 4.5) {
        modalContainer = <Third05StepContainer buttonNext05={buttonNext05} buttonBack05={buttonBack05} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 5) {
        modalContainer = <FourStepContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 6) {
        modalContainer = <FiveStepContainer buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if(modalPage == 7) {
        modalContainer = <Component link={buttonNext} />; 
    } else if(modalPage == 8) {
        modalContainer = <PreCheckin />
    } else if (modalPage == 1000) {
        modalContainer = <PreCheckOut buttonBack={togleFloatContainer} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 1001) {
        modalContainer = <PreCheckOut2 buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 1002) {
        modalContainer = <PreCheckOut3 buttonBack={buttonBack} buttonNext={buttonNext} togleFloatContainer={togleFloatContainer} display={displayFloatContainer}/>
    } else if (modalPage == 1003) {
        modalContainer = <PreCheckOut4 />
    }


    return (
        <Container
            flex_direction="column"
            align_items="center"
            gap="24px"
        >
            <Header kind="home" />
            <Expenses />
            <YourBooking togleFloatContainer={togleFloatContainer}  />
            <Services />
            <Footer />
            {modalContainer}
        </Container>
    )

}