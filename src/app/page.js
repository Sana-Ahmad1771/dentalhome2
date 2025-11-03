import Footer from "./common/Footer";
import Header from "./common/Header";
import AboutClinicVariant from "./components/home/AboutClinicVariant";
import BeforeAfterSection from "./components/home/BeforeAfterSection";
import DentalCareSectionVariant from "./components/home/DentalCareSection";
import ExperienceDentalSection from "./components/home/ExperinceDentalSection";
import HeroSliderVariant from "./components/home/HeroSliderVaraint";
import InfoSection from "./components/home/InfoSection";
import NextGenCleaning from "./components/home/NextGenCleaning";
import SmileCareSection from "./components/home/SmileCareSectionTwo";
import StatsSection from "./components/home/StatsSection";
import TeamSection from "./components/home/TeamSection";
import TestimonialSection from "./components/home/TestimonialSection";


const page = () => {
  return (
    <>
      <Header />
      <HeroSliderVariant />
      <SmileCareSection />
      <DentalCareSectionVariant />
      <AboutClinicVariant />
      <ExperienceDentalSection />
      <BeforeAfterSection />
      <NextGenCleaning />
      <InfoSection />
      <TeamSection />
      <TestimonialSection />
      <StatsSection />
      <Footer />
    </>
  );
};

export default page;
