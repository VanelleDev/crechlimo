import React from 'react';
import Image from 'next/image';

export default function GestionLocation() {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between mb-10 -mt-20 mx-auto">
          
          {/* Titre à gauche */}
          <div className="bg-[#FFE169] text-gray-900 px-8 py-5 rounded-3xl font-bold text-xl text-center shadow-xl h-fit">
            FAQ - Gestion locative
          </div>

          {/* Colonne de questions */}
          <div className="flex flex-col gap-6">
            {/* Question */}
            <div className="bg-[#CED2FB] h-[56px] px-6 py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center">
              <div className="flex justify-between items-center w-full">
                <span className="text-black font-[700] text-[15px] leading-[26px] ">
                  Pourquoi faire appel à une gestion locative ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="ml-4"
                />
              </div>
            </div>

            <div className="bg-[#CED2FB] h-[56px] px-6 py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center">
              <div className="flex justify-between items-center w-full">
                <span className="text-black font-[700] text-[15px] leading-[26px] ">
                  Quelle est la différence avec une agence <br /> classique ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="ml-4"
                />
              </div>
            </div>

            <div className="bg-[#CED2FB] h-[56px] px-6 py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center">
              <div className="flex justify-between items-center w-full">
                <span className="text-black font-[700] text-[15px] leading-[26px] ">
                  Puis-je résilier le mandat de gestion à tout <br /> moment ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="ml-4"
                />
              </div>
            </div>

            <div className="bg-[#CED2FB] h-[56px] px-6 py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center">
              <div className="flex justify-between items-center w-full">
                <span className="text-black font-[700] text-[15px] leading-[26px] ">
                  Que se passe-t-il en cas de loyers impayés ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="ml-4"
                />
              </div>
            </div>

            <div className="bg-[#CED2FB] h-[56px] px-6 py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center">
              <div className="flex justify-between items-center w-full">
                <span className="text-black font-[700] text-[15px] leading-[26px] font-sora">
                  Comment est sélectionné le locataire ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="ml-4"
                />
              </div>
            </div>

            <div className="bg-[#CED2FB] h-[56px] px-6 py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center">
              <div className="flex justify-between items-center w-full">
                <span className="text-black font-[700] text-[15px] leading-[26px] font-sora">
                  Puis-je suivre la gestion de mon bien à <br /> distance ?
                </span>
                <Image
                  src="/Plus icon.png"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className="ml-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
