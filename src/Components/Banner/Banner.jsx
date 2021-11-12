import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import {API_KEY,imageUrl} from '../../Constant/constant';
import './Banner.css';
function Banner() {
    
    const [movie, setMovie] = useState()
  
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])
            setMovie(response.data.results[0])
        })
    },[])
    return (
        <div  style ={{backgroundImage:`url(${movie ? imageUrl+`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qw3J9cNeLioOLoR68WX7z79aCdK.jpg` : ""})`}}  className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                        <h1 className="description">
                            {movie ? movie.overview : " "} 
                        </h1>
            </div>
            <div className="fade_bottom">
                
            </div>
        </div>
    )
}

export default Banner
