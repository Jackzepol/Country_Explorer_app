


import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;