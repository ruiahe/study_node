#!/usr/bin/env node
const program = require('commander')  //  引入commandar
const symbols = require('log-symbols')
const chalk = require('chalk')
program.action(() => {
  console.log('refresh ... ')
})
program.parse(process.argv)

const fs = require('fs')
const handlebars = require('handlebars')

const list = fs.readdirSync('./src/views')  //  读取views下的文件为目录
  .filter(v => v !== 'Home.vue')  //  读取的文件提出Home.vue文件
  .map(v => ({
    name: v.replace('.vue', '').toLowerCase(),
    file: v
  }))

  compile({
    list
  }, './src/router.js', './template/router.js.hbs')

  compile({
    list
  }, './src/App.vue', './template/App.vue.hbs')

  /* 
    编译过程：
    读取的文件数据对象、要写入的文件、模板文件在哪
  */
  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString(); //  读取文件
      const result = handlebars.compile(content)(meta); //  使用handlebars编译组合
      fs.writeFileSync(filePath, result); //  写入对应文件
    }
    console.log(symbols.success, chalk.green(`火箭${filePath} 创建成功`))
  }