import React, { useState } from "react"

const Video = () => {

    const [showVideo, setShowVideo] = useState(false);

    return(
       <>
            <div className="container mx-auto">
                <div className="w-full aspect-video relative">
                    <img src="https://img.youtube.com/vi/DS89Vb07C-U/0.jpg" alt="" className="w-full h-full object-cover"/>
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
                <div className="video-modal">
                    <div className="w-full h-full center">
                        <div className="w-3/4 m-auto aspect-video relative">
                            <button className="text-white w-4 h-4 ml-auto absolute top-[-35px] right-0" onClick={()=> setShowVideo(false)}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="svg-inline--fa fa-times fa-w-11"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" className=""></path></svg>
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