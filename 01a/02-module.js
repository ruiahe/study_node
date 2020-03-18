// 查询系统内存
const os = require('os')
const mem = os.freemem() / os.totalmem() * 100
console.log(`内存占用率${mem.toFixed(2)}%`)

// 
const download = require('download-git-repo')
download('https://github.com/ruiahe/vue-programm.git', '../test', err => {
    console.log(err ? 'Error' : 'Success')
})