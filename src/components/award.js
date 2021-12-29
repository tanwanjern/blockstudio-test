import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

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

    const [list, setList] = useState([...awardData.slice(0, 2)])
    const [loadMore, setLoadMore] = useState(false)
    const [hasMore, setHasMore] = useState(awardData.length > 2)

    const handleLoadMore = () => {
        setLoadMore(true)
    }

    useEffect(() => {
        if (loadMore && hasMore) {
          const currentLength = list.length
          const isMore = currentLength < awardData.length
          const nextResults = isMore
            ? awardData.slice(currentLength, currentLength + 2)
            : []
          setList([...list, ...nextResults])
          setLoadMore(false)
        }
    }, [loadMore, hasMore]) 

    useEffect(() => {
        const isMore = list.length < awardData.length
        setHasMore(isMore)

        console.log(list)
    }, [list])

    return(
        <div className="container mx-auto py-10">
            <div>
                {list.map((article) => (
                    <div key={article.node.id}>
                        <p>{article.node.id}</p>
                    </div>
                ))}
            </div>

            {hasMore && (
                <button onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    )
}

export default Award