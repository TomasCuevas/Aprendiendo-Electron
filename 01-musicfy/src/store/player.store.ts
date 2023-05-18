import { create } from "zustand";

//* interface *//
import { ISong } from "@/interfaces";

interface usePlayerState {
  miniature: string;
  playing: boolean;
  song?: ISong;
  volume: number;
  pause(): void;
  playSong(): void;
  resume(): void;
}

export const usePlayerStore = create<usePlayerState>((set) => ({
  miniature: "",
  playing: false,
  song: undefined,
  volume: 1,
  pause() {
    set(() => ({ playing: false }));
  },
  playSong() {},
  resume() {
    set(() => ({ playing: true }));
  },
}));
