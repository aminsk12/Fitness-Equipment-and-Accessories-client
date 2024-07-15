import { Helmet } from "react-helmet";
import AboutUsIntro from "../components/ui/about/AboutUsIntro";
import ContactInfo from "../components/ui/about/ContactInfo";
import Team from "../components/ui/about/Team";
import Testimonial from "../components/ui/about/Testimonial";
import banner from "../assets/img/b5.avif"

const AboutUsPage = () => {
  return (
    <div className="">
       <Helmet>
        <title>Fitness Club | About</title>
      </Helmet>
      <div
        className="hero min-h-96"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full space-y-10">
            <h1 className="mb-5 md:text-8xl text-4xl font-bold ">Welcome to Fitness Club About Us</h1>
            <p className=" mm:text-2xl">
              Your one-stop shop for premium gym equipment and accessories.
              Elevate your fitness journey with our top-quality products.
            </p>
            
          </div>
        </div>
      </div>
      <AboutUsIntro/>
      <Team/>
      <Testimonial/>
      <ContactInfo/>
    </div>
  );
};

export default AboutUsPage;
