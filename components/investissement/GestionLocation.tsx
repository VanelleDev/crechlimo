import React from 'react';
import Image from 'next/image';

export default function GestionLocation() {
  return (
    <div className="w-full px-4 py-8 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-10 lg:-mt-20">
          
          {/* Titre */}
          <div className="bg-[#FFE169] text-gray-900 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-bold text-lg sm:text-xl text-center shadow-xl h-fit lg:flex-shrink-0 lg:sticky lg:top-8">
            FAQ - Gestion locative
          </div>

          {/* Colonne de questions */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:max-w-2xl">
            {/* Question 1 */}
            <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
              <div className="flex justify-between items-center w-full gap-4">
                <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
                  Pourquoi faire appel à une gestion locative ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="flex-shrink-0 w-5 h-5"
                />
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
              <div className="flex justify-between items-center w-full gap-4">
                <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
                  Quelle est la différence avec une agence classique ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="flex-shrink-0 w-5 h-5"
                />
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
              <div className="flex justify-between items-center w-full gap-4">
                <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
                  Puis-je résilier le mandat de gestion à tout moment ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="flex-shrink-0 w-5 h-5"
                />
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
              <div className="flex justify-between items-center w-full gap-4">
                <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
                  Que se passe-t-il en cas de loyers impayés ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="flex-shrink-0 w-5 h-5"
                />
              </div>
            </div>

            {/* Question 5 */}
            <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
              <div className="flex justify-between items-center w-full gap-4">
                <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
                  Comment est sélectionné le locataire ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="flex-shrink-0 w-5 h-5"
                />
              </div>
            </div>

            {/* Question 6 */}
            <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
              <div className="flex justify-between items-center w-full gap-4">
                <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
                  Puis-je suivre la gestion de mon bien à distance ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="flex-shrink-0 w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}