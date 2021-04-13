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
import { Chart } from 'react-charts'
import { da } from 'date-fns/locale';

/**
 * Essa função contém as diretrizes de configuração e integração com o API
 * @returns Validação de dados e Relatório
 */
function App() {
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

  const opcoesIndicador = [
    { value: 'bid', label: 'Valor de compra' }
    , { value: 'ask', label: 'Valor de venda' }
    , { value: 'high', label: 'Valor Máximo' }
    , { value: 'low', label: 'Valor Mínimo' }
    , { value: 'pctChange', label: 'Variação %' }
  ]

  const opcoesRelatorio = [
    { value: 'line', label: 'Linhas' }
    , { value: 'bar', label: 'Barras' }
    , { value: 'bubble', label: 'Bolhas' }
    , { value: 'area', label: 'Áreas' }
  ]


  const [tipoRelatorio, setTipoRelatorio] = useState("");
  const [tipoRelatorioOption, setTipoRelatorioOption] = useState();


  const [erroValidacaoCampos, setErroValidacaoCampos] = useState("");
  const [erro, setErro] = useState("");
  const [dataInicial, setDataInicial] = useState(new Date(new Date().setDate(new Date().getDate() - 1)));
  const [dataFinal, setDataFinal] = useState(new Date());
  const [moeda, setMoeda] = useState("");
  const [moedaOption, setMoedaOption] = useState();
  const [indicador, setIndicador] = useState("");
  const [indicadorOption, setIndicadorOption] = useState();
  const [dadosRelatorio, setDadosRelatorio] = useState(null);


  useEffect(() => {
    if (ValidaDadosObrigatorios()) {
      GerarRelatorio();
    }
  }, [moeda, dataInicial, dataFinal, indicador])


  function TimestampParaData(timestamp) {
    var t = new Date('1970-01-01 00:00:0');
    t.setSeconds(parseInt(timestamp))
    return t;
  }
  function ValidaDadosObrigatorios() {
    return moeda !== "" && indicador !== "" && dataInicial !== "" && dataFinal !== ""
  }
  function ValidarDatas() {
    return dataInicial < dataFinal &&  Math.ceil(Math.abs(dataFinal.getTime() - dataInicial.getTime()) / (1000 * 3600 * 24)) < 30
  }
  function ValidaCampos() {
    var status = true;
    var mensagemErro = "";

    if (!ValidaDadosObrigatorios()) {
      mensagemErro = "Todos os campos são obrigatórios para a pesquisa;"
      status &= false;
    }

    if (!ValidarDatas()) {
      mensagemErro += "\n Data final não pode ser menor  ou igual  a data inicial e o intervalo não pode ser maior que 30 dias;"
      status &= false;
    }
    if (mensagemErro !== "")
      setErroValidacaoCampos(mensagemErro)

    return status;
  }

  async function GerarRelatorio() {
    if (ValidaCampos()) {
      var UrlFinance = "https://economia.awesomeapi.com.br/json/daily/" +
        moeda + `/30?start_date=${moment(dataInicial).format("yyyyMMDD")}&end_date=${moment(dataFinal).format("yyyyMMDD")}`

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
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
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
                  <label>Moeda</label>
                  <Select placeholder="Selecione" options={opcoesMoeda}
                    onChange={
                      (event) => { setMoedaOption(event); setMoeda(event.value) }
                    }
                    value={moedaOption}
                  />
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
                  <Select placeholder="Selecione" options={opcoesIndicador}
                    onChange={
                      (event) => { setIndicadorOption(event); setIndicador(event.value) }
                    }
                    value={indicadorOption}
                  />
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
        <Container className="container-cabecalho" >
          <Row className="align-items-center row-text-align-center">
            {
              dadosRelatorio
              &&
              <Col xs="1">
                <label>Gráfico</label>
                <Select options={opcoesRelatorio}
                  onChange={
                    (event) => { setTipoRelatorioOption(event); setTipoRelatorio(event.value) }
                  }
                  value={tipoRelatorioOption}
                />
              </Col>
            }
            {
              dadosRelatorio
              &&
              <Col xs="10" className="grafico" >
                <Grafico />
              </Col>
            }

            <Col xs="1"></Col>
          </Row>
        </Container>
      </div>
    )
  }




  function Grafico() {

    var pontosRelatorio = []
    switch (indicador) {
      case "high":
        pontosRelatorio = dadosRelatorio.map((dado) => Object.create({}, { x: { value: TimestampParaData(dado.timestamp) }, y: { value: dado.high } }))
        break;
      case "low":
        pontosRelatorio = dadosRelatorio.map((dado) => Object.create({}, { x: { value: TimestampParaData(dado.timestamp) }, y: { value: dado.low } }))
        break;
      case "bid":
        pontosRelatorio = dadosRelatorio.map((dado) => Object.create({}, { x: { value: TimestampParaData(dado.timestamp) }, y: { value: dado.bid } }))
        break;
      case "ask":
        pontosRelatorio = dadosRelatorio.map((dado) => Object.create({}, { x: { value: TimestampParaData(dado.timestamp) }, y: { value: dado.ask } }))
        break;
      case "pctChange":
        pontosRelatorio = dadosRelatorio.map((dado) => Object.create({}, { x: { value: TimestampParaData(dado.timestamp) }, y: { value: dado.pctChange } }))
        break;
    }

    const series = React.useMemo(
      () => ({
        showPoints: true,
        type: tipoRelatorio !== "" ? tipoRelatorio : "line"
      }),
      []
    );
    const axes = React.useMemo(
      () => [
        { primary: true, position: "bottom", type: "time" },
        { position: "left", type: "linear", stacked: true }
      ],
      []
    );



    const data = React.useMemo(
      () => [
        {
          label: moedaOption.label + " | " + indicadorOption.label,
          datums: pontosRelatorio
        }
      ],
      []
    );
    return (
      <Chart data={data} series={series} axes={axes} tooltip />
    );
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
