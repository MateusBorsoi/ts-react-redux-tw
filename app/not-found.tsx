import Image from "next/image";
import Img404 from "../public/assets/404.png";
import ImgFundo from "../public/assets/Group.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Ooops! Página não encontrada !
              </h1>
              <p className="my-2 text-gray-800">
                Retorne para nossa página principal.
              </p>
              <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                <Link href={"/"} /> Retornar para página principal
              </button>
            </div>
          </div>
          <div>
            <Image src={Img404} alt="404" />
          </div>
        </div>
      </div>
      <div>
        <Image src={ImgFundo} alt="Img_fundo" />
      </div>
    </div>
  );
};

export default NotFound;
