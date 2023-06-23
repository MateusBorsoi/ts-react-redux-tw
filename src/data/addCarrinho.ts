import { addItem } from "@/redux/slices/CartSlice";
import { store } from "@/redux/store";
import { CartItem } from "@/types/cart/CartTypes";
import { Product } from "@/types/product/ProductTypes";

export const AddItemToCart = (
    id: number,
    descricao: string,
    preco: number,
    categoria: string,
    imagens: string,
    complemento: string,
    promocional: number,
    quantidade: number
  ) => {
    const produto: Product = {
      id: id,
      descricao: descricao,
      preco: preco,
      categoria: categoria,
      imagens: imagens,
      complemento: complemento,
      promocional: promocional,
      quantidade: quantidade,
    };

    const ItemCarrinho: CartItem = { produto, quantidade: 1 };
    store.dispatch(addItem(ItemCarrinho));
  };