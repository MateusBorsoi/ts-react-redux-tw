
import { getProdutos } from "@/data/getProdutos";
import { addItem } from "@/redux/slices/CartSlice";
import { CartItem } from "@/types/cart/CartTypes";
import { Product } from "@/types/product/ProductTypes";
import Image from "next/image";
import { useDispatch } from "react-redux";

export const getServerSideProps = async (context: any) => {
  const data = await getProdutos();

  return {
    props: {
      dados: data,
    },
  };
};


const Home = ({ dados }: any) => {
  const dispatch = useDispatch();

  const AddItemToCart = (
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
    dispatch(addItem(ItemCarrinho));
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/5 border">Div 1</div>

      <div className="flex flex-1">
        <div className="w-1/4 flex items-center justify-center">
          <div className="border-2 h-3/4 w-3/4"></div>
        </div>
        <div className="flex-1 border-2 flex">
          {dados?.map((produto: any) => (
            <div key={produto.id}>
              <div className="w-64 border-2 h-56 flex flex-col itens-center content-center justify-center text-center">
                <p className="text-black bg-indigo-500 border-2 shadow-md">{produto.descricao}</p>
                <p>{produto.categoria}</p>
                <div className="self-center"><Image src={produto.imagens} alt="ImagemProduto" width={100} height={100}/> </div>
                <p className="font-bold text-lg">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}</p>
          

                <button className="text-indigo-500 text-lg font-bold hover:underline"
                  onClick={() =>
                    AddItemToCart(
                      produto.id,
                      produto.descricao,
                      produto.preco,
                      produto.categoria,
                      produto.imagens,
                      produto.complemento,
                      produto.promocional,
                      produto.quantidade
                    )
                  }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/4 border-2">DIV4</div>
      </div>

      <div className="h-1/5 border-2"></div>
    </div>
  );
};
export default Home;
