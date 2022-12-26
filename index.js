
// ExpressJS static routing 


const express = require('express');
const userData = require('./Demo/userData');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname +'/Demo/index.html')
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname +'/Demo/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname +'/Demo/about.html');
});
app.get('/userData', (req, res) => {
    res.send(JSON.stringify(userData));
})


app.listen(2020);


// nodeJS static routing


/*
const http = require('http');
const fs = require('fs');
const userData = require('./Demo/userData');

let server = http.createServer((req, res) => {
    const getUrl = req.url;


    if (getUrl == '/') {
        const readFile = fs.readFileSync('./Demo/index.html');
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(readFile);
        res.end();

    } else if (getUrl == '/about') {
        const readFile = fs.readFileSync('./Demo/about.html');
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(readFile);
        res.end();

    } else if (getUrl == '/contact') {
        const readFile = fs.readFileSync('./Demo/contact.html');
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(readFile);
        res.end();
    } else if (getUrl == '/userData') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.write(JSON.stringify(userData));
        res.end();
    }
});
server.listen(2020);
*/