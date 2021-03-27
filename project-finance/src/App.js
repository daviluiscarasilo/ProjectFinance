import './App.css';
import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import { MDBContainer } from 'mdbreact';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FaDollarSign } from 'react-icons/fa'
import { FaRegCalendar } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Dropdown from 'react-bootstrap/Dropdown'

/**
 * Essa função é responsável por criar o cabeçalho do site
 * @returns Cabeçalho do site
 */
function Cabecalho() {
  return (
    <>
      <div className="borda-cabecalho" F variant="dark" calss>
        <h1><FaDollarSign /> Finance Project</h1>
      </div>

      < Nav variant="light" activeKey="1" justify variant="tabs" defaultActiveKey="/home" className="pesquisa" F variant="dark" calss>
        <NavDropdown title="Moeda" id="Moeda" >
          <NavDropdown.Item eventKey="USD-BRL">USD-BRL (Dólar Comercial)</NavDropdown.Item>
          <NavDropdown.Item eventKey="USDT-BRL">USDT-BRL (Dólar Turismo)</NavDropdown.Item>
          <NavDropdown.Item eventKey="CAD-BRL">CAD-BRL (Dólar Canadense)</NavDropdown.Item>
          <NavDropdown.Item eventKey="AUD-BRL">AUD-BRL (Dólar Australiano)</NavDropdown.Item>
          <NavDropdown.Item eventKey="EUR-BRL">EUR-BRL (Euro)</NavDropdown.Item>
          <NavDropdown.Item eventKey="GBP-BRL">GBP-BRL (Libra Esterlina)</NavDropdown.Item>
          <NavDropdown.Item eventKey="ARS-BRL">ARS-BRL (Peso Argentino)</NavDropdown.Item>
          <NavDropdown.Item eventKey="JPY-BRL">JPY-BRL (Iene Japonês)</NavDropdown.Item>
          <NavDropdown.Item eventKey="CHF-BRL">CHF-BRL (Franco Suíço)</NavDropdown.Item>
          <NavDropdown.Item eventKey="CNY-BRL">CNY-BRL (Yuan Chinês)</NavDropdown.Item>
          <NavDropdown.Item eventKey="YLS-BRL">YLS-BRL (Novo Shekel Israelense)</NavDropdown.Item>
          <NavDropdown.Item eventKey="BTC-BRL">BTC-BRL (Bitcoin)</NavDropdown.Item>
          <NavDropdown.Item eventKey="LTC-BRL">LTC-BRL (Litecoin)</NavDropdown.Item>
          <NavDropdown.Item eventKey="ETH-BRL">ETH-BRL (Ethereum)</NavDropdown.Item>
          <NavDropdown.Item eventKey="XRP-BRL">XRP-BRL (Ripple)</NavDropdown.Item>
        </NavDropdown>

        <Form inline className="pesquisa" F variant="dark" calss>
          <FaRegCalendar /><FormControl type="mm/dd/aaaa" placeholder="Data Inicial" className="mr-sm-2" />
        </Form>

        <Form inline className="pesquisa" F variant="dark" calss>
          <FaRegCalendar /><FormControl type="mm/dd/aaaa" placeholder="Data Final" className="mr-sm-2" />
        </Form>

        <NavDropdown title="Indicador" id="Indicador">
          <NavDropdown.Item eventKey="bid">Valor de compra</NavDropdown.Item>
          <NavDropdown.Item eventKey="ask">Valor de venda</NavDropdown.Item>
          <NavDropdown.Item eventKey="high">Valor Máximo</NavDropdown.Item>
          <NavDropdown.Item eventKey="low">Valor Mínimo</NavDropdown.Item>
          <NavDropdown.Item eventKey="pctChange">Variação %</NavDropdown.Item>
        </NavDropdown>

      </Nav>
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
                <strong> Developed by: Pedro Spinardi and Davi L. Carasilo -- 2021 A Fatec’s project </strong>
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
