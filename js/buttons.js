const misterios = [
    "Anúncio do Anjo",
    "Maria visita Isabel",
    "Nascimento de Jesus",
    "Apresentação de Jesus no templo",
    "A perda e o encontro de Jesus",
    "Batismo de Jesus",
    "As Bodas de Caná",
    "Anúncio do reino do céu",
    "A Transfiguração de Jesus",
    "A Instituição da Eucaristia",
    "A Agonia de Jesus",
    "A Flagelação de Jesus",
    "A Coroa de Espinhos",
    "Jesus carrega a Cruz",
    "A Crucificação de Jesus",
    "A Ressurreição de Jesus",
    "A Ascensão de Jesus",
    "A Vinda do Espírito Santo",
    "A Assunção de Maria",
    "A Coroação de Maria",
    "Rosário Concluído"
];
const coroa = [
    "Mistérios Gozosos",
    "Mistérios Luminosos",
    "Mistérios Dolorosos",
    "Mistérios Gloriosos"
];

let quantidadeCliques = 0;
let qtdCoroa = 0;

function verificarRange() {
    if (quantidadeCliques >= 0 && quantidadeCliques <= 4) {
        document.getElementById('coroa').innerHTML = coroa[0];
    } else if (quantidadeCliques >= 5 && quantidadeCliques <= 9) {
        document.getElementById('coroa').innerHTML = coroa[1];
    } else if (quantidadeCliques >= 10 && quantidadeCliques <= 14) {
        document.getElementById('coroa').innerHTML = coroa[2];
    } else {
        document.getElementById('coroa').innerHTML = coroa[3];
    }
}

function avancar() {
    if (quantidadeCliques < 20) {
        quantidadeCliques++;
        console.log(quantidadeCliques);
        document.getElementById('misterios').innerHTML = misterios[quantidadeCliques];
        atualizarBarra();
        atualizarTela();
        verificarRange();
    }

}

function voltar() {

    if (quantidadeCliques > 0) {
        quantidadeCliques--;
        document.getElementById('misterios').innerHTML = misterios[quantidadeCliques];
        console.log(quantidadeCliques);
    }

    atualizarTela();
    atualizarBarra();
    verificarRange();
}
//teste
function atualizarTela() {
    let posicao = quantidadeCliques * 100;
    document.getElementById("misterios").innerHTML = misterios[quantidadeCliques];
    document.getElementById("coroa").innerHTML = coroa[qtdCoroa];
    if (quantidadeCliques < 20) {
        document.getElementsByClassName('imagens')[0].style.right = posicao + '%';
    }
    console.log(posicao);
    if (quantidadeCliques > 1) {
        document.getElementsByClassName('ocultar')[0].style.display = 'block';
    }
}
function retroceder() {
    quantidadeCliques = 0;
    qtdCoroa = 0;
    document.getElementsByClassName('ocultar')[0].style.display = "none";
    atualizarBarra();
    atualizarTela();
    verificarRange();
}
function mostrarTela1() {
    document.getElementById("inicio").style.display = "block";
    document.getElementsByClassName('controle')[0].style.display = "flex";
    document.getElementById("tela-lista").style.display = "none";
    document.getElementById("tela-sobre").style.display = "none";
}
function mostrarTela2() {
    document.getElementById("inicio").style.display = "none";
    document.getElementsByClassName('controle')[0].style.display = "none";
    document.getElementById("tela-lista").style.display = "flex";
    document.getElementById("tela-sobre").style.display = "none";
}
function mostrarTela3() {
    document.getElementById("inicio").style.display = "none";
    document.getElementsByClassName('controle')[0].style.display = "none";
    document.getElementById("tela-lista").style.display = "none";
    document.getElementById("tela-sobre").style.display = "block";

}
//lógica da lista
const lista = [];
let index = 0;
function guardar() {
    index++;
    const texto = document.getElementById("txt").value;
    if (texto != "") {
        lista.push(texto);
        document.getElementById("anotar").style.display = "block";

        document.getElementById("anotar").innerHTML += `<li>${lista[index - 1]} </li>`;
        document.getElementById("citar").innerHTML = "Reze, espere e não se preocupe! <br> - São Padre Pio";

        console.log(index);
        console.log(lista);

    } else {
        alert("Escreva alguma intenção!");
    }
}
function remover() {
    if (index > 0) {
        index--;
    }
    lista.pop();
    document.getElementById("anotar").innerHTML = "";
    for (i = 0; i < index; i++) {
        document.getElementById("anotar").innerHTML += `<li>${lista[i]} </li>`;
    }
    console.log(lista);
    console.log(index);
}

function atualizarBarra() {
    valor = 5 * quantidadeCliques;
    document.getElementById("barra-progresso").style.width = valor + "%";
    if (quantidadeCliques == 20) {
        document.getElementById("barra").style.borderColor = "green";
        document.getElementById("barra-progresso").style.backgroundImage = "linear-gradient(to right, green, green";
    }
    else {
        document.getElementById("barra").style.borderColor = "lightskyblue";
        document.getElementById("barra-progresso").style.backgroundImage = "linear-gradient(to right, lightskyblue, darkblue";
    }
}

function escolherCoroa() {

    const container = document.querySelector('.opt');

    container.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const valor = event.target.value;
            const texto = event.target.textContext;
            console.log(valor);
            if (valor == 0) {
                quantidadeCliques = 0;
                console.log("misterio 1");
            } else if (valor == 1) {
                quantidadeCliques = 5;
                console.log("misterio 2");
            } else if (valor == 2) {
                quantidadeCliques = 10;
                console.log("misterio 3");
            } else {
                quantidadeCliques = 15;
                console.log("misterio 4");
            }
        }

    });

}
escolherCoroa();

function confirmarCoroa() {
    document.getElementById("intro").style.display = "none";
    atualizarTela();
    atualizarBarra();
    verificarRange();
}

function mostrarIntro(){
    document.getElementById("intro").style.display = "block";
}