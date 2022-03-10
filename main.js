function tocaSom(idAudio) { 
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //cria uma lista de elementos referente a classe tecla


for(let c=0; c < listaDeTeclas.length; c++) {
    const tecla = listaDeTeclas[c]; //atribui cada elemento da lista e atribui para a constante
    const classeTecla = tecla.classList[1]; //atribui o segundo elemento da propriedade classList (class do elemento)
    const idAudio = `#som_${classeTecla}` //template string. Cria uma string dinamicamente, para isso deve estar entre `crazes` e a variável entre {colchetes}

    tecla.onclick = function () { //ao clicar na tecla chama a função anônima
        tocaSom(idAudio) //chama a função com um parâmetro da id do <audio>
    };
}