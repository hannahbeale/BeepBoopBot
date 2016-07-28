const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const colors = require('colors');

const app = express()
const port = process.env.PORT || 9909
app.use(express.static(path.join(__dirname, '/../public')))
// app.use(favicon(path.join(__dirname, '/../public/favicon.ico')))

console.log('********************************************'.grey)
console.log('Server status: '.yellow + 'Online'.green)
console.log('********************************************'.grey)
console.log('B3 is listening on port: '.yellow + port);
console.log('********************************************'.grey)
console.log('Boop, Beep, Bot...'.cyan)
console.log('Robots are ready!'.cyan)
console.log('********************************************'.grey)
app.listen(port)
