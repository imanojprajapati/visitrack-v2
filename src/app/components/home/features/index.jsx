import image1 from "@/public/images/service/qr-code.png";
import image2 from "@/public/images/service/notificaiton.png";
import image3 from "@/public/images/service/online-registration.png";
import image4 from "@/public/images/service/account-management.png";
import image5 from "@/public/images/service/achieve.png";
import Phone from "@/public/images/v2/phone.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/src/app/components/animation/FadeInStaggerTwo";
import FadeInUp from "@/src/app/components/animation/FadeInUp";
import TextSplitFadeIn from "@/src/app/components/animation/TextSplitFadeIn";

function Features() {
	return ( 
		<section className=" section sofax-section-padding" id="features">
			<div className="sofax-section-title center">
				<div className="tg-heading-subheading ">
					<h2 className="all-heading-color">
						<TextSplitFadeIn>Your Event, Simplified with Seamless Features</TextSplitFadeIn>
					</h2>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="row">
						<FadeInStaggerTwo className="col-lg-4 col-md-12">
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={image2} width={55} height={55} alt="features" />
								</div>
								<div className="sofax-features-content">
									<h4 className="all-heading-color">Instant Notifications</h4>
									<p className="all-para-color">
									Stay informed with instant notifications for real-time updates and event reminders.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={image3} width={55} height={55} alt="Feature" />
								</div>
								<div className="sofax-features-content">
									<h4 className="all-heading-color">Real-time Registration</h4>
									<p className="all-para-color">
									Experience seamless check-ins with real-time registration for a smoother event entry.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
						</FadeInStaggerTwo>
						<div className="col-lg-4 col-md-12">
							<FadeInUp className="sofax-features-box features-v2 position-relative">
								<div className="sofax-features-icon">
									<Image src={image1} width={55} height={55} alt="Features Icon" />
								</div>
								<div className="sofax-features-content">
									<h4 className="all-heading-color">QR Code</h4>
									<p className="all-para-color">
									Streamline event access with seamless QR code for faster, contactless entry.
									</p>
								</div>
								<div className="sofax-features-thumb">
									<Image src={Phone} alt="Phone" />
								</div>
							</FadeInUp>
						</div>
						<FadeInStaggerTwo className="col-lg-4 col-md-12">
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={image4} width={55} height={55} alt="Feature Ion" />
								</div>
								<div className="sofax-features-content">
									<h4 className="all-heading-color">Registration Management</h4>
									<p className="all-para-color">
									Effortlessly manage attendee registrations for a smooth and organized event experience.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
							<div className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={image5} width={55} height={55} alt="Icon 5" />
								</div>
								<div className="sofax-features-content">
									<h4 className="all-heading-color">Instant Badge Printing</h4>
									<p className="all-para-color">
									Quick and efficient instant badge printing for fast, professional event check-ins.
									</p>
								</div>
							</div>
						</FadeInStaggerTwo>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
