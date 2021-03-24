import CheckURL from './checkURL'

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async () => {

    let url = document.querySelector('#article-url').value
    if(CheckURL(url)) {
        console.log(url)
        post("http://localhost:8081/add-url", {url} )
        .then(data => {
        console.log('test:', data)
        document.querySelector('#text').innerHTML = `Text: ${data.text}`
        document.querySelector('#agreement').innerHTML = `agreement: ${data.agreement}`
        document.querySelector('#subjectivity').innerHTML = `subjectivity: ${data.subjectivity}`
        document.querySelector('#confidence').innerHTML = `confidence: ${data.confidence}`
        document.querySelector('#irony').innerHTML = `irony: ${data.irony}`
        document.querySelector('#score_tag').innerHTML = `score_tag: ${data.score_tag}`

        })
    } else {
        alert('Please Enter Valid URL!')
    }
}

export default handleSubmit
