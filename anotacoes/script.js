const cxAdArea = document.querySelector('#cx-ad-area')
cxAdArea.style.display = 'none'
const areas = document.querySelector('#areas')
let nomeArea = ''
const aviso = document.querySelector('#aviso')

function mostrarAdArea(){
    cxAdArea.style.display = 'block'
}
function adArea(){
    const titulo = document.querySelector('#titulo')
    nomeArea = titulo.value
    const area = document.createElement('button')
    area.classList.add('area')
    areas.appendChild(area)
    area.innerText = titulo.value
    area.addEventListener('click', exArea)

    cxAdArea.style.display = 'none'
    titulo.value = ''
}
function escAdArea(){
    cxAdArea.style.display = 'none'
    const titulo = document.querySelector('#titulo')
    titulo.value = ''
}

function exArea(){
    aviso.style.display = 'none'

    const tituloArea = document.querySelector('#titulo-area')
    tituloArea.innerText = nomeArea

    const liFixo = document.querySelector('#li-fixo')
    liFixo.style.display = 'block'
}