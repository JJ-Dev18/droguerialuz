import "normalize.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
// import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
// import Layout from "../components/Layout";
import { StoreProvider } from "../context/Store";
import { ThemeProvider } from "styled-components";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import AlertTemplate from "react-alert-template-basic";
import Theme from "../components/global/ThemeProvider";

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

function MyApp({ Component, pageProps, grupos }) {
  const Auth = Component.Auth || Noop;
  const Layout = Component.Layout || Noop;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <StoreProvider>
        <Theme>
          <Auth>
            <AlertProvider template={AlertTemplate} {...options}>
              <Layout >
                <Component {...pageProps} />
              </Layout>
            </AlertProvider>
          </Auth>
        </Theme>
      </StoreProvider>
    </>
  );
}

export default MyApp;
