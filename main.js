function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

while(contador < 4) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    console.log(instrumento)
    
    tecla.onclick = function (){
        tocaSom(idAudio)

    }
    contador += 1;
}
