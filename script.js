const locais = [
    {titulo: "Egito", descricao: "As famosas piramides do egito"},
    {titulo: "Roma", descricao: "O coliseu da Roma"}
]
let frente = document.getElementById('frente')
let tras = document.getElementById('tras')
var i = 0;

    frente.onclick = () => mudar_indice(frente);
    tras.onclick = () => mudar_indice(tras);

function mudar_indice(sentido){
    if(sentido == frente && i <locais.length){
        i++;
    }
    else if(sentido == tras && i > 0){
        i--
    }
    mudar_local();
}
function mudar_local(){
       let titulo = document.querySelector(".local");
       let descricao = document.querySelector(".descricao");
       titulo.textContent = locais[i].titulo;
       descricao.textContent = locais[i].descricao;
}