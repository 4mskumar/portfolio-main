import React from "react";
import Index from "../components/NavBar/Index";
import Hero from "../components/HeroComp/Hero";
import MockupGallery from "../components/About/MockupGallery";
import ProjectDesplay from "../components/About/ProjectDesplay";
import Contact from "../components/About/Contact";
import FooterComp from "../components/Footer/FooterComp";
import { Link } from "react-scroll";
import { Globe } from "../components/magicui/globe";
import { SmoothCursor } from "../components/ui/smooth-cursor";
import { ProgressiveBlur } from "../components/ui/skiper-ui/skiper41";
import Starting from "../components/LoaderAnimation/Starting";

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <Index />
      {/* <Starting /> */}

      {/* <Globe /> */}
      {/* <SmoothCursor /> */}
      {/* <div className="w-full h-full z-[1000] top-0 left-0 fixed">
        <ProgressiveBlur className={"z-[100]"} position="top" backgroundColor="#ffffff" />
        <ProgressiveBlur className={"z-[100]"} position="bottom" backgroundColor="#ffffff" />
      </div> */}

      <Link
        to="Home"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      >
        <Hero />
      </Link>
      <Link
        to="About"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      >
        <MockupGallery />
      </Link>
      {/* <Link
        to="Work"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      > */}
      <ProjectDesplay />
      {/* </Link> */}
      <Link
        to="Contact"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      >
        <Contact />
      </Link>
      <FooterComp />
    </div>
  );
};

export default Home;
