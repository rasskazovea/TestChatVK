const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Сервер для чата VK Mini Apps запущен')
})

module.exports = router