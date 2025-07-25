function Acceuil() {
  return (
    <div className="bg-[url('/acceuil.jpg')] bg-cover bg-center  bg-no-repeat h-[500px] md:h-[610px] relative flex flex-col justify-center items-center text-center w-full gap-3.5 px-4">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative  flex flex-col justify-center items-center h-full text-center">
        <p className="text-4xl px-6 py-3 text-white">
          Accompagnement à la mise en <br /> location
        </p>
      </div>

    </div>
  );
}
export default Acceuil;







