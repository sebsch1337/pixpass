import { create } from "zustand";
import { Area, Point } from "react-easy-crop";

type Store = {
	croppedPicture: string;
	croppedArea: Area | null;
	croppedPosition: Point;
	zoom: number;
	setCroppedPicture: (pictureData: string) => void;
	setCroppedArea: (areaData: Area | null) => void;
	setCroppedPosition: (positionData: Point) => void;
	setZoom: (zoomData: number) => void;
};

export const useCrop = create<Store>()((set) => ({
	croppedPicture: "",
	croppedArea: null,
	croppedPosition: { x: 0, y: 0 },
	zoom: 1,
	setCroppedPicture: (pictureData) => set(() => ({ croppedPicture: pictureData })),
	setCroppedArea: (areaData) => set(() => ({ croppedArea: areaData })),
	setCroppedPosition: (positionData) => set(() => ({ croppedPosition: positionData })),
	setZoom: (zoomData) => set(() => ({ zoom: zoomData })),
}));
