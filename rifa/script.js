const adreg = document.getElementById('adreg')
adreg.style.display = 'none'
const adrif = document.getElementById('adrif')
adrif.style.display = 'none'
const rifas = []
const guia = []

function adicionar(){
    const ad = document.getElementById('ad')
    if(adreg.style.display == 'none'){
        adreg.style.display = 'block'
        ad.value = 'Fechar'
    } else {
        adreg.style.display = 'none'
        ad.value = 'Adicionar'

    }
}

function concluir(){
    let nome = document.getElementById('nome')
    let tel = document.getElementById('tel')
    let cxnumr = document.getElementById('numr')
    const numr = Number(cxnumr.value)

    if (nome.value == '' || tel.value == '' || numr == 0) {
        alert ('alguma informação não foi preenchida. Verifique o registro')
    } else {
        for(i = 0; i < numr; i++){
            rifas.push(
`vencedor: ${nome.value}
telefone: ${tel.value}`
            )
        }

        const li = document.createElement('li')
        li.innerText =
`Comprador: ${nome.value}
Telefone: ${tel.value}
Número de rifas compradas: ${numr}`
        adrif.appendChild(li)

            guia.push(
`Comprador: ${nome.value}
Telefone: ${tel.value}
Número de rifas compradas: ${numr}`
            )
            guia.push(
`vencedor: ${nome.value}
telefone: ${tel.value}`
            )
            guia.push(numr)

        nome.value = ''
        tel.value = ''
        cxnumr.value = ''
    }
}

function exibir(){
    const ex = document.getElementById('ex')

    if (adrif.style.display == 'none'){
        ex.value = 'Esconder rifas vendidas'
        adrif.style.display = 'block'
    } else {
        ex.value = 'Exibir rifas vendidas'
        adrif.style.display = 'none'
    }
}

function excluir(){
    const lis = document.querySelectorAll('li')
    const exrif = document.getElementById('exrif')

    if (exrif.value == 'excluir rifas'){
        exrif.value = 'concluir exclusão'

        lis.forEach(li => {
            li.addEventListener('click', selecionar)
            li.classList.add('selecionado')
        })
    } else {
        exrif.value = 'excluir rifas'

        lis.forEach(li => {
            li.removeEventListener('click', selecionar)
            li.classList.remove('selecionado')

            if(li.classList == 'escolhido'){
                const indiceG = guia.indexOf(li.innerText)
                const indiceR = rifas.indexOf(guia[indiceG +1])
                rifas.splice(indiceR, guia[indiceG + 2])
                guia.splice(indiceG, 3)
                li.remove()
            }
        })
    }
}

function selecionar(){
    if(this.classList == 'escolhido'){
        this.classList.remove('escolhido')
        this.classList.add('selecionado')
    } else {
        this.classList.add('escolhido')
        this.classList.remove('selecionado')
    }
}

function sortear(){
    const aleatorio = rifas[Math.floor(Math.random() * rifas.length)];
    alert(`O vencedor é o ${aleatorio}`)
}