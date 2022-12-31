import React from 'react'
import {useState, useEffect}  from 'react'

import fetchAnime from '../api/services'

import './TopAnime.css'



const TopAnime = () => {

    const [animeData, setAnimedata] = useState();
    
    useEffect(() => {   
        
        const fetchData = async () =>{
          await fetchAnime('top/anime', {})
          .then(resData => setAnimedata(resData.data))
          .catch(setAnimedata(null))

      }
      fetchData();
       
    }, []);

   

console.log(animeData)
  return (
    <div className='top__container'>
        <h1>Top Anime</h1>
        <div className='top__List'> 
        
        {animeData && animeData.map(anime =>{
            return (
                <div key={anime.mal_id} className='top__animeCard' >
                    <p className='top__type'>{anime.type}</p>
                        <img className='top__animeImg' src={anime.images.jpg.large_image_url} alt="" />
                    <div className='top__titleInfo' >
                        <p className='title' >{anime.titles[0].title}</p>
                        <p className="rating">{anime.score}</p>
                    </div>
                </div>
            )
             
        })}
        </div>
    </div>
  )
}

export default TopAnime