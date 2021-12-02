import "normalize.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
import { StoreProvider } from "../context/Store";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import AlertTemplate from "react-alert-template-basic";


// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS

function MyApp({ Component, pageProps,categorias }) {
 
  return (
    <StoreProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout categorias={categorias}>
          <Component {...pageProps} />
        </Layout>
      </AlertProvider>
    </StoreProvider>
  );
}
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/categorias`);
  const data = await resp.json()
  const categorias = data.map(categoria => ({
     nombre : categoria.nombre
  }))
  //  const paths = data.map( categoria => ({
  //   params : { slug : `${producto.idProducto}`}
  // }))
  return { categorias  }
}
export default MyApp;
