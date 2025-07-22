import React from 'react'
import Acceuil from '@/components/contact/Acceuil'
import ContactForm from '@/components/contact/ContactForm'
import Coordonnee from '@/components/contact/Coordonnee'

function page() {
  return (
    <div>
              <Acceuil />
              <ContactForm/>
              <Coordonnee />
      
    </div>
  )
}

export default page
