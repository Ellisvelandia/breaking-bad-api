import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const data = await fetch("https://www.breakingbadapi.com/api/characters");
    const characters = await data.json();
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      {characters.length ? (
        <>
          <p>Results found{characters.length}</p>
          <div className="characters-list">
            {characters.map((character) => (
              <Link
                to={`/characters/${character.char_id}`}
                key={character.char_id}
                className="card-character"
              >
                <div className="container-img">
                  <img src={character.img} alt={character.name} />
                </div>
                <h1>{character.name}</h1>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="container-loading">
          <Loader />
        </div>
      )}
    </>
  );
};

export default CharacterList;
