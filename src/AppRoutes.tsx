import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Apod from "./pages/Apod";
import MarsRovers from "./pages/MarsRovers";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/marsrovers" element={<MarsRovers />} />
      </Routes>
    </BrowserRouter>
  );
}
