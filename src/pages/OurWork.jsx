import OptimizedImage from '../components/OptimizedImage';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import Image1 from "../assets/OurWorkPagePhotos/10.webp";
import Image2 from "../assets/OurWorkPagePhotos/3.webp";
import Image3 from "../assets/OurWorkPagePhotos/11.webp";
import Image4 from "../assets/OurWorkPagePhotos/2.webp";
import Image5 from "../assets/OurWorkPagePhotos/12.webp";
import Image6 from "../assets/OurWorkPagePhotos/15.webp";
import Image7 from "../assets/OurWorkPagePhotos/14.webp";
import Image8 from "../assets/OurWorkPagePhotos/4.webp";
import Image9 from "../assets/OurWorkPagePhotos/16.webp";
import Image10 from "../assets/OurWorkPagePhotos/38.webp";

import '../pages/OurWork.css';
import { setMeta } from "../utils/meta";

const projects = [
  {
    title: "Wedding Celebration",
    description: "Celebrate a beautiful union with an enchanting wedding ceremony and a joyful reception filled with love, laughter, and lifelong memories.",
    image: Image1,
  },
  {
    title: "Haldi Harmony",
    description: "Promises a harmonious and joy-filled ceremony, reflecting the essence of bringing families together.",
    image: Image5,
  },
  {
    title: "Birthday Party",
    description: "A fun-filled birthday party for kids.",
    image: Image3,
  },
  {
    title: "Engagement Celebration",
    description: "A joyous occasion where love is declared and future vows are anticipated.",
    image: Image2,
  },
  {
    title: "Happily Ever Planning",
    description: "Dedicated to crafting joyful and memorable wedding days that last a lifetime. Our expert team meticulously plans every detail, ensuring a seamless and stress-free experience.",
    image: Image4,
  },
  {
    title: "Artistic Event Arrangements",
    description: "A day of vibrant festivities, showcasing student talents.",
    image: Image6,
  },
  {
    title: "Luxurious Ambiance Creations",
    description: "Our team ensures that every detail of your event's decor exudes elegance and style. With a passion for perfection and a keen eye for design, we create stunning settings that captivate and inspire.",
    image: Image8,
  },
  {
    title: "Destination Wedding",
    description: "Excitement of celebrating a marriage in a special destination away from home.",
    image: Image7,
  },
  {
    title: "Festive Reception",
    description: "An evening of celebration filled with lively entertainment.",
    image: Image9,
  },
  {
    title: "Sound And Lightings",
    description: "The main spice to setting the mood and atmosphere for any event.",
    image: Image10,
  },
];

const LampContainer = ({ children, className }) => (
  <div
    className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 ${className} pt-5`}
    style={{ paddingTop: "80px", marginTop: "60px" }} 
  >
    <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
      <motion.div
        initial={{ opacity: 0.5, width: "20rem" }}
        whileInView={{ opacity: 1, width: "25rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto right-1/2 h-56 overflow-visible w-[25rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      >
        <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, width: "20rem" }}
        whileInView={{ opacity: 1, width: "25rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto left-1/2 h-56 w-[25rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
      >
        <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
      </motion.div>
      <div className="absolute inset-auto z-50 h-0.5 w-[25rem] -translate-y-[7rem] bg-cyan-400"></div>
    </div>
    <div className="relative z-50 flex -translate-y-56 flex-col items-center px-5">
      {children}
    </div>
  </div>
);

const OurWork = () => {
  useEffect(() => {
    setMeta({
      title: "Our Work | Golden Eventz Portfolio",
      description:
        "Browse Golden Eventz portfolio: luxury weddings, haldi, engagements, birthday parties, corporate shows, destination weddings, decor, sound & lighting across Shimoga, Bangalore, Mysore, and Mangalore.",
      keywords: [
        "Golden Eventz portfolio",
        "Shimoga wedding decor examples",
        "corporate event gallery",
        "destination wedding planners work",
        "sound and lighting projects",
        "haldi and sangeeth events",
      ],
    });
  }, []);

  return (
    <div className="our-work-page min-h-screen bg-gray-100 p-8 pt-1">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Your Vision <br />Our Creation
        </motion.h1>
      </LampContainer>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col mb-4">
              <div className="card h-100">
                <OptimizedImage src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
