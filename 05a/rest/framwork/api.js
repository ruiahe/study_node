module.exports = {
  async init (ctx, next) {
    console.log(ctx)
    const model = ctx.app.$model[ctx.params.list]
    if (model) {
      ctx.list = model
      await next()
    } else {
      ctx.body = 'no this model'
    }
  },

  async get (ctx) {
    ctx.body = await ctx.list.find({})
  },

  async create (ctx) {
    const res = await ctx.list.create(ctx.request.body)
    ctx.body = res
  },

  async update (ctx) {
    const res = await ctx.list.updateOne({_id: ctx.params.id}, ctx.request.body)
    ctx.body = res
  },

  async del (ctx) {
    const res = await ctx.list.deleteOne({
      _id: ctx.params.id
    })
  },

  async page (ctx) {
    console.log('page...', ctx.params.page)
    ctx.body = await ctx.list.find()
  }
}