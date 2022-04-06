let aprovados = ['Ragnar', 'Ivar', 'Bjorn'] //ARRAY É UMA ESTRURUA INDEXADA  PARTIR DO 0
console.log(aprovados[0])

aprovados.push('Ubbe', 'Floki', 'Horik', 'Sigurd')
console.log(aprovados)

const iniciais = aprovados.map(function retornarInicial(inicialAlunos) {
    return inicialAlunos[0]
})
console.log(iniciais)

const sort = aprovados.sort()
console.log(sort)

const splice = aprovados.splice(1, 1, 'Excluir e Incluir novo elemento')
console.log(aprovados)