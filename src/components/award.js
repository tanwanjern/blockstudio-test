import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const Award = () => {

    const awardQuery = useStaticQuery(graphql`
        query Awards {
            allAwardJson {
                edges {
                    node {
                        id
                        description
                        client
                        image
                        location
                        title
                        status
                        type
                    }
                }
            }    
        }  
    `) 

    const awardData = awardQuery.allAwardJson.edges;

    const [list, setList] = useState([...awardData.slice(0, 6)])
    const [loadMore, setLoadMore] = useState(false)
    const [hasMore, setHasMore] = useState(awardData.length > 6)

    const handleLoadMore = () => {
        setLoadMore(true)
    }

    useEffect(() => {
        if (loadMore && hasMore) {
          const currentLength = list.length
          const isMore = currentLength < awardData.length
          const nextResults = isMore
            ? awardData.slice(currentLength, currentLength + 6)
            : []
          setList([...list, ...nextResults])
          setLoadMore(false)
        }
    }, [loadMore, hasMore]) 

    useEffect(() => {
        const isMore = list.length < awardData.length
        setHasMore(isMore)
    }, [list])

    const isFirstColumn = [0,2,6,9,12,15,18,21]
    const isSecondColumn = [1,4,7,10,13,16,19,22]
    const isThirdColumn = [2,5,8,11,14,17,20,23]

    return(
        <div className="container mx-auto px-6 pt-10 pb-36">
            <div className="row -mx-3">
                {list.map((item, index) => (
                    <div 
                        key={item.node.id} 
                        className={`lg:w-1/3 px-3 mb-6 ${isSecondColumn.includes(index) ? 'translate-y-8' : ''}  ${isThirdColumn.includes(index) ? 'translate-y-16' : ''}`}>
                            <div 
                                className="border border-gray-600 relative cursor-pointer"
                                data-aos="fade-up"
                                data-aos-offset="-300"
                                data-aos-delay={isFirstColumn.includes(index)?50:(isSecondColumn.includes(index)?100:(isThirdColumn.includes(index)?150:0))}
                                data-aos-duration="450"
                                data-aos-easing="ease-in-out"
                                data-aos-anchor-placement="top-center"
                            >
                                {
                                    item.node.type === 1 ? (
                                        <div className="p-8">
                                            <h3 className="font-semibold text-4xl mb-36 leading-tight">{item.node.title}</h3>
                                            <div className="h-1 w-8 mb-3 bg-black"></div>
                                            <p className="mb-5">{item.node.location}</p>
                                        </div>
                                    ):(
                                        <>
                                            {/* <GatsbyImage image={item.node.image} className="w-100 h-100" alt={item.node.title} draggable="false"></GatsbyImage> */}
                                            <img src={item.node.image} className="w-full aspect-square object-cover"/>
                                            <div className="p-6">
                                                <div className="bg-black px-3 py-1 inline-block mb-3">
                                                    <p className="text-white text-sm">Award</p>
                                                </div>
                                                <h3 className="font-semibold text-2xl mb-5">{item.node.title}</h3>
                                                <p className="text-sm">{item.node.description}</p>
                                                <div className="row mt-5">
                                                    <div className="flex-1">
                                                        <p className="text-gray-400 uppercase text-sm">Client</p>
                                                        <p className=" text-sm">{item.node.client}</p>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="text-gray-400 uppercase text-sm">Status</p>
                                                        <p className=" text-sm">{item.node.status}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }

                            </div>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="mt-24 center">
                    <button onClick={handleLoadMore} className="border border-black px-16 py-2">More</button>
                </div>
            )}
        </div>
    )
}

export default Award