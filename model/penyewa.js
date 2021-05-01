const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PenyewaSchema = new Schema({
    ID_Penyewa: {
        type: String
    },
    Nama_Penyewa:{
        type: String
    },
    Alamat:{
        type: String
    },
    No_telpon:{
        type: String
    },
    Status:{
        type: String
    }

})

module.exports = mongoose.model('Penyewa', PenyewaSchema)