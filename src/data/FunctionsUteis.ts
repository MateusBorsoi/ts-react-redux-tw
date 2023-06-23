import axios from "axios";

export const formataValor = (preco: number) => {
  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
  return valorFormatado;
};

export const getCidade = async (cep: any) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
