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
            let condição = true
            for (pos = 0; pos < txtvisor.value.length; pos++){
                if(condição == true) {
                    if (txtvisor.value[pos] == '1' || txtvisor.value[pos] == '2' || txtvisor.value[pos] == '3' || txtvisor.value[pos] == '4' || txtvisor.value[pos] == '5' || txtvisor.value[pos] == '6' || txtvisor.value[pos] == '7' || txtvisor.value[pos] == '8' || txtvisor.value[pos] == '9' || txtvisor.value[pos] == '0' || txtvisor.value[pos] == '+' || txtvisor.value[pos] == '-' || txtvisor.value[pos] == '*' || txtvisor.value[pos] == '/' || txtvisor.value[pos] == '(' || txtvisor.value[pos] == ')') {
                        condição = true
                    } else {
                        condição = false
                    }
                }
            }
            if (!condição) {
                alert('Use somente os dígitos que estão no teclado e os parenteses')
            } else {
                const res = new Function(`return ${txtvisor.value}`)
                txtvisor.value = res()
            }
        } else {
            txtvisor.value += input
        }
    })
})