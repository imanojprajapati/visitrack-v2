import AutoSlider from "@/src/app/components/common/auto-slider";
import BreadCrumb from "@/src/app/components/common/Breadcrumb";
import Faq from "@/src/app/components/home/faq";
import About from "@/src/app/components/features/about";
import Services from "@/src/app/components/features/feature/index";
export const metadata = {
	title: "Features || Visitrack",
	description: "",
};
function Features() {
	return (
		<>
			<BreadCrumb title="Features" />
			<Services />
			<AutoSlider />
			<About />
			<Faq />
		</>
	);
}

export default Features;
