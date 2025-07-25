



import Image from "next/image";

const Avantages = () => {
  const items = [
    {
      title: "Gain de temps",
      text: "Nous gérons toutes les étapes de la recherche du locataire idéal.",
    },
    {
      title: "Sécurité financière",
      text: "Réduction des risques d'impayés grâce à une sélection rigoureuse des locataires.",
    },
    {
      title: "Optimisation de la rentabilité",
      text: "Fixation d'un loyer optimal, réduction des périodes de vacance locative.",
    },
    {
      title: "Conformité légale",
      text: "Veille juridique permanente pour assurer le respect des obligations légales et réglementaires.",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 py-8 md:px-8 lg:px-20 lg:py-22 relative h-[728px]">

      <div className="relative flex flex-col md:flex-row items-start gap-8">

        <div className="w-full md:w-1/2 relative bg-[url('/Group 5.png')]">
          
  
          <h2 className="text-2xl font-bold text-[#0B1888] relative ">
            Les avantages de notre gestion <br /> locative
          </h2>
        </div>

        {/* Liste avec icônes "+" */}
        <ul className="w-[600px] h-[430px] md:w-1/2 flex flex-col gap-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4 w-[600px] h-[430px]">
              <Image
                src="/Polygon 2.png"
                alt="Plus"
                width={12}
                height={14}
                className="mt-1"
              />
              <div>
                <p className="text-blue-700 font-bold">{item.title}</p>
                <p className="text-gray-600 text-sm">
                  {index === 1 || index === 2 ? (
                    (() => {
                      const words = item.text.split(' ');
                      const lastWord = words.pop();
                      const textWithoutLastWord = words.join(' ');
                      return (
                        <>
                          {textWithoutLastWord} <br />
                          {lastWord}
                        </>
                      );
                    })()
                  ) : index === 3 ? (
                       <>
                      Veille juridique permanente pour assurer le respect des obligations <br />
                      légales et réglementaires.
                    </>
                  ) : (
                    item.text
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Avantages;







// import Image from "next/image";

// const Avantages = () => {
//   const items = [
//     {
//       title: "Gain de temps",
//       text: "Nous nous occupons de toutes les démarches, vous libérant des tâches chronophages.",
//     },
//     {
//       title: "Sécurité financière",
//       text: "Réduction des risques d'impayés grâce à une sélection rigoureuse des locataires.",
//     },
//     {
//       title: "Optimisation de la rentabilité",
//       text: "Fixation d'un loyer optimal, réduction des périodes de vacance locative.",
//     },
//     {
//       title: "Conformité légale",
//       text: "Veille juridique permanente pour assurer le respect des obligations légales et réglementaires.",
//     },
//   ];

//   return (
//     <section className="w-full max-w-[1440px] mx-auto px-4 py-8 md:px-8 lg:px-20 lg:py-22 relative h-[728px]">

//       <div className="relative  flex flex-col md:flex-row items-start gap-8">

//         <div className="w-full md:w-1/2 relative bg-[url('/Group 5.png')]">
          
  
//           <h2 className="text-2xl font-bold text-[#0B1888] relative ">
//             Les avantages de notre gestion <br /> locative
//           </h2>
//         </div>

//         {/* Liste avec icônes "+" */}
//         <ul className="w-[600px] h-[430px] md:w-1/2 flex flex-col gap-4">
//           {items.map((item, index) => (
//             <li key={index} className="flex items-start gap-4 w-[600px] h-[430px]">
//               <Image
//                 src="/Polygon 2.png"
//                 alt="Plus"
//                 width={12}
//                 height={14}
//                 className="mt-1"
//               />
//               <div>
//                 <p className="text-blue-700 font-bold">{item.title}</p>
//                 <p className="text-gray-600 text-sm">
//                   {(() => {
//                     const words = item.text.split(' ');
//                     const lastWord = words.pop();
//                     const textWithoutLastWord = words.join(' ');
//                     return (
//                       <>
//                         {textWithoutLastWord} <br />
//                         {lastWord}
//                       </>
//                     );
//                   })()}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Avantages;