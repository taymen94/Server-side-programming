var express = require('express');
var http = require('http');

var app = express();
var data = {
    intro: {
        id: 'intro',
        name: 'Intro',
        entries: [
            {
                id: '0',
                name: 'Was ist eine Webapplikation?',
                checked: false
            },
            {
                id: '1',
                name: 'Lamp vs Mean',
                checked: false
            },
        ]
    },
    css: {
        id: 'css',
        name: 'Styling von Dokumenten',
        entries: [
            {
                id: '2',
                name: 'Selektoren und Pseudoselektoren',
                checked: false
            },
            {
                id: '3',
                name: 'Media Queries',
                checked: false
            },
        ]
    },
    jsclient: {
        id: 'jsclient',
        name: 'JavaScript im Browser',
        entries: [
            {
                id: '4',
                name: 'Ereignisse',
                checked: false
            },
            {
                id: '5',
                name: 'Vue.js',
                checked: false
            },
        ]
    },
    jsserver: {
        id: 'jsserver',
        name: 'Serverseitige Programmierung',
        entries: [
            {
                id: '6',
                name: 'Node.js',
                checked: false
            }
        ]
    },
    security: {
        id: 'security',
        name: 'Sessions & Sicherheit',
        entries: [
            {
                id: '7',
                name: 'Cookies',
                checked: false
            }
        ]
    }
};

app.get('/', (req, res) => {
    
    console.log('dataserver bekam eine Get anfrage ')
    
    //Die JSON.stringify() Methode konvertiert einen JavaScript-Wert(hier data) in einen JSON-String.
    res.send(JSON.stringify(data));
    var datastringify=JSON.stringify(data);
    var datajson= JSON.parse(datastringify);
    console.log('datastringify', datastringify) ;
    console.log('datajson', datajson) ;

    //.log('data.intro= ' + this.data);
});
//console.log(data.intro)
app.listen(8080);//war8080