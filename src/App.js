import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ViewProduct from "./components/ViewProduct";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view-product" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
