export interface Product {
  id: number;
  descricao: string;
  preco: number;
}

export interface ProductState {
    produtos: Product | null,
    loading: boolean,
    error: string | null
}