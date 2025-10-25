import React, { useEffect, useRef } from "react";
import { projects } from "../../data/projectCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

const ProjectDesplay = () => {
  const comp = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(comp);
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: comp.current,
        start: "top 30%",
        // markers: true,
      },
    });

    t1.from(q([".text1", ".text2", ".projectCard"]), {
      y: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section
      id="Work"
      ref={comp}
      className="project w-full min-h-screen bg-secondary 
                 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 2xl:px-60 
                 py-16"
    >
      {/* Header text */}
      <div>
        <h1 className="text1 font-roboto font-bold tracking-tighter text-zinc-900
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       leading-tight">
          Selected Projects & Case Studies Bringing Ideas to Life Through Code &
          Design
        </h1>

        <p className="text2 font-inter tracking-tighter text-zinc-700 font-semibold 
                      w-full sm:w-2/3 md:w-1/2 lg:w-1/3 
                      leading-snug mt-6 text-base sm:text-lg md:text-xl">
          Crafting Engaging Interfaces with Precision and Performance
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-10 relative z-10 w-full">
        <Carousel>
          <CarouselContent className="flex justify-start items-stretch w-full">
            {projects.map((val, ind) => (
              <CarouselItem
                key={ind}
                className="basis-full sm:basis-1/2 lg:basis-1/3 px-2 md:px-3"
              >
                <ProjectCard val={val} ind={ind} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectDesplay;
