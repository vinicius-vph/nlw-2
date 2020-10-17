    // Servidor 
const express = require('express') // acessando o servidor criado
const server = express() // acessando o servidor criado já executando

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configurar nunjuncks, manipular os htmls (template engine)   
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// apontando para o servidor o caminho dos arquivos estaticos(css, scripts, images)
.use(express.static("public")) 
// ação criada, apontado a requisição ao ser recebida , 
// qual tipo de resposta dar e apontando o caminho, da
// função que vai realizar o tratamento
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5555) // porta aberta do servidor, start do servidor
