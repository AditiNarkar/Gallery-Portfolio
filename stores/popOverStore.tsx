import { create } from "zustand";

export type State = {
  title: string;
  github: string;
};

export type Action = {
  updateTitle: (title: State["title"]) => void;
  updateGithub: (github: State["github"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const popOverStore = create<State & Action>((set) => ({
  title: "",
  github: "",
  updateTitle: (title) => set(() => ({ title: title })),
  updateGithub: (github) => set(() => ({ github: github })),
}));
