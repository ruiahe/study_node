const Koa = require('koa')
const app = new Koa()

const config = require('./conf')
const { loadModel } = require('./framwork/loader')
loadModel(config)

const rest = require('./framwork/router')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(rest)

const port = 3000
app.listen(port, () => {
  console.log(`app started at port ${port}……`)
})