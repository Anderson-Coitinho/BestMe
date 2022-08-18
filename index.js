const questions = [   //perguntas
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que poderia fazer para melhorar",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje",
]

const ask = (index = 0) => {    
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask() //chama as perguntas

const answers = []
process.stdin.on("data", data =>{
    //process.stdout.write( data.toString().trim() + "\n") //permite responder a pergunta
    answers.push(data.toString().trim())
    if (answers.length < questions.length){//verificar o tamanho do answers é menor que question(quantidade de responta menor do que de perguntas)
        ask(answers.length) //roda a proxima pergunta
    } else {
        //console.log(answers) //mostra as respostas
        process.exit() //termina o processo
    }
})

process.on('exit', () => {
    console.log(" Bacana  ")

    
})