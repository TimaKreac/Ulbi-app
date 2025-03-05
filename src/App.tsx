import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/index.async";
import MainPage from "./pages/MainPage/index.async";

function App() {
  return (
    <div className="app">
      <Suspense fallback>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
