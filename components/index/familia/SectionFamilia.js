import { ContentFamilia, Empleado } from "./familiaStyles";
import Image from 'next/image'
const SectionFamilia = () => {
  return (
    <ContentFamilia>
      <Empleado>
        <Image
          src="/index/empleados/Empleados.webp"
          alt="imagen empleado"
          layout="intrinsic"
          width="100%"
          height="100%"
        />
        <h3>Nombre colaborador</h3>
        <h4>Cargo Colaborador</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/Empleados.webp"
          alt="imagen empleado"
          layout="intrinsic"
          width="100%"
          height="100%"
        />
        <h3>Nombre colaborador</h3>
        <h4>Cargo Colaborador</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/Empleados.webp"
          alt="imagen empleado"
          layout="intrinsic"
          width="100%"
          height="100%"
        />
        <h3>Nombre colaborador</h3>
        <h4>Cargo Colaborador</h4>
      </Empleado>
      <Empleado>
        <Image
          src="/index/empleados/Empleados.webp"
          alt="imagen empleado"
          layout="intrinsic"
          width="100%"
          height="100%"
        />
        <h3>Nombre colaborador</h3>
        <h4>Cargo Colaborador</h4>
      </Empleado>
    </ContentFamilia>
  );
}
 
export default SectionFamilia;