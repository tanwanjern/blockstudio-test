import React, { useState } from "react"

const Video = () => {

    const [showVideo, setShowVideo] = useState(false);

    return(
       <>
            <div className="container mx-auto px-6 mt-16 lg:mt-0" data-aos="zoom-in" data-aos-duration="450" data-aos-offset="100">
                <div className="w-full aspect-video relative">
                    {/* <div className="bg-fixed bg-no-repeat bg-cover w-full aspect-video" style={{backgroundImage: `url('https://img.youtube.com/vi/FonjL7DQAUQ/0.jpg')`}}></div> */}
                    <img src="https://img.youtube.com/vi/DS89Vb07C-U/0.jpg" alt="" className="w-full h-full object-cover bg-fixed"/>
                    <div className="absolute top-0 left-0 bottom-0 right-0 z-30 center">
                        <button className="bg-white rounded-full w-24 h-24 center" onClick={()=> setShowVideo(true)}>
                            <div className="w-10 h-10 ml-2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-play fa-w-14"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" className=""></path></svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            
            {showVideo && 
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 w-full h-full">
                    <div className="w-full h-full center">
                        <div className="w-3/4 m-auto aspect-video relative">
                            <button className="text-white w-4 h-4 ml-auto absolute top-[-35px] right-0" onClick={()=> setShowVideo(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1={18} y1={6} x2={6} y2={18}></line>
                                    <line x1={6} y1={6} x2={18} y2={18}></line>
                                </svg>
                            </button>
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/DS89Vb07C-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            }
       </>
    )
}

export default Video