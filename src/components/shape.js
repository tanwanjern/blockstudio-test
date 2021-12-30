import * as React from "react"
import { useEffect, useState } from "react"

const Shape = ({type}) => {

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
        window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // console.log(offset)

    switch (type) {
        case 'about':
          return (
              <>
                <div 
                    className="absolute bg-blue-600 shadow-blue-600/40 shadow-xl w-24 h-24 -top-72 lg:-top-64 -left-12 lg:left-8 2xl:left-16 rounded-full z-10"
                    style={{
                        transform: `translateY(${offset * 0.6}px)`,
                    }}>
                </div>
                <div 
                    className="absolute bg-blue-600 shadow-blue-600/40 shadow-xl w-12 h-12 top-[1300px] lg:bottom-16 right-8 2xl:right-16 rounded-full z-10"
                    style={{
                        transform: `translateY(-${offset * 0.4}px)`,
                    }}>
                </div>
            </>
          )
        case 'award':
          return (
              <div className="hidden lg:block">
                <div 
                    className="absolute bg-blue-600 shadow-blue-600/40 shadow w-8 h-36 top-[-1000px] left-6 2xl:left-16 rounded-full z-10"
                    style={{
                        transform: `translate(${offset * 0.01}px, ${offset * 0.65}px)`,
                    }}>
                </div>
                <div 
                    className="absolute bg-blue-600 shadow-blue-600/40 shadow w-8 h-36 -top-56 left-24 2xl:left-36 rounded-full z-10"
                    style={{
                        transform: `translate(${offset * 0.25}px, ${offset * 0.25}px) rotate(${offset * 0.2}deg)`,
                    }}>
                </div>
                <div 
                    className="absolute bg-blue-600 shadow-blue-600/40 shadow-xl w-24 h-24 -top-96 right-[500px] 2xl:right-[800px] rounded-full z-10"
                    style={{
                        transform: `translate(${offset * 0.08}px, ${offset * 0.5}px)`,
                    }}>
                </div>
            </div>
          )
        default:
            return null;
    }
}

export default Shape