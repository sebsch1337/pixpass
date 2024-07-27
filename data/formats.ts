import { PictureFormat } from "@/types/pictureFormat";
import { PrintFormat } from "@/types/printFormat";

export const pictureFormats: PictureFormat[] = [
	{ id: "2025", name: "20x25mm", width: 20, height: 25 },
	{ id: "2520", name: "25x20mm", width: 25, height: 20 },
	{ id: "2530", name: "25x30mm", width: 25, height: 30 },
	{ id: "3040", name: "30x40mm", width: 30, height: 40 },
	{ id: "3226", name: "32x26mm", width: 32, height: 26 },
	{ id: "3545", name: "35x45mm", width: 35, height: 45 },
	{ id: "3550", name: "35x50mm", width: 35, height: 50 },
	{ id: "4060", name: "40x60mm", width: 40, height: 60 },
	{ id: "4560", name: "45x60mm", width: 45, height: 60 },
	{ id: "5050", name: "50x50mm", width: 50, height: 50 },
	{ id: "4535", name: "45x35mm", width: 45, height: 35 },
	{ id: "5070", name: "50x70mm", width: 50, height: 70 },
	{ id: "3348", name: "33x48mm", width: 33, height: 48 },
	{ id: "3535", name: "35x35mm", width: 35, height: 35 },
	{ id: "3540", name: "35x40mm", width: 35, height: 40 },
	{ id: "3549", name: "35x49mm", width: 35, height: 49 },
	{ id: "4050", name: "40x50mm", width: 40, height: 50 },
	{ id: "4545", name: "45x45mm", width: 45, height: 45 },
	{ id: "5151", name: "51x51mm", width: 51, height: 51 },
	{ id: "5555", name: "55x55mm", width: 55, height: 55 },
];

export const printFormats: PrintFormat[] = [
	{ id: "913D", name: "9x13cm (DM)", width: 252.283, height: 360 },
	{ id: "913", name: "9x13cm", width: 255.12, height: 368.5 },
	{ id: "1015", name: "10x15cm", width: 283.47, height: 425.2 },
	{ id: "1015D", name: "10x15cm (DM)", width: 289.1339, height: 430.8661 },
	{ id: "1117D", name: "11x17cm (DM)", width: 323.1496, height: 479.0551 },
	{ id: "1318", name: "13x18cm", width: 368.5, height: 510.24 },
	{ id: "1318D", name: "13x18cm (DM)", width: 360, height: 504.5669 },
	{ id: "1521", name: "15x21cm", width: 425.2, height: 595.28 },
	{ id: "1824", name: "18x24cm", width: 510.24, height: 680.32 },
	{ id: "2025", name: "20x25cm", width: 566.93, height: 708.66 },
	{ id: "2030", name: "20x30cm", width: 566.93, height: 850.39 },
	{ id: "2127", name: "21.6x27.9cm (Letter)", width: 612.0, height: 793.86 },
	{ id: "2430", name: "24x30cm", width: 680.32, height: 850.39 },
	{ id: "2921", name: "21x29.7cm (A4)", width: 595.28, height: 841.89 },
];
