
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      <Banner/>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflix0riginals } 
      isLargeRow={true}
      />
      
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchtHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
