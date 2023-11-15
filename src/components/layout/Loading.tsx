import Image from "next/image";
import Loader from "../../../public/assets/loading.svg";

type LoadProps = {
  altura: number;
  largura: number;
};

const Loading = ({ altura, largura }: LoadProps) => {
  return (
    <Image
      src={Loader}
      alt="Loading"
      className="src"
      width={largura}
      height={altura}
    />
  );
};

export default Loading;
