export interface ISong {
  album: string;
  createdAt: Date;
  file: string;
  id: string;
  name: string;
}

export interface ISongWithImage extends ISong {
  image: string;
}
