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
                >
                    {
                        Array(3).fill(0).map((item, index)=>{
                            return(
                                <SwiperSlide>
                                    <div className="relative w-full h-full bg-gray-200">
                                        <img className="w-full h-full object-cover" src="/demo-1.jpeg" alt=""/>
                                        <div className="absolute z-20 top-0 bottom-0 left-0 right-0">
                                            <div className="h-full center">
                                                <h1 className="w-4/5 mx-auto text-3xl lg:text-5xl font-bold text-center leading-tight mb-3">Commercial builders with pride-workmanship that values quality</h1>
                                                <p className="w-3/4 mx-auto text-center">Acclaim Contractors are a highly specialised local business with over 20 years building and civil industry experience with many accolades, commendations and awards recognising the building</p>
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

    return(
       <>
            <div className="h-screen relative">
                <BannerSwiper/>
                <Copyright/>

                <div className="">
                    {/* Social Media */}
                </div>
                <div className="relative -mt-16 z-50 center">
                    <div className="home-custom-shape">
                        <h3 className="font-bold text-xl lg:text-6xl">HOME</h3>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Banner