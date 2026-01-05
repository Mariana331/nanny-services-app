import Header from "../Header/Header";
import Nannies from "../Nannies/Nannies";
import Hero from "../Hero/Hero";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="/nannies" element={<Nannies />} />
      </Routes>
    </>
  );
}

export default App;
