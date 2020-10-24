const { promise } = require('ora')
// 查询系统内存
const os = require('os')
const mem = os.freemem() / os.totalmem() * 100
console.log(`内存占用率${mem.toFixed(2)}%`)

// 下载git
const repo = 'github:su37josephxia/vue-template'
const desc = '../test'
const {clone} = require('./download')
clone(repo, desc)