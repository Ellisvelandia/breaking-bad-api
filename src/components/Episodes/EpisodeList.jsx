import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  const getepisodes = async () => {
    const data = await fetch("https://www.breakingbadapi.com/api/episodes");
    const episodes = await data.json();
    setEpisodes(episodes);
  };

  useEffect(() => {
    getepisodes();
  }, []);
  return (
    <>
      <p>Results found {episodes.length}</p>
      <div className="episodes-list">
        {episodes.map((episode) => (
          <Link
            to={`/episodes/${episode.episode_id}`}
            className="card-episode"
            key={episode.episode_id}
          >
            <div className="container-img">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY1200_CR85,0,630,1200_AL_.jpg"
                alt={episode.title}
              />
            </div>
            <div className="text-episode">
              <span>{episode.episode_id}</span>
              <h1>{episode.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default EpisodeList;
