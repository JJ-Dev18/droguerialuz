import "normalize.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
// import Layout from "../components/Layout";
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
const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps,grupos }) {
 const Auth = Component.Auth || Noop;
 const Layout = Component.Layout || Noop
  return (
    <StoreProvider>
      <Auth>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout  grupos={grupos}>
          <Component {...pageProps} />
        </Layout>
      </AlertProvider>
      </Auth>
    </StoreProvider>

  );
}
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/grupos/categorias`);
  const dataGrupos = await res.json();
 
  return {  grupos: dataGrupos  }
}
export default MyApp;
