import { create } from "zustand";

type Store = {
	picture: string | null;
	setPicture: (uploadedPicture: string | null) => void;
};

export const usePicture = create<Store>()((set) => ({
	picture: null,
	setPicture: (uploadedPicture) => set(() => ({ picture: uploadedPicture })),
}));
