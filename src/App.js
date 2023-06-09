import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import {useState,useEffect} from 'react';

function App() {

  const[animeList, SetAnimeList] = useState([]);
  const[topAnime,SetTopAnime] = useState([]);
const[search,SetSearch] = useState("");







const getTopAnime = async () => {
const res = await fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity');
const resData=await res.json();
SetTopAnime(resData.data)
console.log(resData);
}

useEffect(() => {
  getTopAnime();
}, []);








const fetchAnime = async () => {
  const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=25&filter=bypopularity`)
  const resData= await res.json();
  SetAnimeList(resData.data);
  console.log("the fuking search");
  console.log(resData.data);



};

const HandleSearch = (e) => {
  e.preventDefault();

  console.log(search);
  fetchAnime();
};


return (
  <div className="App">
    <Header />
    <div className="content-wrap">
      <Sidebar topAnime={topAnime} />
      <MainContent
      HandleSearch = {HandleSearch} 
      search={search}
      SetSearch={SetSearch}
      animeList={animeList}
      />
    </div>
  </div>
);
}

export default App;