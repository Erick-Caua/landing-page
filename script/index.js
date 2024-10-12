const frm = document.querySelector("form")
const calcular = document.querySelector(".btn-calcular")
const tbm = document.querySelector("#tbm")
const gastoCal = document.querySelector("#gastCal")

calcular.addEventListener("click", (e) => {
    e.preventDefault();

    let idade = frm.idade.value
    let peso = frm.peso.value
    let sexo = frm.sexo.value
    let altura = frm.altura.value
    let atividadeFisica = frm.exercicio.value
    let taxaMetabolica = 0
    let gastoCalorico = 0




    if (idade === '' || peso === '' || sexo === '' || altura === '' || atividadeFisica === "") {

        alert(`Preencha todos os campos`)
    } else {
        if (sexo === "homem") {
            taxaMetabolica = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
        } else if (sexo === "mulher") {
            taxaMetabolica = 447.593 + (9.247 * peso) + (3.096 * altura) - (4.330 * idade)
        }

        tbm.textContent = `Sua taxa Metabolica é ${taxaMetabolica.toFixed(3)} `;
        switch (atividadeFisica) {
            case "leve":
                gastoCalorico = taxaMetabolica * 1.55
                return gastoCal.textContent = `Seu gasto Calórico é ${gastoCalorico.toFixed(3)} `;
            case "moderada":
                gastoCalorico = taxaMetabolica * 1.84
                return gastoCal.textContent = `Seu gasto Calórico é ${gastoCalorico.toFixed(3)} `;
            case "intensa":
                gastoCalorico = taxaMetabolica * 2.2
                return gastoCal.textContent = `Seu gasto Calórico é ${gastoCalorico.toFixed(3)} `;
        }

    }




})

function bloquearSinais(e) {
    const char = String.fromCharCode(e.which);
    
    // Verificar se o caractere não é um número de 0 a 9
    if (!/[0-9]/.test(char)) {
      return false; // Bloqueia a inserção de qualquer caractere que não seja numérico
    }
  }


