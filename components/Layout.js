import Header from "./index/Header";

const Layout = ({children}) => {
  return (
  <>
  <Header/>
  {children}
  </>  );
}
 
export default Layout;