import React, { useEffect } from "react"
import Banner from "../components/banner"
import Header from "../components/header"
import Video from "../components/video"
import About from "../components/about"
import Award from "../components/award"
import Footer from "../components/footer"

import AOS from 'aos';
import 'aos/dist/aos.css';

const IndexPage = () => {

    useEffect(()=>{
        AOS.init();
    }, [])

    return(
        <main className="relative overflow-hidden">
            <title>Block Studio Frontend Test - Lester Tan</title>

            <Header/>

            <Banner/>

            <About/>

            <Video/>

            <Award/>

            <Footer/>

        </main>
    )
}

export default IndexPage
