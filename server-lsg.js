var express = require('express');
var http = require('http');
var bodyParser = require('body-parser')

var app = express();
var data;

// index.html ausliefern
app.use('/', express.static('static'));

// Daten vom dataserver laden, falls noch nicht getan
app.use('/data', (req, res, next) => {
    if(!data){
        http.get('http://localhost:8080', (response) => {
            let body = '';
            response.on('data', (chunk) => {
                body += chunk.toString();
            });
            response.on('end', () => {
                data = JSON.parse(body);
                console.log(data);
                next();
            });
        })
    }
    else {
        next();
    }
});

// GET Data ?categories=xx-xx-xx
app.get('/data', (req, res) => {
    let filteredData = [];
    
    if(req.query.categories) {
        for(category of req.query.categories.split('-')){
            filteredData = filteredData.concat(data[category]);
        }
    }
    else {
        filteredData = data;
    }

    console.log(filteredData);
    
    res.send(JSON.stringify(filteredData));
});

app.use(bodyParser.json());

app.post('/data', (req, res) => {
    console.log(req.body);
    data[req.body.category].entries.push({
        id: req.body.id,
        name: req.body.name,
        checked: false
    });
    res.send();
})

app.listen(80);