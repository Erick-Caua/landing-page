const frm = document.querySelector("form")
const calcular = document.querySelector(".btn-calcular")
const tbm = document.querySelector("#tbm")
const gastoCal = document.querySelector("#gastCal")
const deficit = document.querySelector(".deficit")
const objPessoa = document.querySelector(".objPessoa")

calcular.addEventListener("click", (e) => {
  e.preventDefault();

  let idade = frm.idade.value
  let peso = frm.peso.value
  let sexo = frm.sexo.value
  let altura = frm.altura.value
  let atividadeFisica = frm.exercicio.value
  let objetivo = frm.objetivo.value

  if (idade === '' || peso === '' || sexo === '' || altura === '' || atividadeFisica === "" || objetivo === "") {

    alert(`Preencha todos os campos`)
  } else {

    resultados(sexo, peso, altura, idade);
    zerarValores()
  }

})


function resultados(sexo, peso, altura, idade) {
  if (sexo === "homem") {
    taxaMetabolica = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
  } else if (sexo === "mulher") {
    taxaMetabolica = 447.593 + (9.247 * peso) + (3.096 * altura) - (4.330 * idade)
  }

  tbm.textContent = `${taxaMetabolica.toFixed(3)} kcal  `;

  gastoEnergertico(taxaMetabolica);

}

function gastoEnergertico(taxaMetabolica) {
  let atividadeFisica = frm.exercicio.value

  switch (atividadeFisica) {
    case "leve":
      gastoCalorico = (taxaMetabolica * 1.55).toFixed(3)
      gastoCal.textContent = `${gastoCalorico} kcal  `;
    case "moderada":
      gastoCalorico = (taxaMetabolica * 1.84).toFixed(3)
      gastoCal.textContent = `${gastoCalorico} kcal  `;
    case "intensa":
      gastoCalorico = (taxaMetabolica * 2.2).toFixed(3)
      gastoCal.textContent = `${gastoCalorico} kcal `;
  }

  objetivoDaPessoa(gastoCalorico)
}

function objetivoDaPessoa(gastoCalorico) {
  let objetivo = frm.objetivo.value
  if (objetivo === "emagrecimento") {
    objPessoa.textContent = `EMAGRECIMENTO`
    deficit.textContent = `${parseFloat(gastoCalorico) - 200}`
  } else if (objetivo === "hipertrofia") {
    objPessoa.textContent = `HIPERTROFIA`
    deficit.textContent = `${parseFloat(gastoCalorico) + 200} kcal`
  }

}


function zerarValores(){
  frm.idade.value = NaN
  frm.peso.value = NaN
  frm.sexo.value = NaN
  frm.altura.value = NaN

}


function bloquearSinais(e) {
  const char = String.fromCharCode(e.which);

  // Verificar se o caractere não é um número de 0 a 9
  if (!/[0-9]/.test(char)) {
    return false; // Bloqueia a inserção de qualquer caractere que não seja numérico
  }
}

function bloquearSinaisPeso(e) {
  const char = String.fromCharCode(e.which);

  // Verificar se o caractere é um número de 0 a 9 ou um ponto decimal
  if (!/[0-9.]/.test(char)) {
    return false; // Bloqueia a inserção de qualquer caractere que não seja numérico ou ponto
  }

  // Verificar se já existe um ponto decimal no campo (para evitar múltiplos pontos)
  if (char === '.' && e.target.value.includes('.')) {
    return false; // Bloqueia se já houver um ponto no valor
  }
}


