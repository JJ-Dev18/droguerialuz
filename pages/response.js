import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { ButtonComprar } from "../components/index/carouselProductos/productoStyles";
import Layout from "../components/Layout";
import styled from 'styled-components'
import useAppContext from "../context/Store";
import { domicilio } from "../context/actions";
import { useAlert } from "react-alert";
 
const Table = styled.table`
  background: white;
  padding: 20px;
  border-radius: 15px;
  width: 500px;
  margin: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`;

const ContainerTable = styled.div ` 
width: 100vw;
height: 300px;
margin-top:10px;
display:  flex;
justify-content : center;
flex-direction : column;
align-items : center;
padding:  40px;
`
const Response = () => {
  const router = useRouter();
  const { value } = useAppContexttext();
  const { state, dispatch } = value;
  const alert = useAlert()
   const { cart, logged, user } = state;
   const [estado, setestado] = useState('')
    const [direccion, setdireccion] = useState("");
  const transactionState = router.query.transactionState;
  const transactionId = router.query.transactionId
  const reference_pol = router.query.reference_pol
  const referenceCode = router.query.referenceCode
  const pseBank = router.query.pseBank
  const cus = router.query.cus
  const TX_VALUE = router.query.TX_VALUE
  const currency = router.query.currency
  const extra1 = router.query.extra1
  const lapPaymentMethod = router.query.lapPaymentMethod
  
  const response =
    "http://localhost:3000/response?merchantId=962458&merchant_name=LUZ+MAR+DROGUERIAS+GN&merchant_address=Cl+74+18-05&telephone=3165371297&merchant_url=&transactionState=4&lapTransactionState=APPROVED&message=APPROVED&referenceCode=dolex+pro2&reference_pol=1838910929&transactionId=ad34320b-e452-4a9f-89f7-4fcd235284a8&description=Test+PAYU&trazabilityCode=996929&cus=996929&orderLanguage=es&extra1=&extra2=&extra3=&polTransactionState=4&signature=0db59a62b52e57eddcd3a35d0a7a74b8&polResponseCode=1&lapResponseCode=APPROVED&risk=&polPaymentMethod=11&lapPaymentMethod=MASTERCARD&polPaymentMethodType=2&lapPaymentMethodType=CREDIT_CARD&installmentsNumber=1&TX_VALUE=1000.00&TX_TAX=.00&currency=COP&lng=es&pseCycle=&buyerEmail=luzmardrogueria%40gmail.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=023789&TX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE=.00&processingDate=2022-01-25";
  
    useEffect(() => {
  if (transactionState == 4 ) {
	setestado("Transaccion aprovada");
}

else if (transactionState == 6 ) {
	setestado("Transaccion rechazada");
}

else if (transactionState == 104 ) {
	setestado("Error");
}

else if (transactionState == 7 ) {
	setestado("Pago Pendiente");
}

else {
	setestado(router.query.message);
}}, []);
  
const seguirDomicilio = () => {
    if(user.direccion === ''){
        setdireccion(
          window.prompt("Por favor poner direccion", user.direccion)
        );
    }
    dispatch(domicilio({
      referencia: referenceCode,
      total : TX_VALUE,
      descripcion : extra1,
      direccion
    }))
    router.push("/domicilio");
  
}

    return (
      <ContainerTable>
        <h2 style={{margin:'0',marginTop:'14px'}}>Resultado de la compra</h2>
        <Table>
          <tr>
            <td>Estado de la transaccion</td>
            <td>{estado}</td>
          </tr>

          <tr>
            <td>Id Transaccion </td>
            <td>{transactionId}</td>
          </tr>
          <tr>
            <td>Referencia de la compra</td>
            <td> {reference_pol}</td>
          </tr>
          <tr>
            <td>Referencia de la transaccion</td>
            <td>{referenceCode}</td>
          </tr>

          {pseBank && (
            <>
              <tr>
                <td>Cus </td>
                <td> {cus} </td>
              </tr>
              <tr>
                <td>Banco </td>
                <td> {pseBank} </td>
              </tr>
            </>
          )}

          <tr>
            <td>total</td>
            <td>$ {TX_VALUE} </td>
          </tr>
          <tr>
            <td>Moneda</td>
            <td> {currency}</td>
          </tr>
          <tr>
            <td>Descripcion</td>
            <td>{extra1}</td>
          </tr>
          <tr>
            <td>Entidad:</td>
            <td> {lapPaymentMethod}</td>
          </tr>
        </Table>

        <ButtonComprar
          onClick={seguirDomicilio}
        >
          Ir al Domicilio
        </ButtonComprar>
      </ContainerTable>
    );
}
 
export default Response;

Response.Layout = Layout;