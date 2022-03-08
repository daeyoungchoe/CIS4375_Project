const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    // const data = req.context

    res.render('home', req.context)

})

router.get('/service', (req, res, next) => {
    // const data = req.context

    res.render('service', req.context)

})

router.get('/login-register', (req, res, next) => {
    // const data = req.context

    res.render('login-register', req.context)

})


module.exports = router