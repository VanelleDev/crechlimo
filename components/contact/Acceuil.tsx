function Acceuil() {
  return (
    <div className="bg-[url('/pexels-mart-production-7709181.png')] bg-cover bg-center  bg-no-repeat h-[500px] md:h-[610px] relative flex flex-col justify-center items-center text-center w-full gap-3.5 px-4">
       <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <p className="w-full max-w-md text-md sm:text-5xl text-center font-sora font-extrabold   text-[#FFD737]">Contactez-nous</p>
      {/* <p className=" text-sm leading-4 font-dmsans  sm:leading-[28px] text-center text-white ">
        Un besoin précis ? Gagnez du temps grâce à notre formulaire intelligent.
  
      </p> */}
      <p className="font-dmsans text-[8px] lg:text-[16px]  leading-4 sm:leading-[28px] text-center text-white"> Un besoin précis ? Gagnez du temps grâce à notre formulaire intelligent.Il   <br/>  vous suffit de sélectionner votre besoin pour être dirigé vers la bonne équipe.</p>
    </div>
  );
}
export default Acceuil;
