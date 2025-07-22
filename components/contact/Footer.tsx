import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#07105B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Footer Top */}
<div className="grid grid-cols-1 md:flex justify-between gap-8 mb-8">
  {/* Gauche : Logo + Description */}
  <div className="flex flex-col gap-4 max-w-sm">
    <Image
      src="/CrecheImmo Logo.svg"
      alt="CrecheImmo Logo"
      width={160}
      height={40}
      className="h-10 w-auto"
    />
    <p className="text-gray-300 text-sm leading-relaxed">
      Votre partenaire de colocation, <br />
      investissement locatif et services <br />
      professionnels pour crèches.
    </p>
  </div>

  {/* Droite : Réseaux + Explorer + Contact */}
  <div className="flex flex-row gap-8">
    <div className="flex flex-col ">
    {/* Réseaux sociaux */}
    <h1 className='leading-7 text-white mb-4'>Suivez nous</h1>
    <div className="flex gap-3">
        
      {[
        { src: '/Vector (1).png', alt: 'Facebook' },
        { src: '/Group.png', alt: 'Instagram' },
        { src: '/layer1.png', alt: 'LinkedIn' },
        { src: '/Groupe.png', alt: 'Instagram' },
      ].map((icon, idx) => (
        <Link
          key={idx}
          href="#"
          className="w-9 h-9 bg-[#FFCD05]  rounded-full flex items-center justify-center"
        >
          <Image src={icon.src} alt={icon.alt} width={16} height={16} />
        </Link>
      ))}
    </div>
    </div>

    {/* Explorer */}
    <div>
      <h3 className="  leading-7 text-white mb-4">Explorer</h3>
      <div className="space-y-2">
        {['Collection', 'Services', 'Réalisations', 'À Propos'].map((text, i) => (
          <Link
            key={i}
            href="#"
            className="block text-gray-300  text-sm"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>

    {/* Contact */}
    <div>
      <h3 className=" leading-7 text-white mb-4">Entrez en contact</h3>
      <div className="space-y-2 text-sm text-gray-300">
        <div>
          {/* <p className="font-medium mb-1">Téléphone:</p> */}
          <p className="text-[#FFD737]">06 61 40 76 33</p>
        </div>
        <div>
          {/* <p className="text-[#FFD737] font-medium mb-1">Email:</p> */}
          <Link href="mailto:crechimmo@gmail.com" className="text-[#FFD737] hover:text-red-600">
            crechimmo@gmail.com
          </Link>
        </div>
        <div>
          {/* <p className="text-white font-medium mb-1">Adresse:</p> */}
          <p>
            22 rue de la pointe,<br />
            91200 Athis-Mons
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


                {/* Footer Bottom */}

                <div className="border-t border-gray-700 pt-6">
  <div className="flex flex-col sm:flex-row justify-between  gap-4 mb-4">
      <div className="text-center">
    <p className="text-gray-500 text-xs">
      © 2025 CrecheImmo. Tous droits réservés.
    </p>
  </div>
    <div className="flex flex-wrap justify-center gap-6">
                                  <Link href="#" className="text-gray-400  text-xs transition-colors duration-300">
                                Mentions légales
                            </Link>
                            <Link href="#" className="text-gray-400  text-xs transition-colors duration-300">
                                Politique de confidentialité
                            </Link>
                            <Link href="#" className="text-gray-400  text-xs transition-colors duration-300">
                                CGV
                            </Link>
                            <Link href="#" className="text-gray-400  text-xs transition-colors duration-300">
                                Plan du site
                            </Link>
    </div>
  </div>

</div>

                {/* <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="#" className="text-gray-400 hover:text-red-600 text-xs transition-colors duration-300">
                                Mentions légales
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-red-600 text-xs transition-colors duration-300">
                                Politique de confidentialité
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-red-600 text-xs transition-colors duration-300">
                                CGV
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-red-600 text-xs transition-colors duration-300">
                                Plan du site
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 text-xs">
                            © 2025 CrecheImmo. Tous droits réservés.
                        </p>
                    </div>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;

// function Footer() {
//   return (
//     <div>
//       <div className="bg-#07105B">´
//         <div className="flex items-center justify-between">
//             <div>

//             </div>

//             <div className="flex flex-row gap-2">

//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
