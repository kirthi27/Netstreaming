const API_KEY = "9629d87d16563812534dd227aec1717d";

const requests = {
  
popularMovie:`/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
 fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests