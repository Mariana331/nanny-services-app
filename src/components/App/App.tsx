import Header from "../Header/Header";
import Nannies from "../Nannies/Nannies";
import Hero from "../Hero/Hero";
import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.app}>
      <Header />
      <Hero />
      <Routes>
        <Route path="/nannies" element={<Nannies />} />
      </Routes>
    </div>
  );
}

export default App;
