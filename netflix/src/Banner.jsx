import React,{useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            const randomMovie =  Math.floor(Math.random() * request.data.results.length - 1)
            setMovie(request.data.results[randomMovie])

            return request
        }
        fetchData()
    }, [])

    console.log(movie)

    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "...":str;
    }

    // we want banner to load once when page reload
    
  return (
    <>
        <header className='banner'
        style={{
            backgroundSize : "cover",
            backgroundPosition:"center center",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        }}>

        <div className="banner_contents transparent">
            {/* title  */}
            <h1 className='banner_title transparent'> {movie?.title || movie?.name || movie?.original_name} </h1>
            <div className="banner_buttons transparent">
                <button className="banner__button btn-play">Play</button>
                <button className="banner__button btn-add">More Info</button>
            </div>

            <h1 className='banner_description transparent'>
                {truncate(movie?.overview, 220)}
            </h1>
        </div>
        <div className="banner_fadeBottom" />
        </header>
    </>
  )
}

export default Banner