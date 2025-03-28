import AboutOne from "./components/home/about-one/AboutOne";
import Counter from "./components/home/counter";
import CtaOne from "./components/home/cta-one/CtaOne";
import CtaTwo from "./components/home/cta-two/CtaTwo";
import Faq from "./components/home/faq";
import Features from "./components/home/features";
import Hero from "./components/home/hero";
import LogoSlider from "./components/home/logo-slider";
import Testimonials from "./components/home/testimonials";
import WhyChooseUs from "./components/home/why-choose-us/WhyChooseUs";


export default function Home() {
  return (
    <>
    <Hero/>
    <Counter/>
    <Features/>
    <CtaOne/>
    <AboutOne/>
    <WhyChooseUs/>
    <LogoSlider/>
    <Testimonials/>
    <Faq/>
    <CtaTwo/> 
    </> 
  );
}
