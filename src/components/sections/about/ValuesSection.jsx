import Image from "next/image";
import { Shield, Zap, Award, Heart, Users, Star } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our operations, ensuring transparency, honesty, and accountability in everything we do.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
      alt: "Team standing together to represent integrity"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in healthcare, investing in research and development to create groundbreaking solutions.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80",
      alt: "Doctor reviewing digital healthcare innovation"
    },
    {
      icon: Award,
      title: "Quality",
      description: "We are committed to delivering products and services of the highest quality, ensuring safety and efficacy for all our customers.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1920&q=80",
      alt: "Healthcare professionals representing quality standards"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach healthcare with empathy, understanding that behind every product is a patient whose life we aim to improve.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1920&q=80",
      alt: "Compassionate healthcare environment"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from product development to customer service and beyond.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
      alt: "Professional team reflecting excellence"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnership, working together with healthcare professionals and communities to achieve better outcomes.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80",
      alt: "Group collaboration in a healthcare setting"
    }
  ];

  return (
    <section id="values" className="bg-black">
      {values.map((value, index) => {
        const Icon = value.icon;
        return (
          <article key={value.title} className="relative min-h-screen flex items-center overflow-hidden">
            <Image
              src={value.image}
              alt={value.alt}
              fill
              className="object-cover"
              quality={75}
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 container mx-auto flex min-h-screen items-center px-4 py-16">
              <div className="w-full max-w-4xl rounded-2xl border border-white/25 bg-black/30 p-6 text-center text-white backdrop-blur-sm md:p-10">
                <span className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide uppercase">
                  {index === 0 ? "Our Core Values" : `Core Value ${index + 1}`}
                </span>

                <h2 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  {value.title}
                </h2>

                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-xl">
                  {value.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

