import { BaseHTMLAttributes, useContext } from "react";
import { ThemeContext } from "../App";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { MusicInterface } from "../utils/MusicInterface";

interface IProps extends BaseHTMLAttributes<HTMLDivElement> {
  music: MusicInterface;
}

const StyledMusicCard = styled("div", {
  padding: "1rem",
  cursor: "pointer",
  transition: theme.transitions.$theme.value,
  "&.dark": {
    "&:hover": {
      background: darkTheme.colors.$bgColorSecondary.value,
    },
  },
  "&.light": {
    "&:hover": {
      background: lightTheme.colors.$bgColorDarker.value,
    },
  },
  h3: {
    color: theme.colors.$textColor.value,
    fontWeight: 600,
  },
  p: {
    color: theme.colors.$textColor.value,
    fontWeight: 300,
  },
});

export function MusicCard({ music, ...rest }: IProps) {
  const [theme] = useContext(ThemeContext);

  return (
    <StyledMusicCard {...rest} className={theme}>
      <h3>{music.title}</h3>
      <p>{music.author}</p>
    </StyledMusicCard>
  );
}
