import Image from "next/image"

export default function Coordonnees() {
  return (
    <div className="bg-[#fdf0c6] p-6 flex flex-col md:flex-row gap-6">
      
      {/* Bloc infos */}
      <div className="space-y-6 w-full md:w-1/2">
        <div className="space-y-3  p-4 rounded-md ">
          <h2 className="font-bold text-gray-800">Nos coordonnées</h2>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <div>
             
            <Image
            src="/phone-icon.png"
            alt="Logo CrechImmo"
            width={20}
            height={20}
            className="h-10 w-auto "
            />
            </div>

            <span>06 61 59 76 33</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Image
            src="/Mail-icon.png"
            alt="Logo CrechImmo"
            width={20}
            height={20}
            className="h-10 w-auto"
            />

            <span>contact@crecheimmo.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            {/* <FaMapMarkerAlt className="text-blue-500" /> */}
            <Image
            src="/Location Icon.png"
            alt="Logo CrechImmo"
            width={20}
            height={20}
            className="h-10 w-auto "
            />
            <span>22 rue de la pointe, 91200 Athis-Mons</span>
          </div>
        </div>

        <div className="space-y-2 p-4 ">
          <h2 className="font-bold text-gray-800">Nos horaires d’ouverture</h2>
          <div className="flex gap-2 ">
          <div>
            <Image
            src="/Clock-icon.jpg"
            alt="Logo CrechImmo"
            width={160}
            height={40}
            className="h-10 w-auto "
            />
          </div>

          <div>
            <p className="text-sm text-gray-700">Du lundi au vendredi</p>
            <p className="text-sm text-gray-700">Samedi : 9h - 13h</p>
            <p className="text-sm text-gray-700">Fermé le dimanche et jours fériés</p>
          </div>
            </div>
        </div>
      </div>

      {/* Carte interactive */}
      <div className="w-full md:w-1/2">
      <div>
              <h1 className=" font-bold text-gray-800 mb-5 mt-4">
        Carte interactive
      </h1>
      </div>
<div className="mt-2">
  <Image
    src="/plan.jpg"
    alt="Carte interactive"
    width={780}
    height={350}
    className="w-full h-auto rounded-sm object-cover"
  />
</div>


      </div>

    </div>
  )
}
