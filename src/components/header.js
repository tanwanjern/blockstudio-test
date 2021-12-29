import React, { useEffect, useState } from "react"

const Header = () => {
    
    
    return(
        <div className="absolute top-0 w-full z-50">
            <div className="row">
                <div className="flex-1">
                    <div className="center w-20">
                        <h1>B</h1>
                    </div>
                </div>
                <div className="flex-1 ml-auto">
                    <div className="row justify-end">
                        <ul className="row gap-2 py-5">
                            <li className="btn active"><a href="">Home</a></li>
                            <li className="btn"><a href="">Website</a></li>
                            <li className="btn"><a href="">Branding</a></li>
                        </ul>
                        <button className="bg-black text-white w-20 center ml-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header