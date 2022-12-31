import React from "react";

import "./SearchResult.css";

const SearchResults = ({ results, query }) => {
  let filtererdResults = results;
  if(results)
  {
    filtererdResults = results.filter(result => result.popularity > 0)
  }

  return (
    <div className="searchResults__container">
      <h1>Search Results for : {query}</h1>
      <div className="searchResults__List">
        {filtererdResults.map((result) => {
          let title = result.titles[0].title;
          let score = result.score;

          if (title.length > 20) {
            title = title.substring(0, 20) + "...";
          }

          if (score == null) {
            score = "NA";
          }

          return (
            <div key={result.mal_id} className="searchResults__animeCard">
              <p className="searchResults__type">{result.type}</p>
              <img
                className="searchResults__animeImg"
                src={result.images.jpg.large_image_url}
                alt=""
              />
              <div className="searchResults__titleInfo">
                <p className="title">{title}</p>
                <p className="rating">{score}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
