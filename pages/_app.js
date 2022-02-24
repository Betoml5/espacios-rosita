import NextNProgress from "nextjs-progressbar";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { ContextProvider } from "../context/Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <NextNProgress color="#6366f1" />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
