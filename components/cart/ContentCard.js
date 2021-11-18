import ProductoDomicilio from "../tudomicilio/ProductoDomicilio";
import ProductoCart from "./ProductoCart";
import { ContainCard } from "./productoCartStyles";

const ContentCard = () => {
  return (
    <ContainCard>
      <ProductoDomicilio
        widthCel="100px"
        heightCel="100px"
        widthImg="50px"
        widthPc="100%"
        heightPc="100px"
        marginleft={false}
        h1="15px"
        p="12px"
        padding={false}
      />
      <ProductoDomicilio
        widthCel="100px"
        heightCel="100px"
        widthImg="50px"
        widthPc="100%"
        heightPc="100px"
        marginleft={false}
        h1="15px"
        p="12px"
        padding={false}
      />
      <ProductoDomicilio
        widthCel="100px"
        heightCel="100px"
        widthImg="50px"
        widthPc="100%"
        heightPc="100px"
        marginleft={false}
        h1="15px"
        p="12px"
        padding={false}
      />
    </ContainCard>
  );
}
 
export default ContentCard;