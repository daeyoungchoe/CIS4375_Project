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

router.get('/register', (req, res, next) => {
    // const data = req.context

    res.render('register', req.context)

})

router.get('/login', (req, res, next) => {
    // const data = req.context

    res.render('login', req.context)

})

router.get('/client', (req, res, next) => {
    // const data = req.context

    res.render('client', req.context)

})

router.get("/client-booking", (req, res, next) => {
  // const data = req.context

  res.render("client-booking", req.context);
});

router.get("/admin", (req, res, next) => {
  // const data = req.context

  res.render("admin", req.context);
});

router.get("/add-client", (req, res, next) => {
  // const data = req.context

  res.render("add-client", req.context);
});

module.exports = router