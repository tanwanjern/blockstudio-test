import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination"

SwiperCore.use([Pagination]);

const Banner = () => {

    const BannerSwiper = () => {
        return (
            <>
                <Swiper
                    className="swiper-banner w-full h-full"
                    modules={[Pagination]} 
                    pagination={true}
                    // autoplay={true}
                >
                    {
                        Array(3).fill(0).map((item, index)=>{
                            return(
                                <SwiperSlide key={"swiper_"+index}>
                                    <div className="relative w-full h-full bg-gray-100">
                                        {index == 0 ? 
                                            <div className="bg-fixed bg-no-repeat bg-cover w-full h-full" style={{backgroundImage: `url('/demo-1.jpeg')`}}></div>
                                            :
                                            <img className="w-full h-full object-cover" src="/demo-1.jpeg" alt=""/>
                                        }
                                        
                                        <div className="absolute z-20 top-0 bottom-0 left-0 right-0">
                                            <div className="h-full center">
                                                <h1 className="w-4/5 xl:w-3/5 mx-auto text-3xl lg:text-5xl font-bold text-center leading-tight mb-3">Commercial builders with pride-workmanship that values quality</h1>
                                                <p className="w-3/4 xl:w-2/4 mx-auto text-center leading-relaxed">Acclaim Contractors are a highly specialised local business with over 20 years building and civil industry experience with many accolades, commendations and awards recognising the building</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </>
        )
    }

    const Copyright = () => {
        return(
            <div className="absolute top-0 bottom-0 h-full z-10 w-10 hidden lg:block">
                <div className="relative block w-full h-full m-12">
                    <div className="absolute top-0 left-0 bottom-0 rotate-90 origin-[-35%_15%] whitespace-nowrap">
                        Block Studio ©Copyright. All Rights Reserved
                    </div>
                </div>
            </div>
        )
    }

    const SocialMedia = () => {
        return(
            <div className="absolute bottom-0 left-0 z-40 lg:w-56 hidden lg:flex p-10">
                <ul className="flex flex-row flex-wrap items-center mt-10 justify-between w-full">
                    <li>
                        <a href="">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-facebook-f fa-w-10 w-4 h-4"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-instagram fa-w-14 w-5 h-5"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-youtube fa-w-18 w-5 h-5"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    return(
       <>
            <div className="h-screen relative z-20">
                <BannerSwiper/>
                <Copyright/>
                <SocialMedia/>   

                <div className="home-custom-shape">
                    <div className="inner">
                        <h3 className="font-bold text-2xl lg:text-6xl">HOME</h3>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Banner