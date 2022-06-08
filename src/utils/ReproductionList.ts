import { MusicInterface } from "./MusicInterface";

export class ReproductionList {
  private index = -1;
  public readonly current: MusicInterface | null;
  public readonly all: MusicInterface[];

  constructor(payload: { current?: MusicInterface; all: MusicInterface[] }) {
    this.all = payload.all;
    this.current = payload.current || null;
  }

  next() {
    if (!this.hasNext()) this.index = -1;

    this.index += 1;

    const next = this.all[this.index];

    return next;
  }

  previous() {
    if (!this.hasPrevious()) this.index = this.all.length;

    this.index -= 1;

    const previous = this.all[this.index];

    return previous;
  }

  hasNext() {
    return !!this.all[this.index + 1];
  }

  hasPrevious() {
    return !!this.all[this.index - 1];
  }
}
