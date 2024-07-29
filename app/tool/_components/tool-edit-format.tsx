import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { pictureFormats, printFormats } from "@/data/formats";

import { useFormats } from "@/hooks/useFormats";

import { calculateFit } from "@/utils/pictureCalcUtils";

export const ToolEditFormat = () => {
	const { pictureFormat, printFormat, setPictureFormat, setPrintFormat } = useFormats();

	const handlePictureFormatChange = (e: string) => {
		const selectedPictureFormat = pictureFormats.find((format) => format.id === e);
		setPictureFormat(selectedPictureFormat || null);
	};

	const handlePrintFormatChange = (e: string) => {
		const selectedPrintFormat = printFormats.find((format) => format.id === e);
		setPrintFormat(selectedPrintFormat || null);
	};

	return (
		<div className="flex-1 flex flex-col">
			<h2 className="text-lg font-semibold mb-4">Select Dimensions</h2>
			<div className="flex gap-4">
				<div className="flex-1">
					<h3 className="text-md font-semibold mb-1">Picture Format</h3>
					<Select
						onValueChange={handlePictureFormatChange}
						defaultValue={pictureFormat?.id}
					>
						<SelectTrigger className="bg-sky-50 border-2 border-sky-600 rounded-xl px-2 py-2 text-sm focus:ring-0 mb-2">
							<SelectValue placeholder="Picture format" />
						</SelectTrigger>
						<SelectContent className="bg-sky-50 border-2 border-sky-600 rounded-xl text-sm">
							<SelectGroup>
								{pictureFormats.map((format) => (
									<SelectItem
										key={format.id}
										value={format.id}
									>
										{format.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex-1">
					<h3 className="text-md font-semibold mb-1">Print Format</h3>
					<Select
						onValueChange={handlePrintFormatChange}
						defaultValue={printFormat?.id}
					>
						<SelectTrigger className="bg-sky-50 border-2 border-sky-600 rounded-xl px-2 py-2 w-full text-sm focus:ring-0 mb-2">
							<SelectValue placeholder="Print format" />
						</SelectTrigger>
						<SelectContent className="bg-sky-50 border-2 border-sky-600 rounded-xl w-full text-sm">
							<SelectGroup>
								{printFormats.map((format) => {
									return (
										<SelectItem
											key={format.id}
											value={format.id}
										>
											{format.name}
										</SelectItem>
									);
								})}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="mt-2 flex flex-col gap-2">
				<p className="text-sm">
					<span className="font-semibold">Picture Format: </span>Adjust the image according to the requirements of the desired
					service.
				</p>
				<p className="text-sm">
					<span className="font-semibold">Print Format: </span>Select the dimensions of the print paper.
				</p>
				<p className="text-sm">
					You will get <span className="font-semibold">{calculateFit(pictureFormat, printFormat)}</span> pictures.
				</p>
			</div>
		</div>
	);
};
