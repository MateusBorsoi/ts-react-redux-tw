import Logo from "../../../public/assets/img_logo.png";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-44 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 p-2">
      <div className="flex ">
        <div className="w-20 h-20 text-white mb-16">
          <Link href={"/"}>
            <Image src={Logo} width={100} height={100} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="w-2/4 h-14 mx-auto text-white">
        <div className="relative flex w-full h-full flex-wrap items-stretch mb-3">
          <input
            type="text"
            placeholder="Pesquisar"
            className="px-3 py-4 placeholder:text-indigo-600 text-slate-600 relative rounded-lg bg-white  text-base border-2 shadow outline-none focus:outline-none focus:ring ring-indigo-600 w-full pr-10"
          />
          <span className="z-10 leading-snug font-normal text-center text-indigo-600 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-5">
            <Link href={""}>
            <BsSearch/>
            </Link>
          </span>
        </div>
      </div>
      <div className="w-16 h-16 border-2 ml-auto text-white">BTN1</div>
      <div className="w-16 h-16 border-2 text-white">BTN2</div>
      <div className="w-16 h-16 border-2 text-white">BTN3</div>
      <div className="w-16 h-16 border-2 mb-28 text-white">

      </div>
    </div>
  );
};

export default Navbar;
