"use client";

import Image from "next/image";
import { formataValor } from "@/data/FunctionsUteis";
import { AddItemToCart } from "@/data/addCarrinho";
import { Product } from "@/types/product/ProductTypes";
import Button from "./Button/Button";
import InputCustom from "./Input/Input";

type Props = {
  produtos: Product[];
};

const CardProdutos = ({ produtos }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/5 border flex items-center justify-center">
        <div className="flex flex-col space-y-4">
          <InputCustom  titulo="Teste" type="text"/>
          <Button
            className="text-black font-bold shadow-black shadow-lg bg-indigo-600 hover:scale-105 "
            rippleColor="rgb(49, 51, 51, 0.8)"
            rippleDuration={2}
          >
            Teste
          </Button>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="w-1/4 flex items-center justify-center">
          <div className="border-2 h-3/4 w-3/4"></div>
        </div>
        <div className="flex-1 border-2 flex">
          {produtos?.map((produto: any) => (
            <div key={produto.id}>
              <div className="w-64 border-2 h-56 flex flex-col itens-center content-center justify-center text-center">
                <p className="text-black bg-indigo-500 border-2 shadow-md">
                  {produto.descricao}
                </p>
                <p>{produto.categoria}</p>
                <div className="self-center">
                  <Image
                    src={produto.imagens}
                    alt="ImagemProduto"
                    width={100}
                    height={100}
                  />{" "}
                </div>
                <p className="font-bold text-lg">
                  {formataValor(produto.preco)}
                </p>

                <button
                  className="text-indigo-500 text-lg font-bold hover:underline"
                  onClick={() =>
                    AddItemToCart(
                      produto.id,
                      produto.descricao,
                      produto.preco,
                      produto.categoria,
                      produto.imagens,
                      produto.complemento,
                      produto.promocional,
                      produto.quantidade
                    )
                  }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/4 border-2"></div>
      </div>

      <div className="h-1/5 border-2"></div>
    </div>
  );
};

export default CardProdutos;
