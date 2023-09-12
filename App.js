import React from 'react';
import './App.css';
import Navbar from './navbar';
import Banner from './banner.js';
import requests from './Requests';
import Row from './Row';

function App() {
  return (
    <div className="app">
     <Navbar/>
    &nbsp;&nbsp;&nbsp;
      <Banner/>
      <Row
      title="Popular Movies"
      fetchUrl={requests.popularMovie} isLargeRow/>
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
