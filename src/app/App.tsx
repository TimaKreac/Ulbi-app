import { useTheme } from "app/providers/ThemeProvider";
import AboutPage from "pages/AboutPage";
import MainPage from "pages/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

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
