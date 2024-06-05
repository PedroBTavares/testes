const tdAll = document.querySelectorAll('td')
tdAll.forEach((td) => {
    td.addEventListener('click', function () {
        td.style.backgroundColor = 'rgb(150, 150, 150)'
        setTimeout(() => {
            td.style.backgroundColor = 'gray'
        }, 250)

        const input = td.children[0].value
        if(input == 'excluir'){
            txtvisor.value = txtvisor.value.slice(0, txtvisor.value.length -1)
        } else if (input == '=') {
            const adi = []
            const sub = []
            const mul = []
            const div = []
            for(i = 0; i < txtvisor.length; i++){
                adi.push(txtvisor.value.indexOf('+', i))
                sub.push(txtvisor.value.indexOf('-', i))
                mul.push(txtvisor.value.indexOf('x', i))
                div.push(txtvisor.value.indexOf(':', i))
                alert(adi + 'a')
                if (adi[adi.length - 2] == adi[adi.length - 1]){
                    adi.pop()
                }
                alert(adi + 'b')
                if (sub[sub.length - 2] == sub[sub.length - 1]){
                    sub.pop()
                }
                if (mul[mul.length - 2] == mul[mul.length - 1]){
                    mul.pop()
                }
                if (div[div.length - 2] == div[div.length - 1]){
                    div.pop()
                }
            }
            alert(adi + 'c')

            if(txtvisor.value == ''){
                alert('Nenhum número foi inserido.')
            } else if (adi.length == 0 && sub.length == 0 && mul.length == 0 && div.length == 0) {
                alert('Não há nenhuma operação.')
            } else {

            }
        } else {
            txtvisor.value += input
        }
    })
})

const string = 'a1a2a3a4a'
const cString = []
for(i = 0; i < string.length; i++){
    cString.push(string.indexOf('a', i))
    if(cString[cString.length-2] == cString[cString.length-1]){
        cString.pop()
    }
}
alert(cString)