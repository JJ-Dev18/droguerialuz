import {  ContentPublicidad } from "./publicidadStyles";
import Image from 'next/image'
const Publicidad = () => {
  return (
    <ContentPublicidad>
      <Image
        src="/index/anuncio/1.webp"
        alt="publicidad"
        layout="intrinsic"
        width="400px"
        height="500px"
      />
      <Image
        src="/index/anuncio/2.webp"
        alt="publicidad"
        layout="intrinsic"
        width="400px"
        height="500px"
      />
      <Image
        src="/index/anuncio/3.webp"
        alt="publicidad"
        layout="intrinsic"
        width="400px"
        height="500px"
      />
    </ContentPublicidad>
  );
}
 
export default Publicidad;