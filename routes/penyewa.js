const router = require('express').Router()
const penyewaController = require('../controller/penyewa')

router.post('/insert',(req, res) => {
    penyewaController.create(req.body)
    .then(result => res.json(result))
    .catch(err => XPathExpression.json(err))
})

router.get('/getall', (req, res)=> {
    penyewaController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id',(req, res)=>{
    penyewaController.showDataById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(ress))
})

router.put('/update/:id', (req, res) =>{
    penyewaController.update(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
  
router.delete('/delete/:id', (req, res)=> {
    penyewaController.delete(req.params.id)
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})

module.exports = router