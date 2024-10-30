function boasVindas(){
    document.write('Seja bem vindo Thiago');
}
boasVindas()

function calcIdade(ano){
    document.write(`<h1>a idade do thiago é ${2024 - ano}</h1> `)
}
calcIdade(1993)

function frequenciaAlunos(presentes, total){
return (((total - presentes)*100)/total).toFixed(0);
}

document.write(`<h1>O percentual de faltantes é: ${frequenciaAlunos(11, 19)}%</h1>`)