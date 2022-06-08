import { globalCss, styled } from "./stitches.config";
import { Navigation } from "./components/Navigation";
import { Player } from "./components/Player";
import { useTheme } from "./utils/useTheme";
import { ThemeContext } from "./utils/ThemeContext";

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

function App() {
  globalStyles();

  const [theme] = useTheme();

  return (
    <Container>
      <ThemeContext.Provider value={theme}>
        <Navigation />
        <Player />
      </ThemeContext.Provider>
    </Container>
  );
}

export default App;
