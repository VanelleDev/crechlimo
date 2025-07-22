import Image from "next/image";

const Avantages = () => {
  const items = [
    {
      title: "Gain de temps",
      text: "Nous nous occupons de toutes les démarches, vous libérant des tâches chronophages.",
    },
    {
      title: "Sécurité financière",
      text: "Réduction des risques d’impayés grâce à une sélection rigoureuse des locataires.",
    },
    {
      title: "Optimisation de la rentabilité",
      text: "Fixation d’un loyer optimal, réduction des périodes de vacance locative.",
    },
    {
      title: "Conformité légale",
      text: "Veille juridique permanente pour assurer le respect des obligations légales et réglementaires.",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-[80px] pt-[80px] relative  h-[628px]">

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">

        <div className="w-full md:w-1/2 relative">
          {/* Image décorative derrière le titre */}
          <Image
            src="/Group 5.png"
            alt="Décor du titre"
            width={300}
            height={100}
            className="absolute top-0 left-0 -z-10"
          />
          <h2 className="text-2xl font-bold text-[#0B1888] relative z-10">
            Les avantages de notre gestion <br /> locative
          </h2>
        </div>

        {/* Liste avec icônes "+" */}
        <ul className="w-full md:w-1/2 flex flex-col gap-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              {/* Icône "+" en image */}
              <Image
                src="/Polygon 2.png" // à remplacer par ton icône Figma
                alt="Plus"
                width={12}
                height={14}
                className="mt-1"
              />
              <div>
                <p className="text-blue-700 font-bold">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Avantages;
