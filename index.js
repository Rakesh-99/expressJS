
// ExpressJS static routing 


const express = require('express');
const userData = require('./Demo/userData');
const app = express();



// Setting up the ejs frameWork---------------------

app.set('view engine', 'ejs');

app.get('/profile', (req, resp) => {

    const data = {
        firstName: 'Rakesh',
        middleName: 'Kumar',
        lastName: 'Parida', 
        skills: ['Java', 'Html5', 'Css3', 'BootStrap', 'Jqueary', 'ReactJs', 'MySQL', 'NodeJs & ExpressJS', 'Git & GitHub']
    }
    resp.render('profile', {data});
})

app.get('/login', (req, resp) => {
    resp.render('login');
})
// ----------------------------------------

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
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/Demo/404.html');
    
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