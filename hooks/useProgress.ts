import { create } from "zustand";

type Store = {
	progress: string | null;
	setProgress: (state: string | null) => void;
};

export const useProgress = create<Store>()((set) => ({
	progress: "upload",
	setProgress: (state) => set(() => ({ progress: state })),
}));
