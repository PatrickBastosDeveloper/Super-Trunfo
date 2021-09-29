var carta1 = {
    nome: "Bulbasauro",
    imagem: "https://img1.gratispng.com/20190516/qv/kisspng-bulbasaur-squirtle-ivysaur-charmander-venusaur-file-1bulbasaur-ag-anime-png-bulbagarden-archi-5cde2f9c8d52e4.9117313515580650525789.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}
var carta2 = {
    nome: "Darth Vader",
    imagem: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
}
var carta3 = {
    nome: "Shyriu de Dragão",
    imagem: "https://i.pinimg.com/236x/15/b8/f0/15b8f02e4a9430ae8b89fa2716eb1414--bronze-thunder.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirCartaJogador(cartaJogador)
}



function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }

}

function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
   
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
      ) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
      } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
      }
      divResultado.innerHTML = htmlResultado;
     
      document.getElementById("btnJogar").disabled = true;
      exibirCartaMaquina()
    }

function exibirCartaJogador () {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id ='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaJogador.atributos[atributo] + "<br>"
    }
    var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p> `

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto +  "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
   
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
   
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  //Adicionar um baralho com várias outras cartas
  //Quando vencer você ganha a carta do adversário e acaba o jogo quando algum dos jogadores ficar sem carta
  //