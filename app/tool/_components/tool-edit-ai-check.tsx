import { toast } from "sonner";
import { FormEvent, useState } from "react";
import { BounceLoader } from "react-spinners";
import { LucideSparkles } from "lucide-react";

import { checkBiometricalPicture } from "@/actions/aiAction";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { useAi } from "@/hooks/useAi";
import { useCrop } from "@/hooks/useCrop";
import { Input } from "@/components/ui/input";

export const ToolEditAiCheck = () => {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const { croppedPictureBase64 } = useCrop();
	const { message, setMessage, setApproved } = useAi();

	const onCheckBiometricsPicture = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setOpen(false);
		setLoading(true);

		const accessCode = (e.currentTarget.elements.namedItem("accessCode") as HTMLInputElement).value;

		try {
			const reply = await checkBiometricalPicture(croppedPictureBase64, accessCode);
			setMessage(reply.message);
			setApproved(reply.approved);
		} catch (e) {
			const error = e as Error;
			console.error(error);
			toast.error(error?.message || "Something went wrong. Please try again later.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="h-full flex flex-col justify-between">
			<h2 className="text-lg font-semibold mb-4">AI Check 🔒</h2>
			<div className=" w-full h-full flex flex-col justify-center gap-2">
				<div className="flex-1 flex flex-col md:flex-row gap-2 items-center md:items-start justify-center">
					{loading && <BounceLoader color="#0ea5e9" />}

					{!loading && (
						<p className="max-w-3/4 text-sm hyphens-auto">
							{message ? (
								message
							) : (
								<>
									This premium feature utilizes artificial intelligence to verify the biometric accuracy of your cropped image.
									<br />
									<br />
									<span className="text-xs italic">While the AI provides helpful tips, it cannot ensure 100% accuracy.</span>
								</>
							)}
						</p>
					)}
				</div>
				<Dialog
					open={open}
					onOpenChange={setOpen}
				>
					<DialogTrigger asChild>
						<Button
							variant="ai"
							className="mx-auto md:w-auto px-6 md:px-10 text-lg"
							disabled={!!!croppedPictureBase64 || loading || !!message}
						>
							<LucideSparkles className="w-5 h-5 md:w-6 md:h-6 inline-block mr-1" />
							Check Biometrics
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px] rounded-xl bg-sky-100">
						<DialogHeader>
							<DialogTitle>AI Check</DialogTitle>
							<DialogDescription>Access this beta feature by entering the code.</DialogDescription>
						</DialogHeader>
						<form
							onSubmit={onCheckBiometricsPicture}
							className="flex flex-col justify-between gap-8 mt-4"
						>
							<Input
								type="password"
								name="accessCode"
								placeholder="Access Code"
								className="bg-sky-50 border-2 border-sky-600 rounded-xl text-sm outline-none focus:ring-sky-600"
							/>
							<DialogFooter>
								<Button type="submit">Check code</Button>
							</DialogFooter>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};
