"use client";

import { getCidade } from "@/data/FunctionsUteis";
import { ChangeEvent, useState } from "react";

const Cidades = () => {
  const [cep, setCep] = useState<any>(null);
  const [dados, setDados] = useState<any>();

  const handleSubmit = async () => {
    if (cep) {
      try {
        const cidade = await getCidade(cep);
        setDados(cidade);
      } catch (erro) {
        console.error(erro);
        return;
      }
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-center mt-2 text-black shadow-lg rounded-md font-bold text-[25px] w-80 underline bg-indigo-400 w-50 hover:rotate-6">
          Busca CEP
        </h1>
      </div>
      <div className="flex content-center justify-center mt-8 h-screen">
        <div className="h-[300px] p-2">
          <label className="pr-2 font-bold text-indigo-500 text-lg">
            Informe o CEP:
          </label>
          <input
            type="number"
            className="w-[300px] rounded-lg bg-indigo-200 border-2 border-black overflow-hidden pl-2"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCep(e.target.value)
            }
          />
          <button
            className="px-2 border-2 border-black rounded-lg font-bold bg-indigo-200 hover:bg-indigo-600 ml-2"
            onClick={() => handleSubmit()}
          >
            Buscar
          </button>

          <div className="flex flex-col w-auto p-2">
            {dados && (
              <>
                <ul className="bg-indigo-200 mt-2 text-center rounded-lg border-2 border-indigo-800 py-2 hover:bg-slate-400">
                  <li className="font-bold underline"> CEP: {dados?.cep}</li>
                  <li className="font-bold underline">
                    Complemento: {dados?.complemento}
                  </li>
                  <li className="font-bold underline">
                    {" "}
                    Logradouro: {dados?.logradouro}
                  </li>
                  <li className="font-bold underline">
                    Bairro: {dados?.bairro}
                  </li>
                  <li className="font-bold underline">
                    Localidade: {dados?.localidade}
                  </li>
                  <li className="font-bold underline">UF: {dados?.uf}</li>
                  <li className="font-bold underline">
                    Localidade: {dados?.localidade}
                  </li>
                  <li className="font-bold underline">IBGE: {dados?.ibge}</li>
                  <li className="font-bold underline">GIA: {dados?.gia}</li>
                  <li className="font-bold underline">DDD: {dados?.ddd}</li>
                  <li className="font-bold underline">SIAFI: {dados?.siafi}</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cidades;
