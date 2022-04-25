import { ContentFamilia, Empleado } from "./familiaStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'


const SectionFamilia = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ]}
  return (
    <ContentFamilia>

    <Slider {...settings} >
      <Empleado>  
        <Image
          src="/index/empleados/alexander.webp"
          alt="imagen empleado"
          layout="responsive"
          width="100%"
          height="100%"
        />
       
        <h3>Alexander Rivera</h3>
        <h4>Asesor de ventas</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/fermin.webp"
          alt="imagen empleado"
          layout="responsive"
          width="100%"
          height="100%"
        />
        <h3>Fermin ahumada</h3>
        <h4>Jefe de bodega</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/giselle.webp"
          alt="imagen empleado"
          layout="responsive"
          width="100%"
          height="100%"
        />
        <h3>Giselle Navarro</h3>
        <h4>Subgerente</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/laura.webp"
          alt="imagen empleado"
          layout="responsive"
          width="100%"
          height="100%"
        />
        <h3>Laura Navarro</h3>
        <h4>Sub gerente</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/neily.webp"
          alt="imagen empleado"
          layout="responsive"
          width="100%"
          height="100%"
        />
        <h3>Neily Guzman</h3>
        <h4>Jefe de punto de venta</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/rafael.webp"
          alt="imagen empleado"
          layout="responsive"
          width="100%"
          height="100%"
        />
        <h3>Rafael Navarro</h3>
        <h4>Gerente</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/yisela.webp"
          alt="imagen empleado"
          layout="responsive"
          width="100%"
          height="100%"
        />
        <h3>Yisela Yepez</h3>
        <h4>Asesor de Ventas Telefonicas</h4>
      </Empleado>
    </Slider>
    </ContentFamilia>
  );
}
 
export default SectionFamilia;