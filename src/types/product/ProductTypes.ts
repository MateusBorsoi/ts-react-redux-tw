export interface Product {
  id: number;
  descricao: string;
  preco: number;
  categoria: string;
  imagens: string;
  complemento: string;
  promocional: number;
  quantidade: number;
}

export interface ProductState {
  produtos: Product[];
}

