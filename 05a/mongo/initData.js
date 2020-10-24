const mongodb = require('./models/db.js') // 引入数据
mongodb.once('connect', async () => { // 创建连接
  const col = mongodb.col('fruits') // 调用mongodb类的方法
  // 删除已存在
  await col.deleteMany() 
  const data = new Array(100).fill().map((v, i) => {
    return {name:'XXX' + i, price: i, category: Math.random() > 0.5 ? '蔬菜': '水果'}
  })

  await col.insertMany(data)
  console.log('插入测试数据成功！')
})