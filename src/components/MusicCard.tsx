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
  h3: {
    fontSize: "1.25rem",
    fontWeight: 500,
  },
  p: {
    fontWeight: 300,
  },
  "&.dark": {
    "h3, p": {
      color: darkTheme.colors.$textColor.value,
    },
    "&:hover": {
      background: darkTheme.colors.$bgColorSecondary.value,
    },
  },
  "&.light": {
    "h3, p": {
      color: lightTheme.colors.$textColor.value,
    },
    "&:hover": {
      background: lightTheme.colors.$bgColorDarker.value,
    },
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
