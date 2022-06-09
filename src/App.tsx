import { globalCss, styled } from "./stitches.config";
import { Navigation } from "./components/Navigation";
import { MusicList } from "./components/MusicList";
import { createContext } from "react";
import { Response, Theme, useTheme } from "./utils/useTheme";

const globalStyles = globalCss({
  "*": {
    fontFamily: "Poppins",
    listStyle: "none",
    margin: 0,
    padding: 0,
    outline: "none",
  },
});

const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content 1fr",
});

export const ThemeContext = createContext<Response<Theme>>(["light", () => {}]);

function App() {
  globalStyles();

  const [theme, setTheme] = useTheme();

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Container>
        <Navigation />
        <MusicList />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
