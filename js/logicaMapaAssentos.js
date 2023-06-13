// Pegando todas as classes caixa
const assentos = document.querySelectorAll('.caixa');

assentos.forEach(caixa => {
    caixa.addEventListener('click', () => {
        // Desmarcar caixa
        if(caixa.classList.contains('selecionado')) {
            caixa.classList.remove('selecionado');
        // Marcar caixa
        } else {
            caixa.classList.add('selecionado');
        }
    });
});