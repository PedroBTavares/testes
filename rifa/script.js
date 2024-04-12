const ad = document.getElementById('ad')
const ex = document.getElementById('ex')
// botões.

const adreg = document.getElementById('adreg')
adreg.style.display = 'none'
const adrif = document.getElementById('adrif')
adrif.style.display = 'none'
// conteúdo dos botões.

const rifas = []

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

function exibir(){
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

        const excluir = document.createElement('input')
        excluir.value = 'Exculir'
        excluir.style.display = 'block'
        excluir.style.textAlign = 'center'
        excluir.classList.add('botao')
        li.appendChild(excluir)

        nome.value = ''
        tel.value = ''
        cxnumr.value = ''
        //serie.value = ''
    }
}
// faz todo o processo interno de registro.

function sortear(){
    const aleatorio = rifas[Math.floor(Math.random() * rifas.length)];
    alert(rifas)
    alert(`O vencedor é ${aleatorio}`)
}
// sorteia o vencedor.