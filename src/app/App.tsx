import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRouter />
    </div>
  );
}

export default App;
