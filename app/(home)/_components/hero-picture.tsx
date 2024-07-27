import Image from "next/image";

interface HeroPictureProps {
	persona: "child" | "man" | "woman";
}

export const HeroPicture = ({ persona }: HeroPictureProps) => {
	return (
		<Image
			src={`/hero-${persona}-35.webp`}
			width={780}
			height={1003}
			alt={"Biometrical picture of an anime woman"}
		/>
	);
};
