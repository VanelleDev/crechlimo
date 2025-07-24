"use client";
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center z-1 px-4 sm:px-20 sm:py-5 py-3  bg-black/20 backdrop-blur-2xl fixed overflow-hidden">
      <Image
        src="/Color=Blue-Yellow.png"
        alt="Logo CrechImmo"
        width={160}
        height={40}
        className="h-auto sm:h-10 sm:w-auto w-20"
      />

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-8 text-sm text-gray-700">
        <Link href="/" className='text-[#000000] hover:text-[#FFCD05] hover:cursor-pointeur font-dmsans'>Accueil</Link>
        <Link href="/investissement" className='text-[#000000] hover:text-[#FFCD05] hover:cursor-pointeur font-dmsans'>Investissement Immo</Link>
        <Link href="/creche" className='text-[#000000] hover:text-[#FFCD05] hover:cursor-pointeur font-dmsans'>Sécuriser une Crèche</Link>
        <Link href="/realisations" className='text-[#000000] hover:text-[#FFCD05] hover:cursor-pointeur font-dmsans'>Réalisations</Link>
        <Link href="/tarifs" className='text-[#000000] hover:text-[#FFCD05] hover:cursor-pointeur font-dmsans'>Tarifs</Link>
        <Link href="/blog" className='text-[#000000] hover:text-[#FFCD05] hover:cursor-pointeur font-dmsans'>Blog</Link>
      </nav>

                     <button
                  type="submit"
                  className="hidden lg:flex items-center gap-2 text-black hover:cursor-pointeur leading-7 bg-[#FFCD05] px-4  py-2 rounded-xl"
                >
                    <span className='text-[#000000] font-medium'>Nous contacter</span>
        <Image src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
                </button>

      
      <button
        className="lg:hidden flex items-center justify-center"
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path stroke="#1227E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-40 flex items-center justify-center">
          <div className="bg-[#07105B] rounded-2xl p-8 w-[90vw] max-w-xs flex flex-col gap-6 text-white text-lg relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path stroke="#FFCD05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/>
              </svg>
            </button>
            <Link href="/" onClick={() => setOpen(false)} className="border-b border-gray-700 pb-2">Accueil</Link>
            <Link href="/investissement" onClick={() => setOpen(false)} className="border-b border-gray-700 pb-2">Investissement Immo</Link>
            <Link href="/creche" onClick={() => setOpen(false)} className="border-b border-gray-700 pb-2">Sécuriser une Crèche</Link>
            <Link href="/realisations" onClick={() => setOpen(false)} className="border-b border-gray-700 pb-2">Réalisations</Link>
            <Link href="/tarifs" onClick={() => setOpen(false)} className="border-b border-gray-700 pb-2">Tarifs</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="border-b border-gray-700 pb-2">Blog</Link>
            <button
              type="submit"
              className="flex items-center gap-2 text-black leading-7 bg-[#FFCD05] px-4 py-2 rounded-full mt-4"
            >
              <span>Nous contactez</span>
              <Image src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

// import Link from 'next/link'
// import Image from 'next/image'
// export default function Header() {
//   return (
//     <header className="flex justify-between items-center px-4 sm:px-20 py-4 ">

      
        
//           <Image
//             src="/Color=Blue-Yellow.png"
//             alt="Logo CrechImmo"
//             width={160}
//             height={40}
//             className="h-10 w-auto "
//           />
      
      
//       <nav className="hidden lg:flex gap-6 text-sm text-gray-700">
//         <Link href="/" className=''>Accueil</Link>
//         <Link href="/investissement">Investissement Immo</Link>
//         <Link href="/creche">Sécuriser une Crèche</Link>
//         <Link href="/realisations">Réalisations</Link>
//         <Link href="/tarifs">Tarifs</Link>
//         <Link href="/blog">Blog</Link>

//       </nav>
//                 <button
//                   type="submit"
//                   className="flex items-center gap-2 text-black leading-7 bg-[#FFCD05] px-4  py-2 rounded-full"
//                 >
//                     <span className=''>Nous contactez</span>
//         <Image src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
//                 </button>
//       {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-4 py-2 rounded-full">
//         Nous contacter
//       </button> */}
//     </header>
//   )
// }
