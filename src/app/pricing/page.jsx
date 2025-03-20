import AutoSlider from "@/src/app/components/common/auto-slider";
import BreadCrumb from "@/src/app/components/common/Breadcrumb";
import Faq from "@/src/app/components/home/faq";
import Testimonials from "@/src/app/components/home/testimonials";
import PricePlan from "@/src/app/components/price/price-plan";
export const metadata = {
	title: "Pricing || Visitrack",
	description: "",
};
function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" />
			<PricePlan />
			<AutoSlider />
			<Testimonials />
			<Faq />
		</>
	);
}

export default Pricing;
