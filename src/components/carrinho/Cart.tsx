import Produtos from "@/pages/produtos";
import {
  selectCartItens,
  selectCartTotal,
} from "@/redux/selectors/cartSelector";
import { addItem, clearCart, removeItem } from "@/redux/slices/CartSlice";
import { CartItem } from "@/types/cart/CartTypes";
import { Product } from "@/types/product/ProductTypes";
import { useDispatch, useSelector } from "react-redux";
import { BiPlus, BiMinus } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import {VscClose} from 'react-icons/vsc'
import ToastMsg from "../Toast/Toast";
import { toast } from "react-toastify";
import Modal from "../layout/Modal";
import { useState } from "react";

const Cart = (props:any) => {
  const {onClose} = props

  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number>(0);
  const dispatch = useDispatch();
  const cartItens = useSelector(selectCartItens);
  const cartTotal = useSelector(selectCartTotal);
  const valorTotal = cartTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });


  const handleConfirm = (itemID: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      setShowModal(true);
      setItemToDelete(itemID);
    });
  };

  const handleAddToCart = () => {
    const produto: Product = { id: 1, descricao: "Camiseta", preco: 140.99 };
    const ItemCarrinho: CartItem = { produto, quantidade: 1 };
    dispatch(addItem(ItemCarrinho));
  };

  const handleRemoveFromCart = async (itemID: number) => {
    const item = cartItens.find((item) => item.produto.id === itemID);
    if (item) {
      if (item.quantidade > 1) {
        dispatch(addItem({ produto: item.produto, quantidade: -1 }));
      } else {
        try {
          await handleConfirm(itemID);
          dispatch(removeItem(itemToDelete));
        } catch (error) {
          toast.error("Erro ao remover item");
        }
      }
    }
  };

  const handleDeleteFromCart = (itemID: number) => {
    dispatch(removeItem(itemToDelete));
    setShowModal(false);
    toast.success("Produto removido com sucesso");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex-col border-2 bg-black border-indigo-500 rounded-xl w-48 h-64 p-2 fixed top-40 right-0 m-4">
      <button className="ml-36 text-white hover:text-indigo-500 text-lg "onClick={onClose}><VscClose/></button>
      <div className="flex flex-col justify-center items-center content-center">
      {showModal && (
        <Modal
          titulo="Confirmar exclusão"
          texto="Deseja excluir o item do carrinho ?"
          txtbtn="Confirmar"
          onConfirm={handleDeleteFromCart}
          onClose={() => setShowModal(false)}
        />
      )}
      <ToastMsg theme="colored" bar="false" closetime="1000" />
      <p className="font-bold">Meu Carrinho</p>

      {cartItens.length < 1 && (
        <button
          className="border-2 border-indigo-500 rounded-md  bg-white text-indigo-500 p-0.5"
          onClick={handleAddToCart}
        >
          Adicionar ao Carrinho
        </button>
      )}
      {cartItens.map((item) => (
        <div key={item.produto.id}>
          <p className="pb-2">
            <span className="bg-blue-400 font-bold rounded-md">
              Produto: {`${item.produto.id} - ${item.produto.descricao}`}
            </span>
          </p>

          <div className="text-center pb-4 flex flex-col items-center">
            <div className="border border-gray-400 h-12 w-20 flex itens-center justify-center">
              <button
                className=" text-white hover:text-indigo-500 p-0.5"
                onClick={() => handleRemoveFromCart(item.produto.id)}
              >
                <BiMinus />
              </button>
              <span className="font-bold px-2 self-center">
                {item.quantidade}
              </span>
              <button
                className="text-white hover:text-indigo-500 p-0.5 "
                onClick={handleAddToCart}
              >
                <BiPlus />
              </button>
            </div>
            <button
              className="text-white hover:text-indigo-500 pt-2 text-lg"
              onClick={() => handleConfirm(item.produto.id)}
            >
              <BsTrash3 />
            </button>
          </div>
        </div>
      ))}
      {cartTotal > 0 ?  (
        <p className="border-2 p-2 border-indigo-500 rounded-md">
          <span className="font-bold ">Total:</span> {valorTotal}
        </p>
      ): <span className="text-xs pt-5 text-indigo-500">Carrinho Vazio</span>}
      </div>
    </div>
  );
};

export default Cart;
