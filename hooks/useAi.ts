import { create } from "zustand";

type Store = {
	message: string;
	approved: boolean | null;
	setMessage: (replyMessage: string) => void;
	setApproved: (replyApproved: boolean | null) => void;
};

export const useAi = create<Store>()((set) => ({
	message: "",
	approved: null,
	setMessage: (replyMessage) => set(() => ({ message: replyMessage })),
	setApproved: (replyApproved) => set(() => ({ approved: replyApproved })),
}));
