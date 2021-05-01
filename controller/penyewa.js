const penyewaModel = require ('../model/penyewa')
const ObjectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
  new Promise((resolve, reject)=>{
    //fungsi untuk menyimpan kegiatan
    penyewaModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil Memasukkan Data'
    })).catch (() => reject({
        status: false,
        pesan: 'Gagal Memasukan Data'
    }))

  })

//menemukan semua data
exports.showAllData = () =>
  new Promise((resolve, reject) => {
    penyewaModel.find()
    .then(result => {
      resolve({
        status: true,
        pesan:'Berhasil Menampilkan Data',
        data: result
      })
    }).catch (() => reject({
      status: false,
      pesan: 'Gagal Menampilkan Data',
      data: null
    }))
  })

//menemukan satu data
exports.showDataById = (id) =>
  new Promise((resolve, reject) => {
    penyewaModel.findOne({
      _id: ObjectId(id)
      }).then(result => {
        resolve({
          status: true,
          pesan:'Berhasil Menampilkan Data',
          data: result
        })
      }).catch (() => reject({
        status: false,
        pesan: 'Gagal Menampilkan Data',
        data: []
      }))
    })
    

exports.update = (data, id) =>
new Promise ((resolve, reject) =>{
    penyewaModel.updateOne({
        _id: ObjectId(id)
    }, data).then(()=>{
        resolve({
            status: true,
            pesan : 'Berhasil Memperbaharui Data'
        })
    }).catch(() =>{
        reject({
            status: false,
            pesan: 'Gagal Memperbaharui Data'
        })
    })
})

exports.delete = (id) =>
new Promise((resolve, reject)=>{
    penyewaModel.deleteOne({
        _id: ObjectId(id)
    }).then(() =>{
        resolve({
            status: true,
            pesan : 'Berhasil Menghapus Data'
        })
    }).catch(() =>{
        reject({
            status: false,
            pesan: 'Gagal Menghapus Data'
        })
    })
})