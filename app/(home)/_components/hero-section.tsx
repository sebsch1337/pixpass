import { Button } from "@/components/button";

import { HeroImageCollage } from "./hero-image-collage";

export const HeroSection = () => {
	return (
		<section className="bg-sky-200 p-8 rounded-xl flex-col md:flex-row flex gap-20 justify-center items-center">
			<div className="w-full md:w-1/2 flex gap-8 flex-col items-center justify-center md:items-start">
				<h1 className="text-sky-950 text-3xl lg:text-5xl font-bold text-center md:text-left">
					Simply print your
					<br />
					<span className="text-sky-600 leading-normal">passport photos</span>
					<br />
					in any size.
				</h1>
				<div className=" text-sky-800 font-semibold text-xl">
					<p>
						Upload your picture,
						<br />
						select the target format,
						<br />
						download and print!
					</p>
				</div>

				<div className="my-4 w-4/5 relative md:hidden">
					<HeroImageCollage />
				</div>

				<div className="">
					<Button variant="flat">Start now</Button>
					<p className="text-xs font-light text-sky-950 mt-2">1 picture free - Unlimited for 4.99$ / month!</p>
				</div>
			</div>

			<div className="w-1/2 relative hidden md:block">
				<HeroImageCollage />
			</div>
		</section>
	);
};
