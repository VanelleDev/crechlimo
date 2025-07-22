import React from 'react';

function Acceuil() {
  return (
    <section className="relative w-full h-screen">
      {/* Image de fond */}
      <div className="absolute inset-0 bg-[url('/acceuil.jpg')] bg-cover bg-center z-0"></div>

      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Texte centré */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center">
        <p className="text-4xl px-6 py-3 text-white">
          Accompagnement à la mise en <br /> location
        </p>
      </div>
    </section>
  );
}

export default Acceuil;




// import React from 'react'

// function Acceuil() {
//   return (
//     <div className="relatve bg-[url('/acceuil.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center  text-center">
//       <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
//       <p className="  text-4xl  px-6 py-3 text-white ">
//       Accompagnement à la mise en <br /> location
//       </p>
//     </div>
//   )
// }

// export default Acceuil
