import { Helmet } from "react-helmet";
import AboutUsIntro from "../components/ui/about/AboutUsIntro";
import ContactInfo from "../components/ui/about/ContactInfo";
import Hero from "../components/ui/about/Hero";
import Team from "../components/ui/about/Team";
import Testimonial from "../components/ui/about/Testimonial";

const AboutUsPage = () => {
  return (
    <div className="">
       <Helmet>
        <title>Fitness Club | About</title>
      </Helmet>
      <Hero title={"About Us"} locationFrom={'Home / About Us'}/>
      <AboutUsIntro/>
      <Team/>
      <Testimonial/>
      <ContactInfo/>
    </div>
  );
};

export default AboutUsPage;
