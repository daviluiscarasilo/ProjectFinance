(this["webpackJsonpproject-finance"]=this["webpackJsonpproject-finance"]||[]).push([[0],{104:function(e,a,t){},106:function(e,a,t){},212:function(e,a,t){"use strict";t.r(a);var c=t(2),n=t.n(c),s=t(14),l=t.n(s),r=(t(104),t(54)),i=t.n(r),o=t(23),j=t(90),b=t(16),u=(t(106),t(60)),d=t(97),O=t(98),h=t(15),m=t(38),x=t(37),v=t(99),p=t(28),f=t(95),y=t(59),g=t.n(y),B=t(96),L=(t(129),t(19)),R=t(58),N=t.n(R),D=t(94),C=t(7);var S=function(){Object(c.useEffect)((function(){}));var e=[{value:"USD-BRL",label:"USD-BRL (D\xf3lar Comercial)"},{value:"USDT-BRL",label:"USDT-BRL (D\xf3lar Turismo)"},{value:"CAD-BRL",label:"CAD-BRL (D\xf3lar Canadense)"},{value:"AUD-BRL",label:"AUD-BRL (D\xf3lar Australiano)"},{value:"EUR-BRL",label:"EUR-BRL (Euro)"},{value:"GBP-BRL",label:"GBP-BRL (Libra Esterlina)"},{value:"ARS-BRL",label:"ARS-BRL (Peso Argentino)"},{value:"JPY-BRL",label:"JPY-BRL (Iene Japon\xeas)"},{value:"CHF-BRL",label:"CHF-BRL (Franco Su\xed\xe7o)"},{value:"CNY-BRL",label:"CNY-BRL (Yuan Chin\xeas)"},{value:"YLS-BRL",label:"YLS-BRL (Novo Shekel Israelense)"},{value:"BTC-BRL",label:"BTC-BRL (Bitcoin)"},{value:"LTC-BRL",label:"LTC-BRL (Litecoin)"},{value:"ETH-BRL",label:"ETH-BRL (Ethereum)"},{value:"XRP-BRL",label:"XRP-BRL (Ripple)"}],a=[{value:"bid",label:"Valor de compra"},{value:"ask",label:"Valor de venda"},{value:"high",label:"Valor M\xe1ximo"},{value:"low",label:"Valor M\xednimo"},{value:"pctChange",label:"Varia\xe7\xe3o %"}],t=Object(c.useState)(""),s=Object(b.a)(t,2),l=s[0],r=s[1],y=Object(c.useState)(""),R=Object(b.a)(y,2),S=R[0],w=R[1],k=Object(c.useState)((new Date).setDate((new Date).getDate()-1)),M=Object(b.a)(k,2),P=M[0],A=M[1],F=Object(c.useState)(new Date),T=Object(b.a)(F,2),E=T[0],U=T[1],H=Object(c.useState)(""),Y=Object(b.a)(H,2),q=Y[0],I=Y[1],J=Object(c.useState)(),V=Object(b.a)(J,2),G=V[0],K=V[1],X=Object(c.useState)(""),_=Object(b.a)(X,2),z=_[0],Q=_[1],W=Object(c.useState)(),Z=Object(b.a)(W,2),$=Z[0],ee=Z[1],ae=Object(c.useState)(null),te=Object(b.a)(ae,2),ce=te[0],ne=te[1];function se(e){var a=new Date("1970-01-01 00:00:0");return a.setSeconds(parseInt(e)),a}function le(){var e=!0,a="";return""!==q&&""!==z&&""!==P&&""!==E||(a="Todos os campos s\xe3o obrigat\xf3rios para a pesquisa;",e&=!1),P<E||(a+="\n Data final n\xe3o pode ser menor  ou igual  a data inicial;",e&=!1),""!==a&&r(a),e}function re(){return(re=Object(j.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!le()){e.next=4;break}return a="https://economia.awesomeapi.com.br/json/daily/"+q+"/30?start_date=".concat(N()(P).format("yyyyMMDD"),"&end_date=").concat(N()(E).format("yyyyMMDD")),e.next=4,fetch(a).then((function(e){return e.json()})).then((function(e){ne(e)})).catch((function(e){w("Houve um problema na requisi\xe7\xe3o")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){var t;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"}),Object(C.jsx)("div",{className:"borda-cabecalho",variant:"dark",children:Object(C.jsx)(x.a,{className:"container-cabecalho",children:Object(C.jsxs)(m.a,{className:"align-items-center",children:[Object(C.jsx)(h.a,{xs:"1",children:Object(C.jsx)("div",{class:"card-body",children:Object(C.jsx)("h1",{children:Object(C.jsx)(f.a,{className:"logo-cabecalho"})})})}),Object(C.jsx)(h.a,{xs:"11",children:Object(C.jsx)("div",{class:"card-body",children:Object(C.jsxs)("h1",{children:[Object(C.jsx)(p.a,{className:"logo-cabecalho"})," Finance Project"]})})})]})})}),Object(C.jsx)(d.a,(t={variant:"light",activeKey:"1",justify:!0},Object(o.a)(t,"variant","tabs"),Object(o.a)(t,"defaultActiveKey","/home"),Object(o.a)(t,"className","pesquisa"),Object(o.a)(t,"variant","dark"),Object(o.a)(t,"children",Object(C.jsx)(O.a,{inline:!0,className:"formulario-cabecalho",children:Object(C.jsx)(x.a,{className:"container-cabecalho",children:Object(C.jsxs)(m.a,{className:"align-items-center row-text-align-center",children:[Object(C.jsxs)(h.a,{xs:"3",children:[Object(C.jsx)("label",{children:"Moeda"}),Object(C.jsx)(u.a,{options:e,onChange:function(e){K(e),I(e.value)},value:G})]}),Object(C.jsxs)(h.a,{xs:"2",children:[Object(C.jsx)("label",{children:"Data Inicial"}),Object(C.jsx)(p.b,{}),Object(C.jsx)(g.a,{dateFormat:"dd/MM/yyyy",className:"mr-sm-2 form-control",selected:P,onChange:function(e){return A(e)}})]}),Object(C.jsxs)(h.a,{xs:"2",children:[Object(C.jsx)("label",{children:"Data Final"}),Object(C.jsx)(p.b,{}),Object(C.jsx)(g.a,{dateFormat:"dd/MM/yyyy",className:"mr-sm-2 form-control",selected:E,onChange:function(e){return U(e)}})]}),Object(C.jsxs)(h.a,{xs:"2",children:[Object(C.jsx)("label",{children:"Indicador"}),Object(C.jsx)(u.a,{options:a,onChange:function(e){ee(e),Q(e.value)},value:$})]}),Object(C.jsx)(h.a,{xs:"1",children:Object(C.jsxs)(B.a,{className:"bg-success",onClick:function(){return function(){return re.apply(this,arguments)}()},children:[Object(C.jsx)(p.c,{}),"Pesquisar"]})}),l&&Object(C.jsxs)(L.a,{onClose:function(){return r(null)},delay:4e3,autohide:!0,className:"bg-warning",children:[Object(C.jsxs)(L.a.Header,{children:[Object(C.jsx)("strong",{className:"mr-auto",children:l}),Object(C.jsx)("small",{children:"\ud83d\ude1e"})]}),Object(C.jsx)(L.a.Body,{className:"bg-white text-warning",children:"Por favor, fa\xe7a uma nova busca."})]}),S&&Object(C.jsxs)(L.a,{onClose:function(){return r(null)},delay:4e3,autohide:!0,className:"bg-danger",children:[Object(C.jsx)(L.a.Header,{children:Object(C.jsx)("strong",{className:"mr-auto",children:S})}),Object(C.jsx)(L.a.Body,{className:"bg-white text-danger",children:"Por favor, fa\xe7a uma nova busca."})]})]})})})),t))]})}function oe(){return Object(C.jsx)("div",{className:"rodape",children:Object(C.jsx)(v.c,{className:"container-rodape",children:Object(C.jsx)("table",{className:"tabela-rodape",children:Object(C.jsx)("tbody",{children:Object(C.jsx)("tr",{children:Object(C.jsx)("td",{className:"align-bottom celula-rodape",children:Object(C.jsx)("strong",{children:" Developed by: Davi L. Carasilo and Pedro Spinardi -- 2021 A Fatec\u2019s project "})})})})})})})}function je(){return Object(C.jsx)("div",{className:"corpo",children:Object(C.jsx)(x.a,{className:"container-cabecalho",children:Object(C.jsxs)(m.a,{className:"align-items-center row-text-align-center",children:[Object(C.jsx)(h.a,{xs:"1"}),ce&&Object(C.jsx)(h.a,{xs:"10",className:"grafico",children:Object(C.jsx)(be,{})}),Object(C.jsx)(h.a,{xs:"1"})]})})})}function be(){var e=[];switch(z){case"high":e=ce.map((function(e){return Object.create({},{x:{value:se(e.timestamp)},y:{value:e.high}})}));break;case"low":e=ce.map((function(e){return Object.create({},{x:{value:se(e.timestamp)},y:{value:e.low}})}));break;case"bid":e=ce.map((function(e){return Object.create({},{x:{value:se(e.timestamp)},y:{value:e.bid}})}));break;case"ask":e=ce.map((function(e){return Object.create({},{x:{value:se(e.timestamp)},y:{value:e.ask}})}));break;case"pctChange":e=ce.map((function(e){return Object.create({},{x:{value:se(e.timestamp)},y:{value:e.pctChange}})}))}var a=n.a.useMemo((function(){return{showPoints:!0}}),[]),t=n.a.useMemo((function(){return[{primary:!0,position:"bottom",type:"time"},{position:"left",type:"linear",stacked:!0}]}),[]),c=n.a.useMemo((function(){return[{label:G.label+" | "+$.label,datums:e}]}),[]);return Object(C.jsx)(D.Chart,{data:c,series:a,axes:t,tooltip:!0})}return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ie,{}),Object(C.jsx)(je,{}),Object(C.jsx)(oe,{})]})};t(211);l.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(S,{})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.68220259.chunk.js.map