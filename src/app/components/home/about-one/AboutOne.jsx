import Thumb2 from "@/public/images/v2/contentthumb2.png";
import Icon6 from "@/public/images/v2/icon6.png";
import Icon7 from "@/public/images/v2/icon7.png";
import Icon8 from "@/public/images/v2/icon8.png";
import Image from "next/image";
import FadeInRight from "@/src/app/components/animation/FadeInRight";
import TextSplitFadeIn from "@/src/app/components/animation/TextSplitFadeIn";

function AboutOne() {
	return (
		<section className="section sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="about-thumb ml-50">
							<Image src={Thumb2} alt="Thumb2" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content">
							<div className="tg-heading-subheading ">
								<h2 className="tac">
									<TextSplitFadeIn> Effortless Event Management, Anytime</TextSplitFadeIn>
								</h2>
							</div>
							<p className="tac">
								Manage your event on the go with VISITRACK’s mobile app, offering seamless registration, tracking, and analytics anytime, anywhere.
							</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon6} alt="Icon6" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>All-in-One Event Management</h4>
										<p>
											Streamline registration, badge printing, and tracking in one platform.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon7} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Data Security</h4>
										<p>
											Ensure your event data is protected with encryption and GDPR compliance.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon8} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Instant Support</h4>
										<p>
											Get the help you need quickly to keep your event running smoothly.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutOne;
