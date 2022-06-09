import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@stitches/react";
import { createRef, useContext, useState } from "react";
import { MusicContext, ThemeContext } from "../App";
import { darkTheme, lightTheme, theme } from "../stitches.config";

const Container = styled("div", {
  padding: "1rem",
  zIndex: 1,
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  justifyItems: "space-between",
  justifyContent: "space-between",
  alignItems: "center",
  transition: theme.transitions.$theme.value,
  h3: {
    fontWeight: 500,
  },
  p: {
    fontWeight: 300,
  },
  "&.dark": {
    background: darkTheme.colors.$bgColorDarker.value,
    "h3, p": {
      color: darkTheme.colors.$textColor.value,
    },
  },
  "&.light": {
    background: lightTheme.colors.$bgColor.value,
    "h3, p": {
      color: lightTheme.colors.$textColor.value,
    },
  },
});

const Controls = styled("div", {});

export function Player() {
  const audioReference = createRef<HTMLAudioElement>();
  const [theme] = useContext(ThemeContext);
  const [current, setCurrent] = useContext(MusicContext);
  const [paused, setPaused] = useState(true);

  function playPause() {
    const audio = audioReference.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play();

      setPaused(false);
    } else {
      audio.pause();

      setPaused(true);
    }
  }

  return (
    <Container className={theme}>
      <div className="details">
        <h3>{current.title}</h3>
        <p>{current.author}</p>
      </div>
      <Controls>
        <button>
          <FontAwesomeIcon icon={faBackwardStep} />
        </button>
        <button onClick={playPause}>
          <FontAwesomeIcon
            icon={paused ? faPlay : faPause}
          />
        </button>
        <button>
          <FontAwesomeIcon icon={faForwardStep} />
        </button>
      </Controls>
      <audio src={`/audio/${current.fileName}`} ref={audioReference} />
      <div>
        <button>special button</button>
      </div>
    </Container>
  );
}
