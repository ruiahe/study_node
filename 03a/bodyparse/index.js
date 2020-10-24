const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-bodyparser')
app.use(require('koa-static')(__dirname + '/'))
app.use(bodyParser)
const router = require('koa-router')()
router.post('/api/save', async(ctx, next) => {
    ctx.body = ctx.request.body
})
app.use(router.routes())
app.listen(3000)