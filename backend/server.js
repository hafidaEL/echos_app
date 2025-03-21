const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, 'newsletters.json')

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la lecture du fichier' })
        }
        res.json(JSON.parse(data))
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})