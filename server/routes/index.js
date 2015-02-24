var router = require('express').Router();
var authRouter = require('./auth');

router.use('/auth', authRouter);





module.exports = router; 