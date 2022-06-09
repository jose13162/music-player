import { globalCss, styled } from "./stitches.config";
import { Navigation } from "./components/Navigation";
import { MusicList } from "./components/MusicList";
import { Player } from "./components/Player";
import { createContext, useState } from "react";
import { Theme, useTheme } from "./utils/useTheme";
import { ReproductionList } from "./utils/ReproductionList";
import { musics } from "./utils/musics";
import { MusicInterface } from "./utils/MusicInterface";
import { StateTypings } from "./utils/StateTypings";

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

const reproductionList = new ReproductionList({
  all: musics,
  current: undefined,
});
const firstMusic = reproductionList.next();

export const ThemeContext = createContext<StateTypings<Theme>>([
  "light",
  () => {},
]);
export const MusicContext = createContext<StateTypings<MusicInterface>>([
  firstMusic,
  () => {},
]);

function App() {
  globalStyles();

  const [theme, setTheme] = useTheme();
  const [current, setCurrent] = useState<MusicInterface>(firstMusic);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <MusicContext.Provider value={[current, setCurrent]}>
        <Container>
          <Navigation />
          <MusicList />
          <Player />
        </Container>
      </MusicContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
