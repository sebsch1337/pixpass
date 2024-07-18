import Image from "next/image";

interface HeroImageProps {
	persona: "child" | "man" | "woman";
}

export const HeroImage = ({ persona }: HeroImageProps) => {
	return (
		<Image
			src={`/hero-${persona}-35.webp`}
			width={780}
			height={1003}
			alt={"Biometrical picture of an anime woman"}
		/>
	);
};
