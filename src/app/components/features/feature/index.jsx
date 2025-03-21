import image1 from "@/public/images/service/qr-code.png";
import image2 from "@/public/images/service/notification.png";
import image3 from "@/public/images/service/online-registration.png";
import image4 from "@/public/images/service/account-management.png";
import image5 from "@/public/images/service/achieve.png";
import image6 from "@/public/images/service/checked.png";
import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import FeaturesCard from "@/src/app/components/features/feature/FeaturesCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "QR Code",
		description:
			"Streamline event access with seamless QR code for faster, contactless entry.",
		icon: image1,
	},
	{
		id: crypto.randomUUID(),
		title: "Instant Notifications",
		description:
			"Stay informed with instant notifications for real-time updates and event reminders.",
		icon: image2,
	},
	{
		id: crypto.randomUUID(),
		title: "Real-time Registration",
		description: "Experience seamless check-ins with real-time registration for a smoother event entry.",
		icon: image3,
	},
	{
		id: crypto.randomUUID(),
		title: "Registration Management",
		description:
			"Effortlessly manage attendee registrations for a smooth and organized event experience.",
		icon: image4,
	},
	{
		id: crypto.randomUUID(),
		title: "Instant Badge Printing",
		description:
			"Quick and efficient instant badge printing for fast, professional event check-ins.",
		icon: image5,
	},
	{
		id: crypto.randomUUID(),
		title: "Smart Check-In",
		description:
			"Enhance event efficiency with smart check-in for faster, contactless entry.",
		icon: image6,
	},
];

function Feature() {
	return (
		<section className="sofax-section-padding">
			<div className="container">
				<div className="row">
					<div className="sofax-section-title center">
						<h2 className="all-heading-color">We deliver powerful features</h2>
					</div>
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<FeaturesCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Feature;
