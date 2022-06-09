import { useContext } from "react";
import { ThemeContext } from "../App";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { musics } from "../utils/musics";
import { MusicCard } from "./MusicCard";
import { ScrollArea } from "./ScrollArea";

const StyledMusicList = styled("section", {
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr max-content",
  transition: theme.transitions.$theme.value,
  "&.dark": {
    background: darkTheme.colors.$bgColor.value,
  },
  "&.light": {
    background: lightTheme.colors.$bgColor.value,
  },
});

export function MusicList() {
  const [theme] = useContext(ThemeContext);

  return (
    <StyledMusicList className={theme}>
      <ScrollArea>
        {musics.map((music) => (
          <MusicCard key={music.id} music={music} />
        ))}
      </ScrollArea>
    </StyledMusicList>
  );
}
