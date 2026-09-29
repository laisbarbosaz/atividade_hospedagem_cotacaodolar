const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

function formatarReal(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

async function buscarCotacao() {
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const dolar = dados.USDBRL;

    document.getElementById("atual").textContent = formatarReal(dolar.bid);
    document.getElementById("maximo").textContent = formatarReal(dolar.high);
    document.getElementById("minimo").textContent = formatarReal(dolar.low);
    document.getElementById("data").textContent = dolar.create_date;
  } catch (erro) {
    document.getElementById("atual").textContent = "Erro ao carregar";
    console.error("Erro na API:", erro);
  }
}

buscarCotacao();