require('source-map-support').install();
console.log('index.ts')

import * as express from 'express'
import * as path from 'path'

let app = express()

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../web/index.html'))
})

app.get('/index.js', (req, res)=>{
    res.sendFile(path.join(__dirname, '../web/index.js'))
})

app.get('/index.css', (req, res)=>{
    res.sendFile(path.join(__dirname, '../web/index.css'))
})

app.listen(8080)