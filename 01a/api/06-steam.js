const fs = require('fs')
const rs = fs.createReadStream('./page.png')
const ws = fs.createWriteStream('./img.png')
rs.pipe(ws)