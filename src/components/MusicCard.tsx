import { BaseHTMLAttributes } from "react";
import { MusicInterface } from "../utils/MusicInterface";

interface IProps extends BaseHTMLAttributes<HTMLDivElement> {
  music: MusicInterface;
}

export function MusicCard({music, ...rest}: IProps) {
  return (
    <div {...rest}>
      <h3>{music.title}</h3>
      <p>{music.author}</p>
    </div>
  );
}
