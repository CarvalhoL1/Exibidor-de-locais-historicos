const locais = [
    {titulo: "Egito", img: "egito.jpg",descricao: "As Pirâmides de Gizé estão localizadas nos arredores do Cairo e são um dos maiores símbolos da civilização egípcia antiga. Construídas há cerca de 4.500 anos, durante a IV Dinastia, elas serviam como túmulos para os faraós Quéops, Quéfren e Miquerinos. A maior delas, a Pirâmide de Quéops, é uma das Sete Maravilhas do Mundo Antigo e a única que ainda existe. Essas estruturas impressionam pela precisão matemática, pelo alinhamento astronômico e pelo enorme esforço humano envolvido em sua construção."},
    {titulo: "O Coliseu", img: "roma.avif", descricao: "O Coliseu de Roma, também conhecido como Anfiteatro Flaviano, foi inaugurado no ano 80 d.C. e é um dos maiores exemplos da engenharia romana. Com capacidade para cerca de 50 mil espectadores, o Coliseu era usado para combates de gladiadores, execuções públicas e encenações de batalhas. Sua estrutura em arcos e concreto influenciou profundamente a arquitetura ocidental. Atualmente, é um dos monumentos mais emblemáticos da Roma Antiga e um importante símbolo histórico e cultural da Itália."},
    {titulo: "Stonehenge", img: "Stonehenge.webp", descricao: "Stonehenge é um monumento megalítico localizado no sul da Inglaterra, construído entre aproximadamente 3000 e 2000 a.C.. Ele é formado por grandes blocos de pedra dispostos em círculos concêntricos. Embora sua função exata ainda seja debatida, acredita-se que Stonehenge tenha sido usado para rituais religiosos, cerimônias funerárias e observações astronômicas, especialmente relacionadas aos solstícios. O transporte e a organização das pedras demonstram um notável conhecimento técnico das sociedades pré-históricas."},
    {titulo: " Machu Picchu", img: "machu-picchu.jpg", descricao: "Machu Picchu é uma antiga cidade inca situada no topo das montanhas dos Andes peruanos, a cerca de 2.400 metros de altitude. Construída no século XV, durante o reinado do imperador Pachacuti, a cidade provavelmente teve funções religiosas, políticas e astronômicas. O local é famoso por sua arquitetura em pedra perfeitamente encaixada, seus terraços agrícolas e por sua integração harmoniosa com a paisagem natural. Redescoberta em 1911, Machu Picchu é hoje um dos sítios arqueológicos mais visitados do mundo."}
]
let frente = document.getElementById('frente')
let tras = document.getElementById('tras')
var i = 0;
 mudar_local();
    frente.onclick = () => mudar_indice(frente);
    tras.onclick = () => mudar_indice(tras);

function mudar_indice(sentido){
    if(sentido == frente && i < locais.length - 1){
        i++;
    }
    else if(sentido == frente && i == locais.length - 1){
        i = 0;
    }
    else if(sentido == tras && i > 0){
        i--;
    }
    else if(sentido == tras && i == 0){
        i = locais.length - 1;
    }
    mudar_local();
}
function mudar_local(){
       let titulo = document.querySelector(".local");
       let descricao = document.querySelector(".descricao");
       let cards = document.querySelectorAll(".card");
       titulo.textContent = locais[i].titulo;
       descricao.textContent = locais[i].descricao;
       const ordem = [...locais.slice(i), ...locais.slice(0, i)];
       const container = document.querySelector(".container");
       container.classList.remove('show');
       void container.offsetWidth;
       container.classList.add("show");
       cards.forEach((card, i) => {
            card.src = ordem[i].img;
       })

       let card_atual = cards[0]
       expandir_card(card_atual);
       setTimeout(() => {
        document.body.style.backgroundImage = `url(${locais[i].img})`;
        card_atual.classList.remove("expandir", "ativo");
       }, 1000)
}
function expandir_card (card){
    const rect = card.getBoundingClientRect();
    const centroX = window.innerWidth/2;
    const centroY = window.innerHeight/2;
    const offsetX = centroX - (rect.left + rect.width / 2);
    const offsetY = centroY - (rect.top + rect.height / 2);
    card.style.transformOrigin = "center center";
    card.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(5)`;
    setTimeout(() => {
        document.body.style.backgroundImage = `url(${card.src})`;
        card.style.transform = "";
    }, 1000)


}