"use client";
import React, { useState } from 'react';

type Step = {
  number: number;
  bg: string;
  description?: string;
};

const Location = () => {
  // Par défaut, le premier élément est sélectionné
  const [selected, setSelected] = useState<number>(0);
  const steps: Step[] = [
    {
      number: 1,
      bg: "/image1.jpg",
      description: `Rédaction d’une annonce attractive\nNous rédigeons une annonce professionnelle, mettant \n en valeur les atouts du logement  et optimisée pour \n les plateformes de colocation.`,
    },
    { number: 2, bg: "/image2.jpg" },
    { number: 3, bg: "/image3.jpg" },
    { number: 4, bg: "/image4.jpg" },
    { number: 5, bg: "/image5.jpg" },
  ];

  return (
    <section className="bg-[#FFF4C7] py-20 flex flex-col items-center text-center">
      {/* Titre */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black">
          Notre service pour la mise en location
        </h2>
        <p className="text-gray-700">
          Nous vous accompagnons à la recherche du locataire idéal.
        </p>
      </div>

      {/* Étapes */}
      <div className="flex flex-row gap-6 mb-12 flex-wrap justify-center">
        {steps.map((step, idx) => {
          const isShrunk = selected !== null && selected !== idx;
          return (
            <div
              key={step.number}
              onClick={() => setSelected(idx)}
              className={`h-[500px] transition-all duration-300 cursor-pointer relative bg-cover bg-center overflow-hidden shadow-md ${isShrunk ? 'w-[118px] rounded-t-[250px] rounded-b-[250px] ' : 'w-[500px] rounded-2xl'}`}
              style={{ backgroundImage: `url(${step.bg})` }}
            >
              {/* Numéro */}
              <div className="m-4 bg-yellow-400 text-black w-8 h-8 flex items-center justify-center font-bold rounded-full ">
                {step.number}
              </div>

              {/* Description pour étape 1 */}
              {idx === 0 && step.description && (
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end text-xs leading-tight p-2 pb-6">
                  <p className="text-[#FFD600] font-bold text-center">{step.description.split('\n')[0]}</p>
                  {step.description.split('\n').slice(1).map((line, i) => (
                    <p key={i} className="text-white text-justify">{line}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bouton final */}
      <div>
        <button
          type="submit"
          className="flex items-center gap-2 text-black leading-7 bg-[#FFCD05] px-4  py-2 rounded-sm"
        >
          <span className='leading-7'>recherche Locataire</span>
          <img src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
        </button>
      </div>
    </section>
  );
};

export default Location;
