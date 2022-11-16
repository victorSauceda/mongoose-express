const express = require('express');
const router = express.Router();

router.get('/games/:id', (req, resp)=> {
    resp.send(`Get Route on router ${req.params.id}`)
})
router.get('/', (req, resp) => {
    resp.send('Get Route for home page')
})
router.post('/:games/id', (req, resp) => {
    resp.send(`3rd route ${req.params.games}`)
})

module.exports = router