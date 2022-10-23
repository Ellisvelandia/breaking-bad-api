import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsEpisode = () => {
  const [episode, setEpisode] = useState({});

  const { id } = useParams();

  const getCharacterByID = async (id) => {
    const data = await fetch(
      `https://www.breakingbadapi.com/api/episodes/${id}`
    );
    const episode = await data.json();
    setEpisode(episode[0]);
  };

  console.log(episode);
  useEffect(() => {
    getCharacterByID(id);
  }, []);

  return (
    <div className="details-episode">
      <div className="card-information-episode">
        <p>
          Title of Episode: <span>{episode.title}</span>
        </p>
        <p>
          Num of Episode: <span>{episode.episode}</span>
        </p>
        <p>
          Season: <span>{episode.season}</span>
        </p>
        <p>
          Air Date: <span>{episode.air_date}</span>
        </p>

        <span id="characters">
          Characters
          <ul>
            {episode.characters?.map((character) => (
              <li key={character}>{character}</li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default DetailsEpisode;
