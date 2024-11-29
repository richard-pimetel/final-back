const lion_Aluno = require('./alunos.js')
const lion_Curso = require('./cursos.js')



const getListaDeCursos = function(){
    let listaCursos = [];

    lion_Curso.cursos.forEach(function(curso) {
        listaCursos.push(curso);
    });

    return listaCursos.length > 0 ? listaCursos : false;

}
//console.log(getListaDeCursos())

const getListaDeAlunos = function(){
    let listaAlunos = [];

    lion_Aluno.alunos.forEach(function(aluno) {
        listaAlunos.push(aluno);
    });

    return listaAlunos.length > 0 ? listaAlunos : false;
};
//console.log(getListaDeAlunos())

const getMatriculaDeAluno = function(matricula){
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
//console.log(getMatriculaDeAluno(''))

const getDSouREDES = function(siglaCurso){
    
    let listaAlunosCurso = [];
    let cursoFormatado = String(siglaCurso).toUpperCase();
    
    lion_Aluno.alunos.forEach(function(aluno) {
        if (String(aluno.curso[0].sigla).toUpperCase() == cursoFormatado) {
            listaAlunosCurso.push(aluno);
        }
    });
    
     return listaAlunosCurso.length > 0 ? listaAlunosCurso : false
};
    
//console.log(getDSouREDES(''))

const getStatus = function(filtroStatus){
    let listaAlunos = [];
    let statusFormatado = String(filtroStatus).toUpperCase();

    lion_Aluno.alunos.forEach(function(aluno) {
        if (String(aluno.status).toUpperCase() == statusFormatado) {
            listaAlunos.push(aluno);
        }
    });

    return listaAlunos.length > 0 ? listaAlunos : false
};
//console.log(getStatus(''))



const getStatusExame = function(siglaCurso, statusCurso){

        let cursoEscolhido = String(siglaCurso).toUpperCase();
        let statusFormatado = String(statusCurso).toUpperCase();
        let listaAlunosFiltrados = [];
        
        lion_Aluno.alunos.forEach(function(aluno) {
            aluno.curso.forEach(function(curso) {
                if (String(curso.sigla).toUpperCase() === cursoEscolhido) {
                    curso.disciplinas.forEach(function(disciplina) {
                        if (String(disciplina.status).toUpperCase() === statusFormatado) {
                            listaAlunosFiltrados.push(aluno)
                        }
                    })
                }
            })
        })
    
        return listaAlunosFiltrados.length > 0 ? listaAlunosFiltrados : false
    }
    
console.log(getStatusExame("DS", "EXAME"))




const getConclusao = function(siglaCurso, anoConclusao) {
    let cursoEscolhido = String(siglaCurso).toUpperCase()
    let anoEscolhido = String(anoConclusao).toUpperCase()
    let listaAlunosFiltrados = []
    let status = false
    
    lion_Aluno.alunos.forEach(function(aluno) {
         aluno.curso.forEach(function(curso) {
            if (String(curso.sigla).toUpperCase() === cursoEscolhido &&
                String(curso.conclusao).toUpperCase() === anoEscolhido) {
                listaAlunosFiltrados.push(aluno)
                status = true
            }
        })
    })
    
    return status ? listaAlunosFiltrados : status
 }




























































































































































