const locais = [
    {titulo: "Egito", img: "egito.jpg",descricao: "As Pirâmides de Gizé estão localizadas nos arredores do Cairo e são um dos maiores símbolos da civilização egípcia antiga. Construídas há cerca de 4.500 anos, durante a IV Dinastia, elas serviam como túmulos para os faraós Quéops, Quéfren e Miquerinos. A maior delas, a Pirâmide de Quéops, é uma das Sete Maravilhas do Mundo Antigo e a única que ainda existe. Essas estruturas impressionam pela precisão matemática, pelo alinhamento astronômico e pelo enorme esforço humano envolvido em sua construção."},
    {titulo: "O Coliseu", img: "roma.avif", descricao: "O Coliseu de Roma, também conhecido como Anfiteatro Flaviano, foi inaugurado no ano 80 d.C. e é um dos maiores exemplos da engenharia romana. Com capacidade para cerca de 50 mil espectadores, o Coliseu era usado para combates de gladiadores, execuções públicas e encenações de batalhas. Sua estrutura em arcos e concreto influenciou profundamente a arquitetura ocidental. Atualmente, é um dos monumentos mais emblemáticos da Roma Antiga e um importante símbolo histórico e cultural da Itália."},
    {titulo: "Stonehenge", img: "Stonehenge.webp", descricao: "Stonehenge é um monumento megalítico localizado no sul da Inglaterra, construído entre aproximadamente 3000 e 2000 a.C.. Ele é formado por grandes blocos de pedra dispostos em círculos concêntricos. Embora sua função exata ainda seja debatida, acredita-se que Stonehenge tenha sido usado para rituais religiosos, cerimônias funerárias e observações astronômicas, especialmente relacionadas aos solstícios. O transporte e a organização das pedras demonstram um notável conhecimento técnico das sociedades pré-históricas."},
    {titulo: " Machu Picchu", img: "machu-picchu.jpg", descricao: "Machu Picchu é uma antiga cidade inca situada no topo das montanhas dos Andes peruanos, a cerca de 2.400 metros de altitude. Construída no século XV, durante o reinado do imperador Pachacuti, a cidade provavelmente teve funções religiosas, políticas e astronômicas. O local é famoso por sua arquitetura em pedra perfeitamente encaixada, seus terraços agrícolas e por sua integração harmoniosa com a paisagem natural. Redescoberta em 1911, Machu Picchu é hoje um dos sítios arqueológicos mais visitados do mundo."}
]
let frente = document.getElementById('frente')
let tras = document.getElementById('tras')

frente.onclick = expandir_card;

tras.onclick = () => {
    const container = document.querySelector(".coleção-de-imagens");
    container.insertBefore(
        container.lastElementChild,
        container.firstElementChild
    );
    expandir_card();
};
function mudar_local(card){

       const cards = [...document.querySelectorAll(".card")];
       const i = Number(card.dataset.index);
      const conteudo = document.querySelector(".container");
       let titulo = document.querySelector(".local");
       let descricao = document.querySelector(".descricao");
        conteudo.classList.remove("show");
    void conteudo.offsetWidth;
   conteudo.classList.add("show");
       titulo.textContent = locais[i].titulo;
       descricao.textContent = locais[i].descricao;
        setTimeout(() => {
        document.body.style.backgroundImage = `url(${card.src})`;
       }, 900)
}
function expandir_card (){
    const container = document.querySelector(".coleção-de-imagens");
    const card = container.firstElementChild;
    mudar_local(card)
    card.classList.add("expandir");
    setTimeout(() => {
        card.classList.remove("expandir");
        container.appendChild(card);
 
       }, 1000)
      
}