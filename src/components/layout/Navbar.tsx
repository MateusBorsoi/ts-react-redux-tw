'use client'

import Logo from "../../../public/assets/img_logo.png";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { selectCartItens } from "@/redux/selectors/cartSelector";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../carrinho/Cart";
const Navbar = () => {
  const ItensCarrinho = useSelector(selectCartItens);
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  let userIcon = (
    <span className="text-white text-4xl hover:text-gray-400">
      <BiUserCircle />
    </span>
  );
  let notificationIcon = (
    <>
      {ItensCarrinho.length > 0 && (
        <div className="bg-red-500 rounded-full w-5 h-5 flex items-center content-center justify-center ml-1">
          <span className="text-sm text-white p-1">{ItensCarrinho.length}</span>
        </div>
      )}
    </>
  );

  return (
    <div className="flex items-center justify-between w-full h-44 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 p-2">
      <div className="flex ">
        <div className="  text-white mb-16">
          <Link href={"/"}>
            <Image src={Logo} width={150} height={100} alt="Logo" />
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
              <BsSearch />
            </Link>
          </span>
        </div>
      </div>
      <div className="w-16 h-8 flex itens-center content-center justify-center  ml-auto mt-36 shadow font-bold hover:text-indigo-500 text-white">Home</div>
      <div className="ml-2 w-auto px-2 h-8 flex itens-center content-center justify-center mt-36 font-bold hover:text-indigo-500 text-white">Categorias</div>
      <div className="w-16 h-16 mb-28 text-white flex flex-col items-center content-center justify-center">
      {ItensCarrinho.length > 0 && (
        <div className="bg-red-500 rounded-full ml-8 mb-4 absolute w-5 h-5 flex items-center content-center justify-center">
          <span className="text-sm text-white p-1" onClick={handleToggleCart}>
            {ItensCarrinho.length}
          </span>
        </div>
      )}
        <span className="text-white text-3xl pb-1 hover:text-gray-400 cursor-pointer " onClick={handleToggleCart}>
          <AiOutlineShoppingCart />
        </span>
        {showCart && <Cart onClose={handleToggleCart} />}
      </div>
      <div className="w-16 h-16 mb-28 text-white flex flex-col items-center content-center justify-center">
        <DropDown buttonLabel={userIcon} placement="bottom-start">
          <ul className="bg-black border border-indigo-500 rounded-lg p-4">
            <Link href={""}>
              <li className="hover:text-indigo-500 font-bold">Conta</li>
            </Link>
            <Link href={"/produtos"}>
              <li className="hover:text-indigo-500 font-bold flex">
                Produtos
              </li>
            </Link>
            <Link href={""}>
              <li className="hover:text-indigo-500 font-bold flex">
                Carrinho
                <span className="pt-1 pr-4 mr-2">{notificationIcon}</span>
              </li>
            </Link>
            <p className="py-4">
              {" "}
              <li className="h-1 w-11/12 bg-indigo-500 lg:w-1/3"></li>
            </p>
            <Link href={""}>
              <li className="hover:text-indigo-500 font-bold">Desconectar</li>
            </Link>
          </ul>
        </DropDown>
      </div>
    </div>
  );
};

export default Navbar;
