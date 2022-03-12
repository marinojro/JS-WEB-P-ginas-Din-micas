function tocaSom(idAudio) {
    const elemento = document.querySelector(idAudio)
    //caso o elemento seja diferente de nulo ou tenha a tag <audio> é dado o play()
    if (elemento /*!= null (o js reconhece se o valor é nulo)*/ && elemento.localName === 'audio') {
        elemento.play()
    } else {
        //condição para tratar o código, caso for inserido um elemento nulo, ou seja, que não tenha a classe da tecla, é retornado no console um aviso 
        console.log('elemento não encontrado')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla'); //cria uma lista de elementos referente a classe tecla


for (let c = 0; c < listaDeTeclas.length; c++) {
    const tecla = listaDeTeclas[c]; //atribui cada elemento da lista e atribui para a constante
    const classeTecla = tecla.classList[1]; //atribui o segundo elemento da propriedade classList (class do elemento)
    const idAudio = `#som_${classeTecla}` //template string. Cria uma string dinamicamente, para isso deve estar entre `crazes` e a variável entre {colchetes}

    tecla.onclick = function () { //ao clicar na tecla chama a função anônima
        tocaSom(idAudio) //chama a função com um parâmetro da id do <audio>
    }

    //Para utiliziar verificar todos os parâmetros do evento, basta inserir console.log('evento'). Ao clicar na tecla irá mostar no console do navegador todas as propriedades da tecla corresponte, inclusive o 'code:' utilizado aqui.
    //O nome do evento é opcional, os mais utilizados são 'e' ou 'event'.
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}