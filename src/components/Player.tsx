import { useState } from "react";
import { styled } from "../stitches.config";
import { MusicInterface } from "../utils/MusicInterface";
import { musics } from "../utils/musics";
import { ReproductionList } from "../utils/ReproductionList";
import { MusicCard } from "./MusicCard";
import { ScrollArea } from "./ScrollArea";

const reproductionList = new ReproductionList({
  all: musics,
  current: undefined,
});
const currentMusic = reproductionList.next();

const StyledPlayer = styled("section", {
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr max-content",
});

export function Player() {
  const [current, setCurrent] = useState<MusicInterface>(currentMusic);

  function nextMusic() {
    setCurrent(reproductionList.next());
  }

  function previousMusic() {
    setCurrent(reproductionList.previous());
  }

  return (
    <StyledPlayer>
      <ScrollArea>
        {musics.map((music) => (
          <MusicCard key={music.id} music={music} />
        ))}
      </ScrollArea>

      <div>
        <button onClick={() => nextMusic()}>next</button>
        <button onClick={() => previousMusic()}>previous</button>
        <h1>{current.title}</h1>
        <audio src={`/audio/${current!.fileName}`} controls autoPlay></audio>
      </div>
    </StyledPlayer>
  );
}
