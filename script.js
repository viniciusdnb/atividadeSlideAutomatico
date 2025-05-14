document.addEventListener("DOMContentLoaded", function () {
    var ul = document.querySelector('ul');
    var li = ul.querySelectorAll('li');
    //variavel inicial da contagem dos elementos contido na listagem ul
    var i = 0;

    //limit para começar a decrementar o i
    //e voltar um a um dos elementos
    var limit = false;
    
    //funcao dentro do bloco de evento 
    //utiliza as proprias variaveis do bloco

    function startSlide() {
        return temporizador = setInterval(function () {
            ul.style.setProperty('--selected-item', i);

            //enquanto o i menor que o tamanho dos elementos
            // e negar o valor do limit para ser verdadeior
            //incrementa o i
            if (i < li.length && !limit) {
                i++;
            }

            //se o i é igual ao numero maximo de elementos 
            //o limite recebe verdadeiro
            if (i == li.length) {
                limit = true;
            }

            //o limite é verdadeiro começa a decrementar o  i
            if (limit) {
                i--;
            }

            //se o i menor ou igual a 0 
            //limit é falso
            //e no proximo laço o i volta a incrementar

            if (i <= 0) {
                limit = false;
            }
        }, 2000)


    }

    
    startSlide()

    ul.addEventListener("mouseenter", function () {
        
        clearInterval(temporizador);

    })

    ul.addEventListener('mouseleave', function () {
        startSlide()
    })
})

