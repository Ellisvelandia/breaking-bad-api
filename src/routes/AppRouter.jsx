import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsEpisode from "../components/Episodes/DetailsEpisode";
import Navbar from "../components/Navbar";
import CharacterPage from "../Pages/CharacterPage";
import DeathsPage from "../Pages/DeathsPage";
import DetailsCharactersPage from "../Pages/DetailsCharactersPage";
import EpisodesPage from "../Pages/EpisodesPage";
import QuotesPage from "../Pages/QuotesPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharacterPage />} />

        <Route path="/characters">
          <Route index element={<CharacterPage />} />
          <Route path=":id" element={<DetailsCharactersPage />} />
        </Route>

        <Route path="/episodes">
          <Route index element={<EpisodesPage />} />
          <Route path=":id" element={<DetailsEpisode />} />
        </Route>

        <Route path="/deaths" element={<DeathsPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
