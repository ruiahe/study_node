(async () => {
  const { Sequelize, DataTypes } = require('sequelize')
  // 建立链接
  const sequelize = new Sequelize("kaikeba", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
  })
  // 定义模型
  const Fruit = sequelize.define('TabFruit', {
    id: {
      type: DataTypes.UUID, // 默认是从1自增，这样在后期处理数据时会有问题，所以使用UUID去生成id
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: { type: DataTypes.STRING(20), allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 }
  }, {
    timestamps: false, // 若不需要表结构中自动生成的createAt和updateAt则设置为false
    tableName: 'TBL_FRUIT'  //  自定义表名（此时表名不会自动添加s)
    // underscored: true // 将表明中自动用改为全小写的驼峰模式，如：TabFruit 变为tab_fruit
  })
  // 同步数据库
  // let ret = await Fruit.sync()  // 表结构若已存在，此时修改模型时，实际表结构不会有改变
  let ret = await Fruit.sync({force: true}) // 强制刷新表结构，若改变模型，则表结构也会改变
  // 新增数据
  ret = await Fruit.create({
    name:'香蕉',
    price: 3.5
  })

  // 查询所有数据
  ret = await Fruit.findAll()
  // console.log('findAll', JSON.stringify(ret))

  // 更新数据
  await Fruit.update({price: 4}, {
    where: {name: '香蕉2'}
  })

  // 条件查询
  const Op = Sequelize.Op
  ret = await Fruit.findAll({
    where: {price: {[Op.lt]: 5, [Op.gt]: 2}}
  })
  // console.log('ret', JSON.stringify(ret))
})()
 