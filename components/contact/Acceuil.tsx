function Acceuil() {
  return (
    <div className="bg-[url('/imageacceuil.jpg')] bg-opacity-30 bg-cover bg-center  h-[517px] min-h-[300px] flex flex-col justify-center items-center text-center">
      <p className="w-full max-w-md text-2xl sm:text-5xl text-center font-sora font-extrabold  mb-4 text-[#FFD737]">Contactez-nous</p>
      <p className=" text-[16px] sm:text-[18px] font-dmsans  leading-[18px] sm:leading-[28px] text-center text-white ">
        Un besoin précis ? Gagnez du temps grâce à notre formulaire intelligent.
  
      </p>
      <p className="font-dm font-dmsans text-[16px] sm:text-[18px] leading-[18px] sm:leading-[28px] text-center text-white">      Il vous suffit de sélectionner votre besoin pour être dirigé vers la bonne équipe.</p>
    </div>
  );
}
export default Acceuil;