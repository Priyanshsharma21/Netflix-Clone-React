import './App.css';
import Row from './Row'
import React,{useState} from 'react'
import requests from './requests'
import Banner from './Banner';
import Navbar from './Navbar'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress,setProgress] = useState(0)

  return (
    
    <div className="app">

  <LoadingBar
      color='red'
      progress={progress}
    />
    {/* navbar  */}

    <Navbar />

    {/* banner  */}
    <Banner />


    {/* main-contnet  */}
      <Row title="Treanding Now" fetchUrl={requests.fetchTrending} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals} setProgress={(progress)=>{setProgress(progress)}} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} setProgress={(progress)=>{setProgress(progress)}}/>
    </div>
  );
}

export default App;
