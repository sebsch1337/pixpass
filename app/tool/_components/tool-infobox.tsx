export const ToolInfoBox = () => {
	return (
		<section className="rounded-xl bg-sky-200 flex flex-col h-full p-8">
			<h2 className="text-lg font-semibold mb-2">Requirements</h2>
			<div className="text-sm">
				<p>Our requirements for your picture are:</p>
				<ul className="ml-8 list-disc">
					<li>High resolution</li>
					<li>Portrait or square dimensions</li>
					<li>File type: JPG, PNG or WEBP</li>
				</ul>
				<br />
				<p>Please check the exact requirements for your purpose.</p>
			</div>
		</section>
	);
};
