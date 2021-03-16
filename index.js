
const express = require('express');
const path = require('path');

const app = express();

// Create a route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server Started on port' + PORT));



