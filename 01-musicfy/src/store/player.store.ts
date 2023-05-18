import { create } from "zustand";

//* interface *//
import { ISongWithImage } from "@/interfaces";

interface usePlayerState {
  miniature: string;
  playing: boolean;
  song?: ISongWithImage;
  volume: number;
  pause(): void;
  playSong(song: ISongWithImage): void;
  resume(): void;
  setVolume(volume: number): void;
}

export const usePlayerStore = create<usePlayerState>((set) => ({
  miniature: "",
  playing: false,
  song: undefined,
  volume: 1,
  pause() {
    set(() => ({ playing: false }));
  },
  playSong(song) {
    set(() => ({
      song: song,
      miniature: song.image,
      playing: true,
    }));
  },
  resume() {
    set(() => ({ playing: true }));
  },
  setVolume(volume) {
    set(() => ({
      volume: volume,
    }));
  },
}));
