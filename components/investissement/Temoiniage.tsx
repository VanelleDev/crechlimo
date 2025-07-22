"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TestimonialProps {
  title: string;
  name: string;
  role: string;
  imageSrc: string;
}

const TestimonialCard = ({ title, name, role, imageSrc, isActive }: TestimonialProps & { isActive?: boolean }) => (
  <div className={`relative bg-white border rounded-lg shadow-md p-6 w-[400px] ${isActive ? 'border-[#1227E2]' : 'border-white'} transition-colors duration-300`}>
      
  <img
    src="/guillemet.png" 
    alt="Décoration"
    width={48}
    height={48}
    className="absolute top-0 left-0 w-12 h-12 -translate-x-1 -translate-y-1/2"
  />
    
    <p className="text-[#000000] mb-6 text-sm">{title}</p>
    <div className="flex items-center gap-4">
      <Image
        src={imageSrc}
        alt={name}
        width={51}
        height={38}
        className="rounded-full"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Temoiniage = () => {
  const testimonials = [
    {
      title:
        "Je connais le directeur de l'agence depuis presque 20 ans. Leur professionnalisme me fait entièrement confiance de leur confier la gestion de mon appartement. Je les recommande vivement.",
      name: "Jacqueline M.",
      role: "Propriétaire à Bordeaux",
      imageSrc: "/fille.jpg", 
    },
    {
      title:
        "Nous avons fait appel à CrechImmo pour la rénovation de notre crèche. Le résultat est au-delà de nos attentes, les enfants adorent leur nouveau cadre.",
      name: "Jean L.",
      role: "Directeur de crèche",
      imageSrc: "/garconblanc.jpg", 
    },
    {
      title:
        "En tant que propriétaire, je suis très satisfait des prestations des responsables de location de mon appartement. Le taux d’occupation réalisé est de 90 %. Je vous conseille CrechImmo.",
      name: "Jean-Charles D.",
      role: "Propriétaire à Avoriaz",
      imageSrc: "/hommenoir.jpg", 
    },
  ];

  const [current, setCurrent] = useState(1); // Commence au centre
  const testimonialCount = testimonials.length;

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialCount);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonialCount]);

  // affichons les trois temoignages en fonction de celui qui est au centre et des deux autres au bords
  const getVisibleTestimonials = () => {
    if (testimonialCount <= 3) return testimonials.map((t, i) => ({...t, isActive: i === current}));
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (current + i + testimonialCount) % testimonialCount;
      visible.push({ ...testimonials[idx], isActive: i === 0 });
    }
    return visible;
  };

  return (
    <section className="h-[728px] mx-auto px-[80px] pt-[80px]">
      <h2 className="text-center text-2xl font-bold mb-12">
        Témoignages de nos clients
      </h2>
      <div className="flex justify-between gap-6 min-h-[320px]">
        {getVisibleTestimonials().map((item, index) => (
          <TestimonialCard key={index + current} {...item} />
        ))}
      </div>
      {/* gerons la pargination a l'aide de chaque temoignages  */}
      <div className="flex items-center justify-center gap-2 mt-8 mx-auto w-[180px] h-[20px]">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`cursor-pointer transition-all duration-300 ${
              idx === current
                ? 'w-16 h-3 bg-[#1227E2] rounded-full'
                : 'w-3 h-3 bg-[#9DA6F7] rounded-full'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Temoiniage;
