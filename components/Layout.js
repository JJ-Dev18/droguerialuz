import Footer from "./index/footer/Footer";
import Header from "./index/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
