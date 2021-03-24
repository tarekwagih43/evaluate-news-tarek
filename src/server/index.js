const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios');

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const apiKey = process.env.API_KEY
const dafualtLanguage = process.env.Language

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
app.post('/add-url', async (req, res) => {
    
    let url  = req.body.url
    let requestURL = `${BASE_API_URL}?key=${apiKey}&url=${url}&lang=${dafualtLanguage}`
    const response = await axios.get(requestURL);

    res.json( {
                text: response.data.sentence_list[0].text,
                score_tag : response.data.score_tag,
                agreement : response.data.agreement,
                subjectivity : response.data.subjectivity,
                confidence : response.data.confidence,
                irony : response.data.irony
                }
    )

})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
