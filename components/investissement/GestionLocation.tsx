'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function GestionLocation() {
  // const [openQuestion, setOpenQuestion] = useState(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);


  const faqData = [
    {
      id: 1,
      question: "Pourquoi faire appel à une gestion locative ?",
      answer: "Pour gagner du temps, éviter les erreurs, sécuriser vos revenus et déléguer !"
    },
    {
      id: 2,
      question: "Quelle est la différence avec une agence classique ?",
      answer: "Chez CrechImmo on est spécialisés en colocation. On connaît les spécificités du bail partagé, de la cohabilation, et on optimise le remplissage rapide de chaque chambre."
    },
    {
      id: 3,
      question: "Puis-je résilier le mandat de gestion à tout moment ?",
      answer: "Oui, vous pouvez résilier le mandat de gestion à tout moment selon les conditions prévues dans le contrat."
    },
    {
      id: 4,
      question: "Que se passe-t-il en cas de loyers impayés ?",
      answer: "Tous les locataires bénéficient de la garantie Visale, qui prend en charge les impayés jusqu'à leur départ du logement."
    },
    {
      id: 5,
      question: "Comment est sélectionné le locataire ?",
      answer: "Nous procédons à une étude approfondie du dossier du candidat : vérification des revenus, des garanties et des antécédents locatifs."
    },
    {
      id: 6,
      question: "Puis-je suivre la gestion de mon bien à distance ?",
      answer: "Oui, vous avez accès à un espace propriétaire en ligne pour suivre tous les aspects de la gestion de votre bien."
    }
  ];

  const toggleQuestion = (questionId: number) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

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
            {faqData.map((item) => (
              <div key={item.id} className="w-full">
                {/* Question */}
                <div 
                  className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300"
                  onClick={() => toggleQuestion(item.id)}
                >
                  <div className="flex justify-between items-center w-full gap-4">
                    <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
                      {item.question}
                    </span>
                    <Image
                      src={openQuestion === item.id ? "/Minus icon.png" : "/Plus icon.png"}
                      alt={openQuestion === item.id ? "Minus Icon" : "Plus Icon"}
                      width={20}
                      height={20}
                      className="flex-shrink-0 w-5 h-5 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Dropdown Answer */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-[#CED2FB] px-4 sm:px-6 py-4 sm:py-5 mt-2 rounded-2xl shadow-xl">
                    <p className="text-black text-sm sm:text-[15px] leading-[22px] sm:leading-[26px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import Image from 'next/image';

// export default function GestionLocation() {
//   return (
//     <div className="w-full px-4 py-8 md:px-8 lg:px-20">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-10 lg:-mt-20">
          
//           {/* Titre */}
//           <div className="bg-[#FFE169] text-gray-900 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-bold text-lg sm:text-xl text-center shadow-xl h-fit lg:flex-shrink-0 lg:sticky lg:top-8">
//             FAQ - Gestion locative
//           </div>

//           {/* Colonne de questions */}
//           <div className="flex flex-col gap-4 sm:gap-6 w-full lg:max-w-2xl">
//             {/* Question 1 */}
//             <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
//               <div className="flex justify-between items-center w-full gap-4">
//                 <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
//                   Pourquoi faire appel à une gestion locative ?
//                 </span>
//                 <Image
//                   src="/Plus icon.png"
//                   alt="Plus Icon"
//                   width={20}
//                   height={20}
//                   className="flex-shrink-0 w-5 h-5"
//                 />
//               </div>
//             </div>

//             {/* Question 2 */}
//             <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
//               <div className="flex justify-between items-center w-full gap-4">
//                 <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
//                   Quelle est la différence avec une agence classique ?
//                 </span>
//                 <Image
//                   src="/Plus icon.png"
//                   alt="Plus Icon"
//                   width={20}
//                   height={20}
//                   className="flex-shrink-0 w-5 h-5"
//                 />
//               </div>
//             </div>

//             {/* Question 3 */}
//             <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
//               <div className="flex justify-between items-center w-full gap-4">
//                 <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
//                   Puis-je résilier le mandat de gestion à tout moment ?
//                 </span>
//                 <Image
//                   src="/Plus icon.png"
//                   alt="Plus Icon"
//                   width={20}
//                   height={20}
//                   className="flex-shrink-0 w-5 h-5"
//                 />
//               </div>
//             </div>

//             {/* Question 4 */}
//             <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
//               <div className="flex justify-between items-center w-full gap-4">
//                 <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
//                   Que se passe-t-il en cas de loyers impayés ?
//                 </span>
//                 <Image
//                   src="/Plus icon.png"
//                   alt="Plus Icon"
//                   width={20}
//                   height={20}
//                   className="flex-shrink-0 w-5 h-5"
//                 />
//               </div>
//             </div>

//             {/* Question 5 */}
//             <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
//               <div className="flex justify-between items-center w-full gap-4">
//                 <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
//                   Comment est sélectionné le locataire ?
//                 </span>
//                 <Image
//                   src="/Plus icon.png"
//                   alt="Plus Icon"
//                   width={20}
//                   height={20}
//                   className="flex-shrink-0 w-5 h-5"
//                 />
//               </div>
//             </div>

//             {/* Question 6 */}
//             <div className="bg-[#CED2FB] min-h-[56px] px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl cursor-pointer w-full flex items-center hover:bg-[#B8BEFF] transition-colors duration-300">
//               <div className="flex justify-between items-center w-full gap-4">
//                 <span className="text-black font-[700] text-sm sm:text-[15px] leading-[22px] sm:leading-[26px] flex-1">
//                   Puis-je suivre la gestion de mon bien à distance ?
//                 </span>
//                 <Image
//                   src="/Plus icon.png"
//                   alt="Plus Icon"
//                   width={20}
//                   height={20}
//                   className="flex-shrink-0 w-5 h-5"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }