import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { MDBContainer } from 'mdbreact';
import Jumbotron from 'react-bootstrap/Jumbotron'
import FormControl from 'react-bootstrap/FormControl'
import { FaCloudRain } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

/**
 * Essa função é responsável por criar o cabeçalho do site
 * @returns Cabeçalho do site
 */
function Cabecalho() {
  return (
    <>
      <Navbar className="borda-cabecalho" F variant="dark" calss>
        <Nav className="ml-auto" >
        </Nav >
        <Form inline>
        </Form>
      </Navbar >
    </>
  )
}
/**
 * Essa função é responsável por criar o rodapé do site
 * @returns Rodapé do site
 */
function Rodape() {
  return (
    <div className="rodape">
      <MDBContainer className="container-rodape">
        <table className="tabela-rodape">
          <tbody>
            <tr>
              <td className="align-bottom celula-rodape">
                <strong> Developed by: Pedro Spinardi and Davi L. Carasilo  -- A fatec’s project </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </MDBContainer>
    </div>

  )
}
/**
 * Essa função é responsável por criar o corpo do site
 * @returns Corpo do site
 */
function Corpo() {
  return (
    <div className="corpo">

    </div>
  )
}


function App() {
  return (
    <>
      <Cabecalho />
      <Corpo />
      <Rodape />
    </>
  );
}

export default App;
