const express = require('express')
const app = express()
const PORT = 5000


// An object called rappers, with a property called 21 savage that has a value of an object
const rappers = {
    '21 savage': {
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29
    },

    'chance the rapper': {
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age': 29
    },

    'unknown': {
        'age': 0,
        'birthName' : 'unknown',
        'birthLocation': 'unknown'
    }

}



// I want to serve a file, when they go to the main page. This would be a GET request. GET is a method that comes with express. It would be the main route. Main route is always forward slash. 
app.get('/', (request, response) => {
    // we have to tell it 'where' to look for that index file. Thats why we use that dirname. Its basically saying wherever you're running, start looking from there, you'll find the lovely index.html
    response.sendFile(__dirname + '/index.html')
})

// If they make a request to API, we're going to respond with savage and savage is just an object. 
app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    // because our rapper object has properties with spaces in them (e.g 21 Savage) we can't use simple dot notation to access them, thats why we're using square brackets. 
    // In the if statement below, we're saying that whatever gets passed in the rapperName variable, see if that exists in our rapper object
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers.unknown)
    }
     
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}, Better Go Catch It!`)
})