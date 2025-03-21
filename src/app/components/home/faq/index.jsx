import TextSplitFadeIn from "@/src/app/components/animation/TextSplitFadeIn";
import FaqAccordion from "@/src/app/components/home/faq/FaqAccordion";

function Faq() {
	return (
		<section className="section sofax-section-padding bg-light" id="faq">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading">
						<h2 className="all-heading-color">
							<TextSplitFadeIn> If you want to know anything asked us </TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="sofax-accordion-wrap1 sofax-accordion-wrap2">
					<div className="sofax-accordion-section-wrapper">
						<FaqAccordion />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
