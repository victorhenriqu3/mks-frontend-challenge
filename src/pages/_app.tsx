import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { store } from "@/store/store";
import GlobalStyles from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
