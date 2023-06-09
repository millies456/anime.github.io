function Sidebar({ topAnime }) {
    return (
      <aside>
        <nav>
          <h3>Top Anime of the Year</h3>
          {topAnime && topAnime.map((anime) => (
            <a
              href={anime.url}
              target="_blank"
              rel="noreferrer"
              key={anime.mal_id}
            >
              {anime.title}
            </a>
          ))}
        </nav>
      </aside>
    );
  }
  
  export default Sidebar;
  