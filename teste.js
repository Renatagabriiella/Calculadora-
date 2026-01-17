function calcular() {

    var campoaltura = document.getElementById('altura')
    var campopeso = document.getElementById('peso')
    var sexo = document.getElementsByName('radsex')
    var res = document.getElementById('resultado')



    if (campoaltura.value == '' || campopeso.value == '') {
        alert('Preencha todos os campos!')
        return
    }

    // --- VALIDAÇÃO DO SEXO ---
    if (!sexo[0].checked && !sexo[1].checked) {
    alert('Selecione o sexo!')
    return
}

    // --- TRATAMENTO DA ALTURA ---
    let altura = campoaltura.value.replace(',', '.')
    altura = Number(altura)

    // Se for maior que 3, considera cm
    if (altura >= 3) {
        altura = altura / 100
    }

    var peso = Number(campopeso.value)

    const imc = peso / (altura * altura)

    let genero = ''
    let mensagem = ''

    if (sexo[0].checked) {
        genero = 'Masculino'
    } else if (sexo[1].checked) {
        genero = 'Feminino'
    }



    if (imc < 18.5) {
        mensagem = `Você está <strong> abaixo do peso </strong>`
    } else if (imc < 24.9) {
        mensagem = `Você está no <strong> peso normal </strong>`
    } else if (imc < 29.9) {
        mensagem = `Você está com <strong> sobrepeso </strong>`
    } else {
        mensagem = `Você está com <strong> obesidade </strong>`
    }

    res.innerHTML = `Você é do sexo ${genero}, seu IMC é <strong>${imc.toFixed(2)}</strong>, ${mensagem}!`
}


