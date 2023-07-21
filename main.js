//rl importation mta3 express
const express = require('express');


const data = {
    name: 'dali',
    forname:'kbaier',
    age: 23,
}

const object = {
    Date: new Date,
    time:'20h'
}

//express fonction
const app = express();

//get function
app.get('/user', function(req, res){
    res.send(200,data);
})

//ma3naha bich iwali yaamel connect 3al port 8080 el serveur lien mta3ou "localhost:8080"
app.listen(8080, function () {
    console.log('listening on 3006   port');
}); 