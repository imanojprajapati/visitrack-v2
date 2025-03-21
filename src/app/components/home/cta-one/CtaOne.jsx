import Thumb2 from "@/public/images/v2/contentthumb2.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "@/src/app/components/animation/FadeInLeft";
import FadeInUp from "@/src/app/components/animation/FadeInUp";
import TextSplitFadeIn from "@/src/app/components/animation/TextSplitFadeIn";

function CtaOne() {
	return (
		<section className="section sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="about-thumb mr-50 ">
							<Image src={Thumb2} alt="Thumbs 2" />
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading ">
								<h2 className="all-heading-color">
									<TextSplitFadeIn>
										Streamline event management with VISITRACK.
									</TextSplitFadeIn>
								</h2>
							</div>
							<p className="all-para-color">
								Experience hassle-free event management with VISITRACK. From seamless visitor registration to real-time tracking, we provide everything you need to enhance attendee experience and boost event security.
							</p>
							<p className="all-para-color">
								Whether it’s a corporate conference or a trade show, VISITRACK offers robust analytics, badge printing, and live insights, making it the ultimate solution for modern event organizers.
							</p>
							<FadeInUp className="extra-mt">
								<Link className="sofax-default-btn pill" data-text="Get started now" href="/sign-up">
									<span className="button-wraper">Get started now</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaOne;
