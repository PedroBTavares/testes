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
        } else {
            txtvisor.value += input
        }
    })
})