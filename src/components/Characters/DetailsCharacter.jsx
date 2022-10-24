import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

const DetailsCharacter = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  const getCharacterByID = async (id) => {
    const data = await fetch(
      `https://www.breakingbadapi.com/api/characters/${id}`
    );
    const character = await data.json();
    setCharacter(character[0]);
  };
  useEffect(() => {
    getCharacterByID(id);
  }, []);

  return (
    <>
      {Object.entries(character).length ? (
        <div className="details-character">
          <div className="card-img">
            <img src={character.img} alt={character.name} />
          </div>

          <div className="card-information">
            <h1>{character.name}</h1>
            <h2>Information</h2>
            <p>
              Date birth: <span>{character.birthday}</span>
            </p>
            <p>
              Nickname: <span>{character.nickname}</span>
            </p>
            <span id="occupation">
              Ocupattion
              <ul>
                {character.occupation?.map((occupation) => (
                  <li key={occupation}>{occupation}</li>
                ))}
              </ul>
            </span>
            <hr />
            <p>
              {" "}
              portrayed: <span>{character.portrayed}</span>{" "}
            </p>
            <p>
              {" "}
              status : <span>{character.status}</span>{" "}
            </p>
            <p>
              {" "}
              category : <span>{character.category}</span>{" "}
            </p>
          </div>
        </div>
      ) : (
        <div className="container-loading">
          <Loader />
        </div>
      )}
    </>
  );
};

export default DetailsCharacter;
