const frm = document.querySelector("form")
const calcular = document.querySelector(".calcular")
const resposta = document.querySelector("#resp")

calcular.addEventListener("click", (e) => {
    e.preventDefault();

    let idade = frm.idade.value
    let peso = frm.peso.value
    let sexo = frm.sexo.value
    let altura = frm.altura.value
    let taxaMetabolica = 0

    if (sexo === "homem") {
       taxaMetabolica = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
    }else if(sexo === "mulher"){
        taxaMetabolica = 447.593 + (9.247 * peso) + (3.096 * altura) - (4.330 * idade) 
    }

    resposta.textContent = `Sua taxa Metabolica é ${taxaMetabolica.toFixed(3)}`;

})


