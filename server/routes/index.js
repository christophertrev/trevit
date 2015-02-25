var router = require('express').Router();
var authRouter = require('./auth');
var esRouter = require('./esStats');


router.use('/auth', authRouter);
router.use('/es',esRouter)





module.exports = router; 