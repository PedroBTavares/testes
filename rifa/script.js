const ad = document.getElementById('ad')
const ex = document.getElementById('ex')
// botões.

const adreg = document.getElementById('adreg')
adreg.style.display = 'none'
const adrif = document.getElementById('adrif')
adrif.style.display = 'none'
// conteúdo dos botões.

const rifas = []
const lis = []

function adicionar (){
    if (adreg.style.display == 'none'){
        adreg.style.display = 'block'
        ad.value = 'Cancelar'
    } else {
        adreg.style.display = 'none'
        ad.value = 'Adicionar'
        let nome = document.getElementById('nome')
        let tel = document.getElementById('tel')
        let cxnumr = document.getElementById('numr')
        //let serie = document.getElementById('serie')
        nome.value = ''
        tel.value = ''
        cxnumr.value = NaN
        //serie.value = ''
        adreg.style.display = 'none'
    }
}
// expõe e esconde as ferramentas para registro de rifas.

function exibir (){
    if (adrif.style.display == 'none'){
        ex.value = 'Esconder rifas vendidas'
        adrif.style.display = 'block'
    } else {
        ex.value = 'Exibir rifas vendidas'
        adrif.style.display = 'none'
    }
}
// expõe e esconde as rifas vendidas.

function concluir (){
    let nome = document.getElementById('nome')
    let tel = document.getElementById('tel')
    let cxnumr = document.getElementById('numr')
    let numr = Number(cxnumr.value)
    //let serie = document.getElementById('serie')
    if (nome.value == '' || tel == 0 || numr == 0 /*&& serie.value == ''*/) {
        alert ('alguma informação não foi preenchida. Verifique o registro')
    } else {
        adreg.style.display = 'none'
        ad.value = 'Adicionar'

        for (i = 0; i < numr; i++) {
            rifas.push(
`comprador: ${nome.value}
telefone: ${tel.value}`
        )
        }
        const li = document.createElement('li')
        li.innerText = `Comprador: ${nome.value}
Telefone: ${tel.value}
${numr} rifas compradas.`
        adrif.appendChild(li)
        adrif.classList.add('li')
        //adiciona um li

        lis.push(li)
        // adiciona os li ao array lis

        const indiceLi = lis.indexOf(li)
        const rifa = rifas[rifas.length - 1]
        const indiceRifa = rifas.indexOf(rifa)
        // pega os índices necessários

        lis.splice(indiceLi + 1, 0, indiceRifa)
        lis.splice(indiceLi + 2, 0, numr)
        // adiciona o indice do valor do li que está no array rifa e o número de rifas compradas ao array de lis
        alert(lis)

        nome.value = ''
        tel.value = ''
        cxnumr.value = ''
        //serie.value = ''
    }
}
// faz todo o processo interno de registro.

function excluir (){
    const lis = document.querySelectorAll('li')
    alert(lis.length)
    lis.forEach((li) => {
        li.classList.add('selecionado')
    })
}
/*const lis = document.querySelectorAll('li')
lis.forEach((li) => {
    li.addEventListener('click', selecionar())
})*/

function sortear (){
    const aleatorio = rifas[Math.floor(Math.random() * rifas.length)];
    alert(`O vencedor é o ${aleatorio}`)
}
// sorteia o vencedor