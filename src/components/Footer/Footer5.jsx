import useNearViewport from '../../hooks/useNearViewport';
import "./Footer5.css";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import HeroBg from "../../assets/background-flip3.webp";

const footerBubbles = [
  { width: 520, height: 140, rotate: 12, gradient: "linear-gradient(90deg, rgba(99,102,241,0.15), transparent)", top: "10%", left: "-10%" },
  { width: 460, height: 120, rotate: -14, gradient: "linear-gradient(90deg, rgba(244,114,182,0.14), transparent)", top: "50%", right: "-8%" },
  { width: 320, height: 90, rotate: -6, gradient: "linear-gradient(90deg, rgba(124,58,237,0.12), transparent)", bottom: "18%", left: "4%" },
  { width: 240, height: 70, rotate: 20, gradient: "linear-gradient(90deg, rgba(251,191,36,0.14), transparent)", top: "30%", right: "14%" },
  { width: 200, height: 60, rotate: -18, gradient: "linear-gradient(90deg, rgba(34,211,238,0.14), transparent)", top: "6%", left: "18%" },
];

const Footer5 = () => {
  const { ref: backgroundRef, isNear } = useNearViewport();

  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
  };
  
  return (
    <div
      ref={backgroundRef}
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(88, 99, 191, 0.12), transparent 38%),
          radial-gradient(circle at 80% 25%, rgba(233, 118, 97, 0.12), transparent 32%),
          radial-gradient(circle at 50% 80%, rgba(143, 92, 220, 0.1), transparent 36%),
          linear-gradient(180deg, rgba(3, 3, 3, 0.95), rgba(3, 3, 3, 0.97))
          ${isNear ? `, url(${HeroBg})` : ""}
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {footerBubbles.map((shape, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              width: shape.width,
              height: shape.height,
              borderRadius: 9999,
              backgroundImage: shape.gradient,
              border: "2px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              transform: `rotate(${shape.rotate}deg)`,
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom,
            }}
          />
        ))}
      </div>
      <section className="max-w-[1200px] mx-auto py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="space-y-4 px-4">
            <h1 className="text-xl font-bold">Be Ready To Grow</h1>
            <p className="text-gray-400">
              Get exclusive <span className="font-bold text-white">best update</span> straight to your inbox.
            </p>
            <div className="flex items-center">
              <input
                className="py-2 px-3 flex-grow bg-black/30 border-2 border-gray-200/50 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                type="text"
                placeholder="Email"
              />
              <button className="bg-orange-500 hover:bg-orange-600 py-2 px-6 text-white">Ok</button>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4 px-4">
            <h1 className="text-xl font-bold">Important Links</h1>
            <ul className="space-y-2">
            <li className="cursor-pointer" onClick={scrollToTop}>
  Home
</li>
              <li className="cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/our-work">Our Work</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/Services">Services</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 px-4">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <HiLocationMarker />
                <p>Shimoga, Karnataka</p>
              </div>
              <div className="flex items-center gap-3">
                <MdMessage />
                <p>goldeneventmanagement.in@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MdCall />
                <p>+91 7411820612</p>
              </div>
            </div>
          </div>
        </div>

          {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-white/10 mt-6">
          <div>
            <span className="text-sm text-gray-400">&copy; 2024 Created by </span>
            <Tippy content="Abhiram is a Full Stack Developer passionate about creating impactful digital experiences.">
              <a href="https://wa.me/9880739285" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white cursor-pointer">
                @abhiram
              </a>
            </Tippy>
          </div>
          <div className="flex items-center gap-5 mt-4 sm:mt-0">
            <a href="https://www.instagram.com/goldeneventz.co/"><FaInstagram className="text-2xl" /></a>
            <a href="https://www.youtube.com/watch?v=SYgAXOGn5m4"><FaYoutube className="text-2xl" /></a>
            <a href="https://wa.me/7411820612?text=I'm%20interested%20to%20know%20more%20about%20Golden Eventz"><FaWhatsapp className="text-2xl" /></a>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Footer5;
