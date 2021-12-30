import React, { useEffect, useState, useRef } from "react"

const Header = () => {
    
    const [showMenu, setShowMenu] = useState(false);

    return(
        <>
            <div className="absolute top-0 w-full z-50">
                <div className="row">
                    <div className="flex-1">
                        <div className="center w-20 h-20" data-aos="flip-left" data-aos-duration="450" data-aos-delay="300">
                            <h1 className="text-4xl font-semibold border-t-4 border-black pt-1">B</h1>
                        </div>
                    </div>
                    <div className="flex-1 ml-auto">
                        <div className="row justify-end">
                            <ul className="nav flex-row gap-2 py-5 hidden lg:flex">
                                <li data-aos="fade-right" data-aos-duration="450" data-aos-delay="300"><a href="" className="active">Home</a></li>
                                <li data-aos="fade-right" data-aos-duration="450" data-aos-delay="400"><a href="">Website</a></li>
                                <li data-aos="fade-right" data-aos-duration="450" data-aos-delay="500"><a href="">Branding</a></li>
                            </ul>
                            <button className="bg-black text-white w-20 h-20 center ml-5" onClick={()=>setShowMenu(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1={4} y1={6} x2={20} y2={6}></line>
                                    <line x1={4} y1={12} x2={20} y2={12}></line>
                                    <line x1={4} y1={18} x2={20} y2={18}></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`right-menu ${showMenu ? 'show':'hide'}`}>
                <div className="flex flex-col justify-between h-full">
                    <div className="px-8 py-5 flex justify-end">
                        <button className="text-white" onClick={() => setShowMenu(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1={18} y1={6} x2={6} y2={18}></line>
                                <line x1={6} y1={6} x2={18} y2={18}></line>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <ul className="p-8 flex flex-col h-full justify-end">
                            <li className="text-white text-2xl mb-6"><a href="">Home</a></li>
                            <li className="text-white text-2xl mb-6"><a href="">Website</a></li>
                            <li className="text-white text-2xl mb-6"><a href="">Branding</a></li>
                        </ul>
                    </div>
                    <div className="justify-end bg-black">
                        <div className="p-8">
                            <p className="text-white text-sm mb-2">T. 0202885-8586</p>
                            <p className="text-white text-sm mb-2">E. info@blockstudio.tw</p>
                            <p className="text-white text-sm mb-2">3F. No.2, Ln 80, Sec. 4, Chengde Rd., Shilin Dist., Taipei City 111 Taiwan</p>
                            <ul className="flex flex-row flex-wrap items-center mt-10">
                                <li className="text-white mr-5">
                                    <a href="">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-facebook-f fa-w-10 w-4 h-4"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                    </a>
                                </li>
                                <li className="text-white mr-5">
                                    <a href="">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-instagram fa-w-14 w-5 h-5"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                    </a>
                                </li>
                                <li className="text-white mr-5">
                                    <a href="">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-youtube fa-w-18 w-5 h-5"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header