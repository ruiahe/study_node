const mongoose = require('mongoose')
// 
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
})

const conn = mongoose.connection
conn.on('error', () => {
  console.error('连接失败~')
})
conn.once('open', async () => {
  // 定义一个Schema
  const Schema = mongoose.Schema({
    category: String,
    name: String
  })

  const Model = mongoose.model('fruit', Schema)
  let r = await Model.create({
    category: '热带水果',
    name: '苹果'
  })

})