import React, { useState, useEffect } from 'react';



export const UseFetch = ({API_KEY ,keyword} = {keyword: null}) => {
    
    const[gifs, setGifs] = useState([])


    useEffect(() => {
        const keywordToUse = keyword || localStorage.getItem('last keyword') || "random"
        const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keywordToUse}&limit=25&offset=0&rating=g&lang=en`
        fetch(API_URL)
        .then((res) => res.json())
        .then((json) =>{ 
            json.data.forEach(el => {
                const gif = {
                    title: el.title,
                    img: el.images.downsized_medium.url, 
                    id: el.id
                }
                setGifs((gifs) => [...gifs, gif])
                localStorage.setItem('last keyword', keyword)
              })
        })
    }, [keyword])  

  return {gifs}
}

