import { create } from "zustand";

import { PrintFormat } from "@/types/printFormat";
import { PictureFormat } from "@/types/pictureFormat";

type Store = {
	pictureFormat: PictureFormat | null;
	printFormat: PrintFormat | null;
	setPictureFormat: (format: PictureFormat | null) => void;
	setPrintFormat: (format: PrintFormat | null) => void;
};

export const useFormats = create<Store>()((set) => ({
	pictureFormat: null,
	printFormat: null,
	setPictureFormat: (format) => set(() => ({ pictureFormat: format })),
	setPrintFormat: (format) => set(() => ({ printFormat: format })),
}));
