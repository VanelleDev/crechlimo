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
      description: `Rédaction d'une annonce attractive\nNous rédigeons une annonce professionnelle, mettant \n en valeur les atouts du logement  et optimisée pour \n les plateformes de colocation.`,
    },
    { number: 2, bg: "/image2.jpg" },
    { number: 3, bg: "/image3.jpg" },
    { number: 4, bg: "/image4.jpg" },
    { number: 5, bg: "/image5.jpg" },
  ];

  return (
    <section className="bg-[#FFF4C7] w-full h-[978px]">
      <div className="px-4 py-8 md:px-8 lg:px-20 lg:py-22 h-full flex flex-col justify-between">
        {/* Container principal avec espacement de 86px */}
        <div className="flex flex-col gap-[86px] flex-1">
          {/* Titre */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-black">
              Notre service pour la mise en location
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Nous vous accompagnons à la recherche du locataire idéal.
            </p>
          </div>

          {/* Étapes */}
          <div className="flex flex-col items-center flex-1">
            {/* Version mobile/tablette : layout vertical avec largeur fixe */}
            <div className="flex flex-col gap-4 sm:gap-6 md:hidden w-full max-w-md mx-auto">
              {steps.map((step, idx) => {
                const isSelected = selected === idx;
                const selectedWidth = "w-[280px]"; // Largeur de référence (première image)
                
                return (
                  <div
                    key={step.number}
                    onClick={() => setSelected(idx)}
                    className={`transition-all duration-300 cursor-pointer relative bg-cover bg-center overflow-hidden shadow-md mx-auto
                      ${selectedWidth}
                      ${isSelected 
                        ? 'h-[300px] rounded-2xl' 
                        : 'h-[60px] rounded-t-[30px] rounded-b-[30px]'
                      }`}
                    style={{ 
                      backgroundImage: `url(${step.bg})`,
                      backgroundPosition: isSelected ? 'center center' : 'center top'
                    }}
                  >
                    {/* Numéro */}
                    <div className="m-3 bg-yellow-400 text-black w-7 h-7 flex items-center justify-center font-bold rounded-full text-sm">
                      {step.number}
                    </div>

                    {/* Description pour étape 1 quand sélectionnée */}
                    {idx === 0 && step.description && isSelected && (
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end text-xs leading-tight p-3 pb-4">
                        <p className="text-[#FFD600] font-bold text-center mb-2">
                          {step.description.split('\n')[0]}
                        </p>
                        {step.description.split('\n').slice(1).map((line, i) => (
                          <p key={i} className="text-white text-center text-xs leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Version desktop : layout horizontal */}
            <div className="hidden md:flex flex-row gap-3 lg:gap-6 flex-wrap justify-center w-full max-w-7xl">
              {steps.map((step, idx) => {
                const isShrunk = selected !== null && selected !== idx;
                const isSelected = selected === idx;
                
                return (
                  <div
                    key={step.number}
                    onClick={() => setSelected(idx)}
                    className={`transition-all duration-300 cursor-pointer relative bg-cover bg-center overflow-hidden shadow-md flex-shrink-0
                      ${isShrunk 
                        ? 'w-[70px] lg:w-[118px] h-[300px] lg:h-[500px] rounded-t-[100px] lg:rounded-t-[250px] rounded-b-[100px] lg:rounded-b-[250px]' 
                        : 'w-[280px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-2xl'
                      }`}
                    style={{ backgroundImage: `url(${step.bg})` }}
                  >
                    {/* Numéro */}
                    <div className="m-2 lg:m-4 bg-yellow-400 text-black w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center font-bold rounded-full text-xs lg:text-base">
                      {step.number}
                    </div>

                    {/* Description pour étape 1 - seulement sur desktop */}
                    {idx === 0 && step.description && isSelected && (
                      <div className="absolute bottom-0 left-0 right-0 hidden lg:flex flex-col items-center justify-end text-xs leading-tight p-2 pb-6">
                        <p className="text-[#FFD600] font-bold text-center mb-1">
                          {step.description.split('\n')[0]}
                        </p>
                        {step.description.split('\n').slice(1).map((line, i) => (
                          <p key={i} className="text-white text-center text-xs leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bouton final */}
        <div className="text-center mt-auto">
          <button
            type="submit"
            className="flex items-center gap-2 text-black leading-7 bg-[#FFCD05] px-4 py-2 rounded-sm mx-auto hover:bg-[#FFD737] transition-colors duration-300"
          >
            <span className='leading-7 text-sm md:text-base'>recherche Locataire</span>
            <img src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;