const vinho = document.querySelectorAll('.vinho');

vinho.forEach(vinho => {

    vinho.addEventListener('mouseenter', () =>{

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
          }

        const vinhoSelecionado = document.querySelector('.selecionado');
        vinhoSelecionado.classList.remove('selecionado');

        vinho.classList.add('selecionado');

        const imagemVinhoGrande = document.querySelector('.vinho-grande');
        const idVinho = vinho.attributes.id.value;
        imagemVinhoGrande.src = `./src/images/card-${idVinho}.png`;

        const nomeVinho = document.getElementById('nome-vinho');
        nomeVinho.innerText = vinho.getAttribute('data-name');

        const descricaoVinho = document.getElementById('descricao-vinho');
        descricaoVinho.innerText = vinho.getAttribute('data-description');
    })
})