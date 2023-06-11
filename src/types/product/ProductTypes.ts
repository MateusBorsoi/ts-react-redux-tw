export interface Product {
  id: number;
  descricao: string;
  preco: number;
  categoria: string;
  imagens: string[] | null;
  complemento: string;
  promocional: number | null;
  quantidade: number | null;
}

export interface ProductState {
  produtos: Product[];
}
