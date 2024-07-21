import { create } from "zustand";

type Store = {
	currentPage: string | null;
	setCurrentPage: (page: string | null) => void;
};

export const useCurrentPage = create<Store>()((set) => ({
	currentPage: "upload",
	setCurrentPage: (page) => set(() => ({ currentPage: page })),
}));
