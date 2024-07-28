const PrivacyPage = () => {
	return (
		<div>
			<h1 className="text-3xl mb-2 font-semibold">Privacy Policy</h1>
			<h2 className="text-xl mb-4 italic">Last Updated: July 28, 2024</h2>
			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
				<p className="mb-2">
					<strong>a. Data You Provide</strong>: We do not collect the texts and images you enter and upload into the PixPass app.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
				<p>
					The data provided is solely for the purpose of providing you with the services of PixPass. We do not use your data for
					any other purposes, such as marketing or data mining.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
				<p className="mb-2">
					<strong>a. Third-Party Service Providers</strong>: We use third-party services, including OpenAI for biometrical checks,
					which are necessary to operate our app.
				</p>
				<p>
					<strong>b. Legal Requirements</strong>: We may disclose your information if required by law or if we believe in good
					faith that such action is necessary to comply with legal processes, to protect our rights or the safety of our users or
					the public.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">4. User Rights</h2>
				<p>
					You have the right to access, rectify, and delete your data. For any privacy-related concerns or to exercise these
					rights, please contact us at{" "}
					<a
						href="mailto:pixpass-privacy@scherbes.de"
						className="text-blue-600 underline"
					>
						pixpass-privacy@scherbes.de
					</a>
					.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
				<p>
					We rely on the security measures provided by OpenAI to protect your data temporarily stored on their servers. However,
					please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">6. International Data Transfers</h2>
				<p>Our hosting platform, Vercel, uses CDNs and implements measures to protect data during international transfers.</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
				<p>PixPass does not specifically target or collect information from children. We do not verify the age of our users.</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
				<p>
					We may update this privacy policy from time to time. Please read the privacy policy for any updates before using it.
				</p>
			</section>

			<section className="mt-6">
				<h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
				<p>
					If you have any questions or concerns about this privacy policy, please contact us at{" "}
					<a
						href="mailto:pixpass-privacy@scherbes.de"
						className="text-blue-600 underline"
					>
						pixpass-privacy@scherbes.de
					</a>
					.
				</p>
			</section>
		</div>
	);
};

export default PrivacyPage;
