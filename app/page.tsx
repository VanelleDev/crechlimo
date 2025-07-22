import Header from "@/components/contact/Header";

import Footer from "@/components/contact/Footer";
import Acceuil from '@/components/contact/Acceuil'
import ContactForm from '@/components/contact/ContactForm'
import Coordonnee from '@/components/contact/Coordonnee'

export default function Home() {
  return (
    <div className="">
      
                    <Acceuil />
              <ContactForm/>
              <Coordonnee />{/* Ajoutez ici le contenu principal si besoin */}
      {/* <div className="flex-1"></div> */}
      
    </div>
  );
}
