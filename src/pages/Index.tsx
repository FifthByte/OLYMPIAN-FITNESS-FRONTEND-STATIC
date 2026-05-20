import { Hero } from "../components/index/Hero";
import { About } from "../components/index/About";
import { Testimonials } from "../components/index/Testimonials";
import { Pricing } from "../components/index/Pricing";
import { Gallery } from "../components/index/Gallery";
import { Trainers } from "../components/index/Trainers";
import { Programs } from "../components/index/Programs";
import { BMI } from "../components/index/BMI";
import { CTA } from "../components/index/CTA";

const Index = () => {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Pricing />
      <Gallery />
      <Testimonials />
      <BMI />
      <CTA />
    </main>
  );
};

export default Index;
