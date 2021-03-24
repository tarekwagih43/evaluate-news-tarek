import CheckURL from './checkURL'

const handleSubmit = async () => {

    let url = await document.querySelector('#article-url').value
    if(CheckURL(url)) {
        const response = await fetch('http://localhost:8081/add-url', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'url': url})
        })
        try {
            const data = await response.json()
            const send = (data) => {
                document.querySelector('#text').innerHTML = `Text: ${data.text}`
                document.querySelector('#agreement').innerHTML = `agreement: ${data.agreement}`
                document.querySelector('#subjectivity').innerHTML = `subjectivity: ${data.subjectivity}`
                document.querySelector('#confidence').innerHTML = `confidence: ${data.confidence}`
                document.querySelector('#irony').innerHTML = `irony: ${data.irony}`
                document.querySelector('#score_tag').innerHTML = `score_tag: ${data.score_tag}`
                }
            return await send(data)
        } catch (error) {
            console.log(error)
        }
    } else {
        alert('Please Enter Valid URL!')
    }
}

export default handleSubmit
