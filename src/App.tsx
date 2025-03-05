import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/index.async";
import MainPage from "./pages/MainPage/index.async";
import { useTheme } from "./theme/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
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
