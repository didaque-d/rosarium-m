const misterios = [
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
    "A Coroação de Maria"
];
const coroa = [
    "Mistérios Gozosos",
    "Mistérios Luminosos",
    "Mistérios Dolorosos",
    "Mistérios Gloriosos"
];
let quantidadeCliques = 0;

function avancar() {
    if(quantidadeCliques < 20){
        quantidadeCliques++;
        let avancarContador = document.getElementById("btnAvancar");
        console.log(quantidadeCliques);
        valores();
    }
}

function voltar() {
    if(quantidadeCliques > 0){
        quantidadeCliques--;
        console.log(quantidadeCliques);
        valores();
    }
    
}
function valores(){
    if(quantidadeCliques == 1){
        document.getElementById("misterios").innerText = misterios[0];
        document.getElementsByClassName('imagens')[0].style.right = '100%';
    }else if(quantidadeCliques == 2){
        document.getElementById("misterios").innerText = misterios[1];
        document.getElementsByClassName('imagens')[0].style.right = '200%';
    }else if(quantidadeCliques == 3){
        document.getElementById("misterios").innerText = misterios[2];
        document.getElementsByClassName('imagens')[0].style.right = '300%';
    }else if(quantidadeCliques == 4){
        document.getElementById("misterios").innerText = misterios[3];
        document.getElementById("coroa").innerText = coroa[0];
        document.getElementsByClassName('imagens')[0].style.right = '400%';
    }else if(quantidadeCliques == 5){
        document.getElementById("misterios").innerText = misterios[4];
        document.getElementById("coroa").innerText = coroa[1];
        document.getElementsByClassName('imagens')[0].style.right = '500%';
    }else if(quantidadeCliques == 6){
        document.getElementById("misterios").innerText = misterios[5];
        document.getElementsByClassName('imagens')[0].style.right = '600%';
    }else if(quantidadeCliques == 7){
        document.getElementById("misterios").innerText = misterios[6];
        document.getElementsByClassName('imagens')[0].style.right = '700%';
    }else if(quantidadeCliques == 8){
        document.getElementById("misterios").innerText = misterios[7];
        document.getElementsByClassName('imagens')[0].style.right = '800%';
    }else if(quantidadeCliques == 9){
        document.getElementById("misterios").innerText = misterios[8];
        document.getElementsByClassName('imagens')[0].style.right = '900%';
    }else if(quantidadeCliques == 10){
        document.getElementById("misterios").innerText = misterios[9];
        document.getElementById("coroa").innerText = coroa[2];
        document.getElementsByClassName('imagens')[0].style.right = '1000%';
    }else if(quantidadeCliques == 11){
        document.getElementById("misterios").innerText = misterios[10];
        document.getElementsByClassName('imagens')[0].style.right = '1100%';
    }else if(quantidadeCliques == 12){
        document.getElementById("misterios").innerText = misterios[11];
        document.getElementsByClassName('imagens')[0].style.right = '1200%';
    }else if(quantidadeCliques == 13){
        document.getElementById("misterios").innerText = misterios[12];
        document.getElementsByClassName('imagens')[0].style.right = '1300%';
    }else if(quantidadeCliques == 14){
        document.getElementById("misterios").innerText = misterios[13];
        document.getElementsByClassName('imagens')[0].style.right = '1400%';
    }else if(quantidadeCliques == 15){
        document.getElementById("misterios").innerText = misterios[14];
        document.getElementsByClassName('imagens')[0].style.right = '1500%';
    }else if(quantidadeCliques == 16){
        document.getElementById("misterios").innerText = misterios[15];
        document.getElementById("coroa").innerText = coroa[3];
        document.getElementsByClassName('imagens')[0].style.right = '1600%';
    }else if(quantidadeCliques == 17){
        document.getElementById("misterios").innerText = misterios[16];
        document.getElementsByClassName('imagens')[0].style.right = '1700%';
    }else if(quantidadeCliques == 18){
        document.getElementById("misterios").innerText = misterios[17];
        document.getElementsByClassName('imagens')[0].style.right = '1800%';
    }else if(quantidadeCliques == 19){
        document.getElementById("misterios").innerText = misterios[18];
        document.getElementsByClassName('imagens')[0].style.right = '1900%';
    }else if(quantidadeCliques == 20){
        document.getElementById("misterios").innerText = "Rosário Concluído!";
    }else if(quantidadeCliques == 0){
        document.getElementById("misterios").innerText = "Anúncio do Anjo";
        document.getElementsByClassName('imagens')[0].style.right = '0%';
    }
}
