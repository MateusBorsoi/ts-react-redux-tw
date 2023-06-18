import { AppProps } from "next/app";
import LayoutApp from "./layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LayoutApp>
        <Component {...pageProps} />
    </LayoutApp>
  );
};

export default App;
