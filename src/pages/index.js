import * as React from "react"
import Banner from "../components/banner"
import Header from "../components/header"
import Video from "../components/video"
import About from "../components/about"
import Award from "../components/award"
import Footer from "../components/Footer"

const IndexPage = () => {
    return(
        <main className="relative">
            <title>Home Page</title>

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
