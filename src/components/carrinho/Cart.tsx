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
import { VscClose } from "react-icons/vsc";
import ToastMsg from "../Toast/Toast";
import { toast } from "react-toastify";
import Modal from "../layout/Modal";
import { useEffect, useState } from "react";

const Cart = (props: any) => {
  const { onClose } = props;
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number>(0);
  const dispatch = useDispatch();
  const cartItens = useSelector(selectCartItens);
  const cartTotal = useSelector(selectCartTotal);
  const valorTotal = cartTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const cartElement = document.querySelector(".cart");
      if (cartElement) {
        cartElement.classList.add("opacity-100");
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
    <div className="cart opacity-0">
      <div className="flex-col border-4 bg-black border-indigo-500 rounded-xl w-72 h-3/4 p-2 absolute top-10 right-0 m-4 ">
        <button
          className="ml-60 text-white hover:text-indigo-500 text-lg "
          onClick={onClose}
        >
          <VscClose />
        </button>
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
                <div className="border border-indigo-600 h-10 w-20 flex itens-center justify-center">
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
        </div>

        {cartItens.length > 0 ? (
          <div className="flex flex-col itens-center justify-end h-4/6 mt-16 ">
            <p className="font-bold p-2">
              <span className=" text-indigo-500">Total:</span> {valorTotal}
            </p>
            <button
              className="bg-indigo-500 text-white hover:bg-indigo-600  active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              Finalizar
            </button>
            <button
              className="hover:text-indigo-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1"
              type="button"
              onClick={onClose}
            >
              Continuar Comprando
            </button>
          </div>
        ) : (
          <div className="flex flex-col itens-center justify-end h-5/6 text-center ">
            <span className="text-xl text-indigo-500">Carrinho Vazio</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
