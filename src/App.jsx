import { useState } from "react";
import { useGlobalContext } from "./context";

import "./App.css";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App() {
  const { showModal, favorites } = useGlobalContext();

  return (
    <main>
      <div>
        <Search />
        {favorites.length > 0 && <Favorites />}
        <Meals />
        {showModal && <Modal />}
      </div>
    </main>
  );
}

export default App;
