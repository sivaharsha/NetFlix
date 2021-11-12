import React,{useEffect,useState} from 'react'
import './RowPost.css';
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../Constant/constant';
import YouTube from 'react-youtube'
function RowPost(props) {
    const [movie,setMovie] =useState([])
    const [urlId,setUrlId] =useState('')
 useEffect(() => {
     axios.get(props.url).then(response=>{
         console.log(response.data)
         setMovie(response.data.results)
     })
 }, [])
 const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
        console.log(id);
        axios.get(`movie/438631/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                if(response.data.results.lenght!==0){
                    setUrlId(response.data.result[0])
                }
        })
  }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posts">
                {movie.map((obj)=>
                    <img onClcik={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'post'} src={`https://www.scifinow.co.uk/wp-content/uploads/2018/08/ghoul_ver2_xxlg.jpg`} alt="Poster" />
                )}
            </div>
            { urlId &&  <YouTube opts={opts} videoId={urlId.key}/> }
        </div>
    )
}

export default RowPost
