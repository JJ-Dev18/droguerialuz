import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

 // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from '../components/Layout';
import { StoreProvider } from "../context/Store";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS 

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </StoreProvider>
  );
}

export default MyApp
