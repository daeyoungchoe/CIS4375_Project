const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    // const data = req.context

    res.render('home', req.context)

})

module.exports = router