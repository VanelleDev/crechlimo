"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TestimonialProps {
  title: string;
  name: string;
  role: string;
  imageSrc: string;
}

const TestimonialCard = ({ 
  title, 
  name, 
  role, 
  imageSrc, 
  isActive 
}: TestimonialProps & { isActive?: boolean }) => (
  <div className={`relative bg-white border rounded-lg shadow-md px-4 w-[400px] h-[400px] flex flex-col justify-between
    ${isActive ? 'border-[#1227E2]' : 'border-white'} 
    transition-colors duration-300`}>
    
    <div>
      <img
        src="/guillemet.png" 
        alt="Décoration"
        width={48}
        height={38}
        className="absolute top-0 left-0 w-12 h-12 translate-x-5 -translate-y-1/2"
      />
      
      <p className="text-[#000000] text-sm leading-relaxed mt-6">
        {title}
      </p>
    </div>
    
    <div className="flex items-center gap-4 mt-4">
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
        "J'ai connu CrechImmo via les réseaux sociaux, et je suis très satisfait de leur accompagnement à l'investissement. Ça va faire maintenant 6 mois qu'ils gèrent mon bien divisé en 5 chambres. Et je reçois aujourd'hui sur ce dernier 910€ de rente mensuel. Suite à cette collaboration fructueuse, j'ai décidé de poursuivre avec eux sur un second investissement.",
      name: "Leonelle",
      role: "Propriétaire à Ritz - Orangis",
      imageSrc: "/fille.jpg",
    },
    {
      title:
        "Nous avons fait appel à CrechImmo pour la rénovation de notre crèche. Le résultat est au-delà de nos attentes, et les enfants adorent leur nouvel espace.",
      name: "Cassandra",
      role: "Directeur de crèche",
      imageSrc: "/garconblanc.jpg",
    },
    {
      title:
        "Merci à CrechImmo pour ce professionnalisme, j'ai pu acquérir ma maison avec tout leurs difficultés, avec leur conseil et accompagnement. Leurs travaux ont été réalisés par leur équipe et nous sommes très satisfait du résultat. Et les enfants sont contents de leur nouvel environnement. Merci...",
      name: "Blandine",
      role: "Propriétaire à Champs sur marne",
      imageSrc: "/hommenoir.jpg",
    },
  ];

  const [current, setCurrent] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialCount = testimonials.length;

  // Détection de la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialCount);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonialCount]);

  // Gestion de l'affichage responsive des témoignages
  const getVisibleTestimonials = () => {
    if (isMobile) {
      // Sur mobile, afficher seulement le témoignage actuel
      return [{ ...testimonials[current], isActive: true }];
    } else {
      // Sur desktop, afficher les 3 témoignages
      if (testimonialCount <= 3) return testimonials.map((t, i) => ({...t, isActive: i === current}));
      const visible = [];
      for (let i = -1; i <= 1; i++) {
        const idx = (current + i + testimonialCount) % testimonialCount;
        visible.push({ ...testimonials[idx], isActive: i === 0 });
      }
      return visible;
    }
  };

  return (
    <section className="mx-auto px-4 py-8 md:px-8 lg:px-20 lg:py-22">
      <h2 className="text-center text-2xl font-bold text-black mb-[78px]">
        Témoignages de nos clients
      </h2>
      
      {/* Container responsive pour les cartes */}
      <div className={`flex justify-center items-start gap-6 mb-[60px] ${isMobile ? 'overflow-x-hidden' : ''}`}>
        {getVisibleTestimonials().map((item, index) => (
          <TestimonialCard 
            key={isMobile ? current : index + current} 
            {...item} 
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mx-auto w-[180px] h-[20px]">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`cursor-pointer transition-all duration-300 ${
              idx === current
                ? 'w-16 h-3 bg-[#1227E2] rounded-full'
                : 'w-3 h-3 bg-[#9DA6F7] rounded-full'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Temoiniage;




// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// interface TestimonialProps {
//   title: string;
//   name: string;
//   role: string;
//   imageSrc: string;
// }

// const TestimonialCard = ({ 
//   title, 
//   name, 
//   role, 
//   imageSrc, 
//   isActive 
// }: TestimonialProps & { isActive?: boolean }) => (
//   <div className={`relative bg-white border rounded-lg shadow-md p-4 sm:p-6 
//     w-full sm:w-[320px] md:w-[350px] lg:w-[400px] 
//     flex-shrink-0 mx-2 sm:mx-0
//     ${isActive ? 'border-[#1227E2]' : 'border-white'} 
//     transition-colors duration-300`}>
    
//     <img
//       src="/guillemet.png" 
//       alt="Décoration"
//       width={48}
//       height={48}
//       className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 -translate-x-1 -translate-y-1/2"
//     />
    
//     <p className="text-[#000000] mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
//       {title}
//     </p>
    
//     <div className="flex items-center gap-3 sm:gap-4">
//       <Image
//         src={imageSrc}
//         alt={name}
//         width={51}
//         height={38}
//         className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
//       />
//       <div>
//         <p className="font-semibold text-sm sm:text-base">{name}</p>
//         <p className="text-xs sm:text-sm text-gray-500">{role}</p>
//       </div>
//     </div>
//   </div>
// );

// const Temoiniage = () => {
//   const testimonials = [
//     {
//       title:
//         "Je connais le directeur de l'agence depuis presque 20 ans. Leur professionnalisme me fait entièrement confiance de leur confier la gestion de mon appartement. Je les recommande vivement.",
//       name: "Jacqueline M.",
//       role: "Propriétaire à Bordeaux",
//       imageSrc: "/fille.jpg",
//     },
//     {
//       title:
//         "Nous avons fait appel à CrechImmo pour la rénovation de notre crèche. Le résultat est au-delà de nos attentes, les enfants adorent leur nouveau cadre.",
//       name: "Jean L.",
//       role: "Directeur de crèche",
//       imageSrc: "/garconblanc.jpg",
//     },
//     {
//       title:
//         "En tant que propriétaire, je suis très satisfait des prestations des responsables de location de mon appartement. Le taux d'occupation réalisé est de 90 %. Je vous conseille CrechImmo.",
//       name: "Jean-Charles D.",
//       role: "Propriétaire à Avoriaz",
//       imageSrc: "/hommenoir.jpg",
//     },
//   ];

//   const [current, setCurrent] = useState(1);
//   const [isMobile, setIsMobile] = useState(false);
//   const testimonialCount = testimonials.length;

//   // Détection de la taille d'écran
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Défilement automatique
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonialCount);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [testimonialCount]);

//   // Gestion de l'affichage responsive des témoignages
//   const getVisibleTestimonials = () => {
//     if (isMobile) {
//       // Sur mobile, afficher seulement le témoignage actuel
//       return [{ ...testimonials[current], isActive: true }];
//     } else {
//       // Sur desktop, afficher les 3 témoignages
//       if (testimonialCount <= 3) return testimonials.map((t, i) => ({...t, isActive: i === current}));
//       const visible = [];
//       for (let i = -1; i <= 1; i++) {
//         const idx = (current + i + testimonialCount) % testimonialCount;
//         visible.push({ ...testimonials[idx], isActive: i === 0 });
//       }
//       return visible;
//     }
//   };

//   return (
//     <section className="h-auto min-h-[500px] sm:min-h-[600px] lg:h-[728px] mx-auto px-4 py-8 md:px-8 lg:px-20 lg:py-22">
//       <h2 className="text-center text-xl sm:text-2xl font-bold mb-8 sm:mb-12 px-4">
//         Témoignages de nos clients
//       </h2>
      
//       {/* Container responsive pour les cartes */}
//       <div className={`
//         flex justify-center items-start gap-2 sm:gap-4 lg:gap-6 
//         min-h-[280px] sm:min-h-[320px] lg:min-h-[320px]
//         ${isMobile ? 'px-4' : 'px-0'}
//       `}>
//         {getVisibleTestimonials().map((item, index) => (
//           <TestimonialCard 
//             key={isMobile ? current : index + current} 
//             {...item} 
//           />
//         ))}
//       </div>

//       {/* Pagination responsive */}
//       <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 mx-auto w-auto max-w-[180px] h-[20px]">
//         {testimonials.map((_, idx) => (
//           <span
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`cursor-pointer transition-all duration-300 ${
//               idx === current
//                 ? 'w-12 sm:w-16 h-2 sm:h-3 bg-[#1227E2] rounded-full'
//                 : 'w-2 sm:w-3 h-2 sm:h-3 bg-[#9DA6F7] rounded-full'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Temoiniage;




// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// interface TestimonialProps {
//   title: string;
//   name: string;
//   role: string;
//   imageSrc: string;
// }

// const TestimonialCard = ({ title, name, role, imageSrc, isActive }: TestimonialProps & { isActive?: boolean }) => (
//   <div className={`relative bg-white border rounded-lg shadow-md p-6 w-[400px] ${isActive ? 'border-[#1227E2]' : 'border-white'} transition-colors duration-300`}>
      
//   <img
//     src="/guillemet.png" 
//     alt="Décoration"
//     width={48}
//     height={48}
//     className="absolute top-0 left-0 w-12 h-12 -translate-x-1 -translate-y-1/2"
//   />
    
//     <p className="text-[#000000] mb-6 text-sm">{title}</p>
//     <div className="flex items-center gap-4">
//       <Image
//         src={imageSrc}
//         alt={name}
//         width={51}
//         height={38}
//         className="rounded-full"
//       />
//       <div>
//         <p className="font-semibold">{name}</p>
//         <p className="text-sm text-gray-500">{role}</p>
//       </div>
//     </div>
//   </div>
// );

// const Temoiniage = () => {
//   const testimonials = [
//     {
//       title:
//         "Je connais le directeur de l'agence depuis presque 20 ans. Leur professionnalisme me fait entièrement confiance de leur confier la gestion de mon appartement. Je les recommande vivement.",
//       name: "Jacqueline M.",
//       role: "Propriétaire à Bordeaux",
//       imageSrc: "/fille.jpg", 
//     },
//     {
//       title:
//         "Nous avons fait appel à CrechImmo pour la rénovation de notre crèche. Le résultat est au-delà de nos attentes, les enfants adorent leur nouveau cadre.",
//       name: "Jean L.",
//       role: "Directeur de crèche",
//       imageSrc: "/garconblanc.jpg", 
//     },
//     {
//       title:
//         "En tant que propriétaire, je suis très satisfait des prestations des responsables de location de mon appartement. Le taux d’occupation réalisé est de 90 %. Je vous conseille CrechImmo.",
//       name: "Jean-Charles D.",
//       role: "Propriétaire à Avoriaz",
//       imageSrc: "/hommenoir.jpg", 
//     },
//   ];

//   const [current, setCurrent] = useState(1); // Commence au centre
//   const testimonialCount = testimonials.length;

//   // Défilement automatique
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonialCount);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [testimonialCount]);

//   // affichons les trois temoignages en fonction de celui qui est au centre et des deux autres au bords
//   const getVisibleTestimonials = () => {
//     if (testimonialCount <= 3) return testimonials.map((t, i) => ({...t, isActive: i === current}));
//     const visible = [];
//     for (let i = -1; i <= 1; i++) {
//       const idx = (current + i + testimonialCount) % testimonialCount;
//       visible.push({ ...testimonials[idx], isActive: i === 0 });
//     }
//     return visible;
//   };

//   return (
//     <section className="h-[728px] mx-auto px-[80px] pt-[80px]">
//       <h2 className="text-center text-2xl font-bold mb-12">
//         Témoignages de nos clients
//       </h2>
//       <div className="flex justify-between gap-6 min-h-[320px]">
//         {getVisibleTestimonials().map((item, index) => (
//           <TestimonialCard key={index + current} {...item} />
//         ))}
//       </div>
//       {/* gerons la pargination a l'aide de chaque temoignages  */}
//       <div className="flex items-center justify-center gap-2 mt-8 mx-auto w-[180px] h-[20px]">
//         {testimonials.map((_, idx) => (
//           <span
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`cursor-pointer transition-all duration-300 ${
//               idx === current
//                 ? 'w-16 h-3 bg-[#1227E2] rounded-full'
//                 : 'w-3 h-3 bg-[#9DA6F7] rounded-full'
//             }`}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Temoiniage;
