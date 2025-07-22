import React from 'react'
import Acceuil from "@/components/investissement/Acceuil";
import Location from "@/components/investissement/Location";
import Temoiniage from "@/components/investissement/Temoiniage";
import Avantages from "@/components/investissement/Avantages";
import GestionLocation from "@/components/investissement/GestionLocation";

function page() {
  return (
    <div>
      <Acceuil />
      
      <Location />
      <Avantages />
      <Temoiniage /> 
      <GestionLocation />
    </div>
  )
}

export default page
