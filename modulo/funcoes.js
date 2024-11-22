const lion_Aluno = require('./alunos.js')
const lion_Curso = require('./cursos.js')



const getListaDeCursos = function(){
    let cursos = []
    lion_Curso.cursos.forEach(function(curso){
        cursos.push(curso)
    })
    return cursos

}
//console.log(getListaDeCursos())

const getListaDeAlunos = function(){
    let alunos = []
    lion_Aluno.alunos.forEach(function(aluno){
        alunos.push(aluno)
    })
    return alunos
}
//console.log(getListaDeAlunos())

const getInformacoesDeAluno = function(matricula){
    let inforAluno = null
    lion_Aluno.alunos.forEach(function(aluno){
    if(String(aluno.matricula) === matricula){
        inforAluno = {
            Aluno: aluno
            }

        }
    
    })
    return inforAluno || false
}
//console.log(getInformacoesDeAluno('20151001002'))

const getListaDeTodosAlunosMatriculados = function(){
    let listaDeAlunos = []
    






}
//console.log(getListaDeTodosAlunosMatriculados)

const getListaDeTodosAlunosStatus = function(){
    
}
//console.log(getListaDeTodosAlunosStatus)

const getListaDeAprovadosReprovadosExame = function(){
    
}
//console.log(getListaDeAprovadosReprovadosExame)

const getListaDeAlunosCursoEspecificado = function(){
    
}
//console.log(getListaDeAlunosCursoEspecificado)






























































































































































