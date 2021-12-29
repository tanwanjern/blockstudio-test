import * as React from "react"

const Footer = () => {
    return(
       <div className="bg-black pt-10 pb-16">
            <div className="container mx-auto">
                <div className="row">
                    <div className="w-10">

                    </div>
                    <div className="w-1/2">
                        <ul className="row mb-6">
                            <li className="flex-1"><a href="" className="text-white">About</a></li>
                            <li className="flex-1"><a href="" className="text-white">Website</a></li>
                            <li className="flex-1"><a href="" className="text-white">Branding</a></li>
                        </ul>
                        <div className="mb-5">
                            <p className="text-white text-sm mb-2">T. 0202885-8586</p>
                            <p className="text-white text-sm mb-2">E. info@blockstudio.tw</p>
                            <p className="text-white text-sm mb-2">3F. No.2, Ln 80, Sec. 4, Chengde Rd., Shilin Dist., Taipei City 111 Taiwan</p>
                        </div>
                    </div>
                    <div className="flex-1">

                    </div>
                </div>
            </div>
       </div>
    )
}

export default Footer