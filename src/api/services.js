const BASE_URL = "https://api.jikan.moe/v4";

const fetchAnime = (searchType, searchParams) =>{

    let url =  new URL(BASE_URL + '/' + searchType);
    url.search = new URLSearchParams({
        ...searchParams,
        limit:12,
        order_by: 'rank',
        sfw: true,
        
    })

    

    return fetch(url)
    .then(res =>res.json())
    .then((data) => data);
}


export default fetchAnime;