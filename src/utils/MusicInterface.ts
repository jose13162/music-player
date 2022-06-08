const nextId = (() => {
  let currentId = 0;

  return function () {
    currentId += 1;

    return currentId;
  };
})();

export class MusicInterface {
  public id: number;
  public readonly fileName: string;
  public title: string;
  public author: string;

  constructor(payload: { fileName: string; title: string; author: string }) {
    this.id = nextId();
    this.fileName = payload.fileName;
    this.title = payload.title;
    this.author = payload.author;
  }
}
