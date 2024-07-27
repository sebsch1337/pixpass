import { create } from "zustand";

type Store = {
	picture: string;
	printPicture: string;
	setPicture: (pictureData: string) => void;
	setPrintPicture: (pictureData: string) => void;
};

export const usePicture = create<Store>()((set) => ({
	picture: "",
	printPicture: "",
	setPicture: (pictureData) => set(() => ({ picture: pictureData })),
	setPrintPicture: (pictureData) => set(() => ({ printPicture: pictureData })),
}));
