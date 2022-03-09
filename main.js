function tocaSomPom() {
    document.querySelector("#som_tecla_pom").play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0
while (i < listaDeTeclas.length) {
    listaDeTeclas[i].onclick = tocaSomPom;
    i++
}