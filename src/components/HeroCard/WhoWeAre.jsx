import OptimizedImage from '../OptimizedImage';
import "./WhoWeAre.css";
import { CheckCircle2 } from "lucide-react";
import WhoWeAre1 from "../../assets/WhoWeAre1.webp";
import WhoWeAre2 from "../../assets/WhoWeAre2.webp";
import WhoWeAre4 from "../../assets/WhoWeAre4.webp";


const gallery = [
  {
    title: "Wedding Grandeur",
    desc: "Custom rituals, bridal makeup, photo+video, and luxury floral stages.",
    image: WhoWeAre4,
    tag: "Weddings & Private",
    items: [
      "Bridal makeup & styling",
      "Photo + video storytelling",
      "Floral stage design",
      "Ritual flow planning",
    ],
  },
  {
    title: "Corporate & Launches",
    desc: "Executive staging, AV, guest flow, and hospitality managed end-to-end.",
    image: WhoWeAre2,
    tag: "Corporate & Launches",
    items: [
      "Executive staging & AV",
      "Guest hospitality",
      "MC & program flow",
      "Launch decor",
    ],
  },
  {
    title: "Music & Sangeeth Nights",
    desc: "Live bands, sangeeth choreography, immersive sound and lighting.",
    image: WhoWeAre1,
    tag: "Music & Sangeeth",
    items: [
      "Live bands & DJs",
      "Sangeeth choreography",
      "Immersive lighting",
      "Pro sound systems",
    ],
  },
];

const WhoWeAre = () => {
  return (
    <section className="relative overflow-hidden bg-[#030303] text-white py-20 md:py-24">
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-10 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight hero-font">
            Who We Are
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">
            Golden eventz management from Shimoga to the metros—luxury decor,
            flawless planning, and on-ground execution for weddings, corporate
            gatherings, music nights, and private celebrations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm group aspect-square focus-within:ring-2 focus-within:ring-rose-300 transition-shadow"
            >
              <OptimizedImage
                src={item.image}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/15" />
              <div className="relative p-4 md:p-5 flex flex-col gap-3 h-full">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-[6px] text-[10px] uppercase tracking-[0.12em] text-white/80 border border-white/15">
                  {item.tag}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-semibold hero-font">{item.title}</h3>
                  <p className="text-xs md:text-sm text-white/80 leading-relaxed">{item.desc}</p>
                </div>
                <ul className="mt-auto space-y-2 text-sm md:text-base text-white/95">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-center gap-2 leading-tight">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-rose-200 shrink-0" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
