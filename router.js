const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Сервер чата VK Mini Apps запущен')
})

module.exports = router