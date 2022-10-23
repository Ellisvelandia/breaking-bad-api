import React, { useEffect, useState } from "react";

const Deaths = () => {
  const [deaths, setDeaths] = useState([]);

  const getDeaths = async () => {
    const data = await fetch("https://www.breakingbadapi.com/api/deaths");
    const deaths = await data.json();
    setDeaths(deaths);
  };

  useEffect(() => {
    getDeaths();
  }, []);

  return (
    <div className="deaths-list">
      <div className="card-death card-header">
        <p>Death</p>
        <p>Cause of death</p>
        <p>Responsible Death</p>
        <p>Last Words</p>
        <p>Season</p>
        <p>Episodes</p>
      </div>
      {deaths.map((death) => (
        <div key={death.death_id} className="card-death">
          <div className="death-name">
            <i className="fa-solid fa-skull-crossbones"></i>
            <p>{death.death}</p>
          </div>
          <div className="death-cause">
            <p>{death.cause}</p>
          </div>

          <div className="death-responsible">
            <p>{death.responsible}</p>
          </div>

          <div className="death-last-words">
            <p>{death.last_words}</p>
          </div>

          <div className="death-season">
            <p>{death.season}</p>
          </div>
          <div className="death-episode">
            <p>{death.episode}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deaths;
