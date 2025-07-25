import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#07105B] text-white w-full">
            <div className="w-full px-4 py-8 md:px-8 lg:px-20 lg:py-22">
                {/* Footer Top */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-8">
                    {/* Gauche : Logo + Description */}
                    <div className="flex flex-col gap-4 max-w-sm lg:max-w-md">
                      <div className='w-fit'>
                                                <Image
                            src="/CrecheImmo Logo.svg"
                            alt="CrecheImmo Logo"
                            width={160}
                            height={40}
                            className="h-8 sm:w-40 md:h-10"
                        />
                      </div>

                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            Votre partenaire de colocation, <br /> investissement locatif et services <br />
                            professionnels pour crèches.
                        </p>
                    </div>

                    {/* Droite : Réseaux + Explorer + Contact */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                        {/* Réseaux sociaux */}
                        <div className="flex flex-col">
                            <h3 className="font-medium text-white mb-4 text-base md:text-lg">
                                Suivez nous
                            </h3>
                            <div className="flex gap-3">
                                {[
                                    { src: '/Vector (1).png', alt: 'Facebook' },
                                    { src: '/Group.png', alt: 'Instagram' },
                                    { src: '/layer1.png', alt: 'LinkedIn' },
                                    { src: '/Groupe.png', alt: 'Twitter' },
                                ].map((icon, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="w-9 h-9 md:w-10 md:h-10 cursor-pointer bg-[#FFCD05] rounded-full flex items-center justify-center hover:bg-[#FFD737] transition-colors duration-300"
                                    >
                                        <Image 
                                            src={icon.src} 
                                            alt={icon.alt} 
                                            width={16} 
                                            height={16}
                                            className="w-4 h-4 md:w-5 md:h-5"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Explorer */}
                        <div className="min-w-[120px]">
                            <h3 className="font-medium text-white mb-4 text-base md:text-lg">
                                Explorer
                            </h3>
                            <div className="space-y-2 md:space-y-3">
                                {['Collection', 'Services', 'Réalisations', 'À Propos'].map((text, i) => (
                                    <Link
                                        key={i}
                                        href="#"
                                        className="block text-gray-300 hover:text-[#FFCD05] text-sm md:text-base transition-colors duration-300"
                                    >
                                        {text}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="min-w-[200px]">
                            <h3 className="font-medium text-white mb-4 text-base md:text-lg">
                                Entrez en contact
                            </h3>
                            <div className="space-y-3 text-sm md:text-base text-gray-300">
                                <div>
                                    <p className="text-[#FFD737] font-medium hover:text-[#FFCD05] transition-colors duration-300">
                                        06 61 40 76 33
                                    </p>
                                </div>
                                <div>
                                    <Link 
                                        href="mailto:crechimmo@gmail.com" 
                                        className="text-[#FFD737] hover:text-[#FFCD05] transition-colors duration-300 break-all"
                                    >
                                        crechimmo@gmail.com
                                    </Link>
                                </div>
                                <div>
                                    <p className="leading-relaxed text-gray-300">
                                        22 rue de la pointe,<br />
                                        91200 Athis-Mons
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-6 md:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                        <div className="order-2 md:order-1">
                            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                                © 2025 CrecheImmo. Tous droits réservés.
                            </p>
                        </div>
                        
                        <div className="order-1 md:order-2 flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                            <Link 
                                href="#" 
                                className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-300"
                            >
                                Mentions légales
                            </Link>
                            <Link 
                                href="#" 
                                className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-300"
                            >
                                Politique de confidentialité
                            </Link>
                            <Link 
                                href="#" 
                                className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-300"
                            >
                                CGV
                            </Link>
                            <Link 
                                href="#" 
                                className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-300"
                            >
                                Plan du site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

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
//                 </div> */}
//             </div>
//         </footer>
//     );
// };

// export default Footer;

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
