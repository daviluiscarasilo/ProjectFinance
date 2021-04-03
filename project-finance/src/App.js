import './App.css';
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { MDBContainer } from 'mdbreact';
import { FaRegCalendar, FaSearchDollar, FaDollarSign } from 'react-icons/fa'
import { MdTimeline } from "react-icons/md";
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button'
import "react-datepicker/dist/react-datepicker.css";
import Toast from 'react-bootstrap/Toast'
import moment from 'moment'


function App() {
  useEffect(() => {

  })

  const opcoesMoeda = [
    { value: 'USD-BRL', label: 'USD-BRL (Dólar Comercial)' }
    , { value: 'USDT-BRL', label: 'USDT-BRL (Dólar Turismo)' }
    , { value: 'CAD-BRL', label: 'CAD-BRL (Dólar Canadense)' }
    , { value: 'AUD-BRL', label: 'AUD-BRL (Dólar Australiano)' }
    , { value: 'EUR-BRL', label: 'EUR-BRL (Euro)' }
    , { value: 'GBP-BRL', label: 'GBP-BRL (Libra Esterlina)' }
    , { value: 'ARS-BRL', label: 'ARS-BRL (Peso Argentino)' }
    , { value: 'JPY-BRL', label: 'JPY-BRL (Iene Japonês)' }
    , { value: 'CHF-BRL', label: 'CHF-BRL (Franco Suíço)' }
    , { value: 'CNY-BRL', label: 'CNY-BRL (Yuan Chinês)' }
    , { value: 'YLS-BRL', label: 'YLS-BRL (Novo Shekel Israelense)' }
    , { value: 'BTC-BRL', label: 'BTC-BRL (Bitcoin)' }
    , { value: 'LTC-BRL', label: 'LTC-BRL (Litecoin)' }
    , { value: 'ETH-BRL', label: 'ETH-BRL (Ethereum)' }
    , { value: 'XRP-BRL', label: 'XRP-BRL (Ripple)' }
  ]


  const [erroValidacaoCampos, setErroValidacaoCampos] = useState("");
  const [erro, setErro] = useState("");
  const [dataInicial, setDataInicial] = useState(new Date().setDate(new Date().getDate() - 1));
  const [dataFinal, setDataFinal] = useState(new Date());
  const [moeda, setMoeda] = useState("");
  const [moedaTexto, setMoedaTexto] = useState("");
  const [indicador, setIndicador] = useState("");
  const [indicadorTexto, setIndicadorTexto] = useState("");
  const [dadosRelatorio, setDadosRelatorio] = useState({});

  function TimestampParaData(timestamp) {
    var t = new Date(parseInt(timestamp));
    return t;
  }
  function ValidaDadosObrigatorios() {
    return moeda !== "" && indicador !== "" && dataInicial !== "" && dataFinal !== ""
  }
  function ValidarDatas() {
    return dataInicial < dataFinal
  }
  function ValidaCampos() {
    var status = true;
    var mensagemErro = "";

    if (!ValidaDadosObrigatorios()) {
      mensagemErro = "Todos os campos são obrigatórios para a pesquisa;"
      status &= false;
    }

    if (!ValidarDatas()) {
      mensagemErro += "\n Data final não pode ser menor  ou igual  a data inicial;"
      status &= false;
    }
    if (mensagemErro !== "")
      setErroValidacaoCampos(mensagemErro)

    return status;
  }

  async function GerarRelatorio() {
    if (ValidaCampos()) {
      var UrlFinance = "https://economia.awesomeapi.com.br/json/daily/" +
        moeda + `/?start_date=${moment(dataInicial).format("yyyyMMDD")}&end_date=${moment(dataFinal).format("yyyyMMDD")}`

      await fetch(UrlFinance)
        .then(response => response.json())
        .then(data => {
          setDadosRelatorio(data)
        })
        .catch(function (error) {
          setErro('Houve um problema na requisição')
        })
    }
  }


  /**
   * Essa função é responsável por criar o cabeçalho do site
   * @returns Cabeçalho do site
   */
  function Cabecalho() {
    return (
      <>
        <div className="borda-cabecalho" variant="dark" >
          <Container className="container-cabecalho">
            <Row className="align-items-center">
              <Col xs="1">
                <div class="card-body">
                  <h1>< MdTimeline className="logo-cabecalho" /></h1>
                </div>
              </Col>
              <Col xs="11">
                <div class="card-body">
                  <h1><FaDollarSign className="logo-cabecalho" /> Finance Project</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Nav variant="light" activeKey="1" justify variant="tabs" defaultActiveKey="/home" className="pesquisa" variant="dark" >
          <Form inline className="formulario-cabecalho">
            <Container className="container-cabecalho">
              <Row className="align-items-center row-text-align-center">
                <Col xs="3" >
                  <div class="card-body">
                    <label>Moeda</label>
                    <select className="custom-select mr-sm-2" onChange={function (event) {
                      setMoeda(event.target.value);
                      setMoedaTexto(event.target.value);
                    }}>
                      {(moedaTexto &&
                        <option value="">{ }</option>)
                        ||
                        <option value="">Escolha uma opção</option>

                      }
                      <option value="USD-BRL">USD-BRL (Dólar Comercial)</option>
                      <option value="USDT-BRL">USDT-BRL (Dólar Turismo)</option>
                      <option value="CAD-BRL">CAD-BRL (Dólar Canadense)</option>
                      <option value="AUD-BRL">AUD-BRL (Dólar Australiano)</option>
                      <option value="EUR-BRL">EUR-BRL (Euro)</option>
                      <option value="GBP-BRL">GBP-BRL (Libra Esterlina)</option>
                      <option value="ARS-BRL">ARS-BRL (Peso Argentino)</option>
                      <option value="JPY-BRL">JPY-BRL (Iene Japonês)</option>
                      <option value="CHF-BRL">CHF-BRL (Franco Suíço)</option>
                      <option value="CNY-BRL">CNY-BRL (Yuan Chinês)</option>
                      <option value="YLS-BRL">YLS-BRL (Novo Shekel Israelense)</option>
                      <option value="BTC-BRL">BTC-BRL (Bitcoin)</option>
                      <option value="LTC-BRL">LTC-BRL (Litecoin)</option>
                      <option value="ETH-BRL">ETH-BRL (Ethereum)</option>
                      <option value="XRP-BRL">XRP-BRL (Ripple)</option>
                    </select>
                  </div>
                </Col>
                <Col xs="2">
                  <label>Data Inicial</label>
                  <FaRegCalendar /><DatePicker dateFormat="dd/MM/yyyy" className="mr-sm-2 form-control" selected={dataInicial} onChange={date => setDataInicial(date)} />
                </Col>
                <Col xs="2">
                  <label>Data Final</label>
                  <FaRegCalendar /><DatePicker dateFormat="dd/MM/yyyy" className="mr-sm-2 form-control" selected={dataFinal} onChange={date => setDataFinal(date)} />
                </Col>
                <Col xs="2">
                  <label>Indicador</label>
                  <select className="custom-select mr-sm-2" onChange={function (event) {
                    setIndicador(event.target.value);
                    setIndicadorTexto(event.target.value);
                  }}>
                    {(indicadorTexto &&
                      <option value="">{indicadorTexto}</option>)
                      ||
                      <option value="">Escolha uma opção</option>
                    }
                    <option value="bid" name="Valor de compra">Valor de compra</option>
                    <option value="ask">Valor de venda</option>
                    <option value="high">Valor Máximo</option>
                    <option value="low">Valor Mínimo</option>
                    <option value="pctChange">Variação %</option>
                  </select>
                </Col>
                <Col xs="1"  >
                  <Button className="bg-success" onClick={() => GerarRelatorio()}>
                    <FaSearchDollar />
                Pesquisar
                 </Button>
                </Col>

                {erroValidacaoCampos &&
                  <Toast onClose={() => setErroValidacaoCampos(null)} delay={4000} autohide className="bg-warning">
                    <Toast.Header>
                      <strong className="mr-auto">{erroValidacaoCampos}</strong>
                      <small>😞</small>
                    </Toast.Header>
                    <Toast.Body className="bg-white text-warning">
                      Por favor, faça uma nova busca.
              </Toast.Body>
                  </Toast>
                }

                {erro &&
                  <Toast onClose={() => setErroValidacaoCampos(null)} delay={4000} autohide className="bg-danger">
                    <Toast.Header>
                      <strong className="mr-auto">{erro}</strong>
                    </Toast.Header>
                    <Toast.Body className="bg-white text-danger">
                      Por favor, faça uma nova busca.
              </Toast.Body>
                  </Toast>
                }
              </Row>
            </Container>
          </Form>
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
                  <strong> Developed by: Davi L. Carasilo and Pedro Spinardi -- 2021 A Fatec’s project </strong>
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



  return (
    <>
      <Cabecalho />
      <Corpo />
      <Rodape />
    </>
  );
}


export default App;
