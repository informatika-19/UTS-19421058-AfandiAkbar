const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose= require ('mongoose')

mongoose.connect('mongodb://localhost:27017/SewaLapangan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then (() => {
    console.log('Berhasil Konek')
}).catch((e)=>{
    console.log(e)
    console.log('Gagal Konek')
})

app.use(bodyParser.json({
    extends: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.get('/', (req, res) => {
    res.send('<h1>Sewa Lapangan</h1>')
})

app.use('/penyewa',require('./routes/penyewa'))

app.listen(3000, () =>{
    console.log('Server Dijalankan')
})