import React ,{useEffect, useState} from 'react'
import Main from '../components/Main/Main'
import Row from '../components/Row/Row'
import requests from '../Request'
import axios from 'axios'

export const Home = () => {
    const [movies, setMovies] = useState([])    
    

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    },[])

    let movie

    movie = movies? (movies[Math.floor(Math.random() * movies.length)]) : null


    const handleImageClick = (item) =>{
        setClickedImage(item)
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
          });
    }
  return (
    <div>
        <Main movie={movie} />
        <Row title='Up Coming'  fetchURL={requests.requestUpcoming} />
        <Row title='Horror' fetchURL={requests.requestHorror} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row title='Popular' fetchURL={requests.requestPopular} />
    </div>
  )
}
