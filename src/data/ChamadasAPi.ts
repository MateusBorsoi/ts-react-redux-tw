import axios from "axios";

export const getEstados = async () => {
  const response = await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );
  return response.data;
};

export const getCidades = async (uf: string) => {
  const response = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
  );
  return response.data;
};

export const getProdutos = async () => {
  try {
    const response = await fetch(`http://localhost:5000/produtos`, {
      next: {
        revalidate: 15,
      },
    });
    return response.json();
  } catch (erro) {
    console.log(erro);
  }
};
