import AnimeCard from './AnimeCard';

function MainContent(props) {
    const { HandleSearch, search, SetSearch } = props;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      HandleSearch(e);

    };
  
    return (
      <main>
        <div className="main-head">
          <form className="search-box" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="First Enter an Anime show"
              required
              value={search}
              onChange={(e) => SetSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="anime-list">
				{props.animeList.map(anime => (
                 <AnimeCard
                 anime = {anime}
                key = {anime.mal_id}/>
            
				))}
			</div>
      </main>
    );
  }
  
  export default MainContent;
  