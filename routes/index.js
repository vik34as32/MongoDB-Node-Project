const express =require('express')
const newContollers =require('../controllers/newControllers')
const router = express.Router()

router
    .route('/')
    .get(newContollers.getAll)
    .post()


// router
//     .route('/:id')
//     .get()
module.exports = router        