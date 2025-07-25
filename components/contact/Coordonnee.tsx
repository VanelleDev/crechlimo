import Image from "next/image"

export default function Coordonnees() {
  return (
<div className="bg-[#fdf0c6] px-4 py-8 md:px-8 lg:px-20 lg:py-22 min-h-[300px] w-full lg:min-h-[580px] flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-40">

  {/* Bloc infos */}
  <div className="flex flex-col gap-13 w-full lg:w-[349px] lg:h-[420px]">
    <div className="w-full  lg:h-[230px]">
          <div className="space-y-4  ">
      <h2 className="font-bold text-gray-800 text-lg md:text-2xl mb-5">Nos coordonnées</h2>
      
      <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
        <div className="flex-shrink-0">
          <Image
            src="/phone-icon.png"
            alt="Icône téléphone"
            width={20}
            height={20}
            className="h-6 w-6 md:h-8 md:w-8"
          />
        </div>
        <span className="break-all text-xs md:text-sm">Téléphone : 06 61 59 76 33</span>
      </div>
      
      <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
        <div className="flex-shrink-0">
          <Image
            src="/Mail-icon.png"
            alt="Icône email"
            width={20}
            height={20}
            className="h-6 w-6 md:h-8 md:w-8"
          />
        </div>
        <span className="break-all text-xs md:text-sm">Email : contact@crecheimmo.com</span>
      </div>
      
      <div className="flex items-start gap-3 text-sm md:text-base text-gray-700">
        <div className="flex-shrink-0 mt-1">
          <Image
            src="/Location Icon.png"
            alt="Icône localisation"
            width={20}
            height={20}
            className="h-6 w-6 md:h-8 md:w-8"
          />
        </div>
        <span className="leading-relaxed text-xs md:text-sm">Adresse : 22 rue de la pointe, <br /> 91200 Athis-Mons</span>
      </div>
    </div>


    </div>
    <div className="w-full lg:h-[138px]">
      <h2 className="font-bold text-gray-800 text-lg md:text-2xl mb-5">Nos horaires d'ouverture</h2>
      <div className="flex flex-row sm:flex-row gap-4 sm:gap-3">
        <div className="flex flex-shrink-0">
          <Image
            src="/Clock-icon.png"
            alt="Icône horloge"
            width={20}
            height={20}
            className="h-6 w-6 md:h-8 md:w-8"
          />
        </div>
        <div className="space-y-1">
          <p className="text-gray-700  text-xs md:text-sm">Du lundi au vendredi</p>
          <p className="text-gray-700 text-xs md:text-sm">9h - 18h</p>
          <p className="text-gray-700 text-xs md:text-sm">Samedi : 9h - 13h</p>
          <p className="text-gray-700 text-xs md:text-sm">Fermé le dimanche et jours fériés</p>
        </div>
      </div>
    </div>

  </div>

















  {/* Carte interactive */}
  <div className="w-full lg:w-[780px] lg:flex-1 lg:h-[400px] lg:gap-5">
    <div className="mb-2">
      <h1 className="font-bold text-gray-800 text-lg md:text-xl lg:text-2xl">
        Carte interactive
      </h1>
    </div>
    
    <div className="w-full mb-0 pb-0">
      <iframe 
        title="Carte interactive"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.5234!2d2.369!3d48.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5d9b4a8f5f3d5%3A0x7c4a8b6f5d8e9a2b!2s22%20Rue%20de%20la%20Pointe%2C%2091200%20Athis-Mons%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890"
        width="100%"
        height="300"
        loading="lazy"
        allowFullScreen
        style={{  borderRadius: '12px' }}
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-[12px] w-full h-[300px] md:h-[350px] lg:h-[380px] border-2  border-[#0F1FB5]"
      ></iframe>
    </div>
  </div>

</div>
  )
}
