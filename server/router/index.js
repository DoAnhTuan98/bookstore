const express = require('express')

const productRouter = require('./product')
const authRouter = require('./auth')
const orderRouter = require('./order')
const paymentRouter = require('./payment')

const router = new express.Router()

router.use('/api/product', productRouter)
router.use('/api/auth', authRouter)
router.use('/api/order', orderRouter)
router.use('/api', paymentRouter)

module.exports = router