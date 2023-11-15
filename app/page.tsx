import CardProdutos from "@/components/CardProdutos";
import { getProdutos } from "@/data/ChamadasAPi";
import { Fragment } from "react";

const Home = async () => {

  const produtos = await getProdutos();
  
  return (
    <Fragment>
      <CardProdutos produtos={produtos} />
    </Fragment>
  );
};
export default Home;
