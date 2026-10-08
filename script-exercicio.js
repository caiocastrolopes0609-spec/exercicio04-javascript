const missoes = document.querySelectorAll(".missao");

missoes.forEach(function(missao) {

    const detalhes = missao.querySelector(".detalhes");
    const botaoDetalhes = missao.querySelector(".botao-detalhes");
    const botaoSelecionar = missao.querySelector(".botao-selecionar");

    botaoDetalhes.addEventListener("click", function() {

        if (detalhes.hidden) {
            detalhes.hidden = false;
            botaoDetalhes.textContent = "Ocultar detalhes";
        } else {
            detalhes.hidden = true;
            botaoDetalhes.textContent = "Ver detalhes";
        }

    });

    botaoSelecionar.addEventListener("click", function() {
        missao.classList.toggle("selecionada");
    });

});