(async () => {
  const {MongoClient: MongoDB} = require('mongodb') // mangodb是没有表结构这回事，是类似于key-value的的json集合

  // 创建客户端
  const client = new MongoDB(
    'mongodb://localhost:27017',
    {
      useNewUrlParser: true // 解决系统兼容性问题
    }
  )
  let ret 
  // 创建连接
  ret = await client.connect()
  // console.log(ret)

  const db = client.db('test')
  const fruits = db.collection('fruits')

  // 添加文档
  ret = await fruits.insertOne({
    name: '芒果',
    price: 10.5
  })

  // console.log('插入成功', JSON.stringify(ret))

  // 删除
  // await fruits.deleteMany()

  // 查询文档
  ret = await fruits.findOne()
  console.log('查询文档', JSON.stringify(ret))

  // 更新文档
  ret = await fruits.updateOne({name: '芒果'} , {
    $set: {price: 20.5}
  })

  // 指定删除
  ret = await fruits.deleteOne({name: '芒果'})
})()