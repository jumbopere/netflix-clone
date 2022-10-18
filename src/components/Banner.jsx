import React, { useState, useEffect } from 'react';
import requests from '../requests';
import axios from '../axios'

const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
const fetchData = async()=> {
    const request = await axios.get(requests.fetchNetflixOriginals)
    setMovies(request.data.results[
        Math.floor(Math.random() * request.data.results.length -1)
    ])
    return request
}
fetchData()
    }, [])
    
console.log(movies)
    const truncate = (string, n) => {
return string?.length > n ?string.substr(0, n-1) +'.... ': string
    }
  return(
   <header className='banner h-[448px] relative object-contain text-white ' style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
    backgroundSize:"cover",
    backgroundPosition:"center center"
    
    }}>
<div className='banner__contents ml-[30px] pt-[140px] h-[190px] '>
<h1 className="banner__title text-5xl font-extrabold pb-[0.3rem]">Movie Name</h1>
<div className="banner__buttons">
    <button className='cursor-pointer text-white outline-none border-none font-bold pl-8 pr-8 mr-4 pt-2 bg-banner pb-2 hover:text-[#000] hover:bg-[#e6e6e6] hover:transition-all'> Play</button>
    <button className='ursor-pointer text-white outline-none border-none font-bold pl-8 pr-8 mr-4 pt-2  bg-banner pb-2 hover:text-[#000] hover:bg-[#e6e6e6] hover:transition-all'>My List</button>
</div>
<h1 className="banner__description w-[45rem] pt-4 h-20 max-w--[360px] text-xs">
    {truncate(`this is a description`, 10)}
</h1>
</div>
<div className="banner--fadebottom"  />
  </header>
  )
}

export default Banner