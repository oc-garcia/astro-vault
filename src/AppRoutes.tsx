import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Apod from "./pages/Apod";
import MarsRovers from "./pages/MarsRovers";
import Footer from "./components/Footer/Footer";
import Asteroids from "./pages/Asteroids";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/marsrovers" element={<MarsRovers />} />
          <Route path="/asteroids" element={<Asteroids />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
