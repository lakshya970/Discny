import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProdctionHome from "./components/ProdctionHome";
import GenreMoviesList from "./components/GenreMoviesList";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ProdctionHome />
      <GenreMoviesList />
    </div>
  );
}

export default App;
