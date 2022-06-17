import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import Movie_Trailer from 'movie-trailer'


const base_url = 'https://image.tmdb.org/t/p/original/'


const Row = ({title,fetchUrl, isLargeRow, setProgress}) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  //Piece of code will execute on some condition like fetch data from tmdb servers
  //whenever the piece of code runs(treanding row movies) this will run
    //if [] run once and then dont run
    //if [movies] this every time movie update this function run
    //! If any variable inside the use effect fetching data from outside servers include ot in optional bracket
  useEffect(() => {
    async function fetchData(){
      setProgress(50)
        const request = await axios.get(fetchUrl)
      setProgress(70)
        setMovies(request.data.results)
      setProgress(100)
        return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)


  const opts = {
    height: '400',
    width: '1810',
    playerVars: {
      autoplay: 1,
    },
  };


  
  const handelClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl("")
    }else{
      // https://www.youtube.com/watch?v=tSqqygm_JyA
      setProgress(30)
      Movie_Trailer(`${movie?.original_title}` || "")
      .then((url)=>{
        const urlParam = new URLSearchParams(new URL(url).search); // this will gives us the y-t video id
        setProgress(70)
        setTrailerUrl(urlParam.get('v'));
        setProgress(100)
      }).catch(err=>{console.log(err)})

    }

  }



  return (
    <>
        <div className="row">
        <h2 className='title'>{title}</h2>
{/* contain row posters  */}
        <div className="row_posters">
            {movies.map(movie => (
                    <img
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    onClick={()=>{handelClick(movie)}}
                    key={movie.id}
                    src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}

        </div>
    </>
  )
}

export default Row

// Note -> In react we dont render all the items we render only the updated items
// for that we have to pass some ubique info as key