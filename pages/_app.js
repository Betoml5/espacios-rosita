import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { ContextProvider } from "../context/Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
