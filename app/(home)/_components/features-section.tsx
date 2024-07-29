export const FeaturesSection = () => {
	return (
		<section className="md:bg-sky-200 p-8 rounded-xl flex-col md:flex-row gap-16 flex text-center">
			<div className="flex-1">
				<h2 className="text-3xl font-bold bg-gradient-to-r from-sky-950 to-sky-400 inline-block bg-clip-text text-transparent">
					No Login
				</h2>
				<p className="text-xl font-semibold text-sky-950">required</p>
			</div>
			<div className="flex-1">
				<h2 className="text-3xl font-bold bg-gradient-to-r from-sky-950 to-sky-400 inline-block bg-clip-text text-transparent">
					AI Check
				</h2>
				<p className="text-xl font-semibold text-sky-950">for biometrics</p>
			</div>
			<div className="flex-1">
				<h2 className="text-3xl font-bold  bg-gradient-to-r from-sky-950 to-sky-400 inline-block bg-clip-text text-transparent">
					Download
				</h2>
				<p className="text-xl font-semibold text-sky-950">JPG and PDF</p>
			</div>
		</section>
	);
};
