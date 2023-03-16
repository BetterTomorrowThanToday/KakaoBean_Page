import "./App.css";
import ReactDDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Team from "./pages/Team/index";
import Vision from "./pages/Vision/index";
import Custom from "./pages/Custom/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="vision" element={<Vision />} />
        <Route path="team" element={<Team />} />
        <Route path="custom" element={<Custom />} />
      </Routes>
    </BrowserRouter>
  );
}
