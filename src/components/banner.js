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
                                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
                                        <div className="absolute z-20 top-0 bottom-0 left-0 right-0">
                                            <div className="h-full center">
                                                <h1 className="w-4/5 mx-auto text-5xl font-bold text-center leading-tight mb-3">Commercial builders with pride-workmanship that values quality</h1>
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
            <div className="absolute top-0 bottom-0 h-full z-10 w-10">
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
                    <div className="bg-white px-52 py-10 border border-black inline-block relative after:right-[-20px] after:bottom-[-10px] after:content-[''] after:w-20 after:h-20 after:absolute after:bg-white after:border-l after:border-black after:rotate-45">
                        <h3 className="font-bold text-6xl">HOME</h3>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Banner