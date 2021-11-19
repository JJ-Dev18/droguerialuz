import "normalize.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
import { StoreProvider } from "../context/Store";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 1000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <AlertProvider template={AlertMUITemplate} {...options}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AlertProvider>
    </StoreProvider>
  );
}

export default MyApp;
