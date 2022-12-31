import React from "react";

import {useState, useEffect} from 'react'

import SearchResults from './components/SearchResults.jsx'
import SearchBar from "./components/SearchBar.jsx";

import fetchAnime from './api/services'
import './App.css'
import Loading from "./components/Loading.jsx";
import TrendingAnime from './components/TrendingAnime'
import TopAnime from './components/TopAnime'

function App() {


    const [animeData, setAnimeData] = useState()
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {   
        
        const fetchData = async () =>{
          setLoading(true);
          await fetchAnime('anime', {q: query})
          .then(resData => setAnimeData(resData.data))
          .catch(setAnimeData(null))
  
          setLoading(false);
      }
      if(query)
      {
        fetchData();
      }
        
        
       
    }, [query]);

    // console.log(animeData && animeData.length === 0)
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="container">
         
      {loading && <Loading/>}

      {animeData && !loading && (<SearchResults results={animeData} query={query} />) }
    
      {(!loading && animeData && animeData.length === 0)  &&  <h5 onClick={()=> setAnimeData(null)}>No Anime Found</h5>}
   

      <TrendingAnime />
      <TopAnime/>
    </div>
    </>
    
  );
}

export default App;
