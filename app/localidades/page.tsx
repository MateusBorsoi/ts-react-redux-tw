"use client";

import { getCidades, getEstados } from "@/data/ChamadasAPi";
import { ChangeEvent, useCallback, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";

const Localidades = () => {
  const [uf, setUf] = useState([]);
  const [selectedUF, setSelectedUF] = useState<string>("");
  const [cidades, setCidades] = useState([]);
  const date = new Date()

  const UF = useCallback(async () => {
    try {
      const estado = await getEstados();
      setUf(estado);
    } catch (erro) {
      toast.error('Houve um erro ao consultar os estados')
    }
  }, []);

  useEffect(() => {
    UF();
  }, [UF]);


  const buscarCidades = useMemo(async() => {
      const cidade = await getCidades(selectedUF);
      setCidades(cidade);

  }, [selectedUF]);



  
  return (
    <div className="h-screen w-80">
      <form>
        <div>
          <label>Estado:</label>
          <select
          defaultValue={''}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSelectedUF(e.currentTarget.value)
            }
          >
            <option value={""} disabled>
              Escolha uma opção
            </option>
            {uf?.map((estado: any) => (
              <option key={estado.id} value={estado.id}>
                {estado.sigla}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Cidade:</label>
          <select >
            <option disabled ></option>
            {cidades.map((cidade:any) => (
            <option key={cidade.id} value={cidade.id} disabled={selectedUF? false : true}>{cidade.nome}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Localidades;
