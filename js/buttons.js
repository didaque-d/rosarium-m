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

function avancar() {
    if(quantidadeCliques < 20){
        quantidadeCliques++;
        console.log(quantidadeCliques);
        valores();
        atualizarBarra(5);
    }
}

function voltar() {
    if(quantidadeCliques > 0){
        quantidadeCliques--;
        console.log(quantidadeCliques);
    }
}
function valores(){
        let posicao = quantidadeCliques * 100;
        document.getElementsByClassName('imagens')[0].style.right = posicao + '%';
        console.log(posicao);
        if(quantidadeCliques % 5 == 0 && quantidadeCliques < 20){
            document.getElementById("coroa").innerHTML = coroa[qtdCoroa];
            qtdCoroa++;
            console.log(qtdCoroa);
        }
        document.getElementById("misterios").innerHTML = misterios[quantidadeCliques];

        if(quantidadeCliques == 1){
            document.getElementsByClassName('ocultar')[0].style.display = 'block';
        }
}
function retroceder(){
    quantidadeCliques = 0;
    qtdCoroa = 0;
    document.getElementsByClassName('ocultar')[0].style.display = "none";
    valores();
    atualizarBarra();
}
function mostrarTela1(){
    document.getElementById("inicio").style.display = "block";
    document.getElementsByClassName('controle')[0].style.display = "flex";
    document.getElementById("tela-lista").style.display = "none";
    document.getElementById("tela-sobre").style.display = "none";
}
function mostrarTela2(){
    document.getElementById("inicio").style.display = "none";
    document.getElementsByClassName('controle')[0].style.display = "none";
    document.getElementById("tela-lista").style.display = "flex";
    document.getElementById("tela-sobre").style.display = "none";
}
function mostrarTela3(){
    document.getElementById("inicio").style.display = "none";
    document.getElementsByClassName('controle')[0].style.display = "none";
    document.getElementById("tela-lista").style.display = "none";
    document.getElementById("tela-sobre").style.display = "block";

}
const lista = [];
let index = 0;
function guardar(){
    index++;
    const texto = document.getElementById("txt").value;
    if(texto != ""){
         lista.push(texto);
         document.getElementById("anotar").style.display = "block";
         
         document.getElementById("anotar").innerHTML += `<li>${lista[index - 1]} </li>`;
         document.getElementById("citar").innerHTML ="Reze, espere e não se preocupe! <br> - São Padre Pio";

         console.log(index);
         console.log(lista);
        
    }else{
        alert("Escreva alguma intenção!");
    }
}
function remover(){
    if(index > 0){
        index--;
    }
    lista.pop();
    document.getElementById("anotar").innerHTML = "";
    for(i = 0; i < index; i++){
        document.getElementById("anotar").innerHTML += `<li>${lista[i]} </li>`;
    }
    console.log(lista);
    console.log(index);
}

function atualizarBarra(valor){
    valor = 5 * quantidadeCliques;
    document.getElementById("barra-progresso").style.width = valor + "%";
    if(quantidadeCliques == 20){
        document.getElementById("barra").style.borderColor = "green";
        document.getElementById("barra-progresso").style.backgroundColor = "green";
    }
    else{
        document.getElementById("barra").style.borderColor = "lightskyblue";
        document.getElementById("barra-progresso").style.backgroundColor = "lightskyblue";
    }
}