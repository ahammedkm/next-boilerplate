import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";
import { wrapper } from "@redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(wrapper.withRedux(MyApp));
