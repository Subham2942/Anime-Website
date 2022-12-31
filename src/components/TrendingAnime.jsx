import React from 'react'
import {useState, useEffect}  from 'react'

import fetchAnime from '../api/services'

import './TrendingAnime.css'



const TrendingAnime = () => {


    const [animeData, setAnimedata] = useState();
    
    useEffect(() => {   
        
        const fetchData = async () =>{
          await fetchAnime('top/anime', {filter: 'airing'})
          .then(resData => setAnimedata(resData.data))
          .catch(setAnimedata(null))

      }
      fetchData();
       
    }, []);

console.log(animeData)
  return (
    <div className='trending__container'>
        <h1>Trending Anime</h1>
        <div className='trending__List'> 

        
        {animeData && animeData.map(anime =>{
            return (
                <div key={anime.mal_id} className='trending__animeCard' >
                    <p className='trending__type'>{anime.type}</p>
                        <img className='trending__animeImg' src={anime.images.jpg.large_image_url} alt="" />
                    <div className='trending__titleInfo' >
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

export default TrendingAnime