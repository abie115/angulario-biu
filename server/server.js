var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('./sets-data');
var sets = data.sets;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/sets', function (req, res) {
    res.json(sets);
});


app.get('/sets/:id', function (req, res) {
    for (var i = 0; i < sets.length; i++) {
        if (sets[i].id == req.params.id) {
            var set = sets[i];
        }
    }
    res.json(set);
});


app.post('/sets/add', function (req, res) {
    var idx = null;
    for (var i = 0; i < sets.length; i++) {
        idx = sets[i].id + 1;
    }
    var newSet = {
        id: idx,
        name: req.body.name
    };
    sets.push(newSet);
    res.json(newSet);
});

app.delete('/sets/:id', function (req, res) {
    for (var i = 0; i < sets.length; i++) {
        if (sets[i].id == req.params.id) {
            var set = sets[i];
            sets.splice(i, 1);
        }
    }
    res.json(sets);
});

app.put('/sets/:id', function (req, res) {
    var updateSet = null;
    for (var i = 0; i < sets.length; i++) {
        if (sets[i].id == req.params.id) {
            sets[i].name = req.body.name;
            sets[i].word = req.body.word;
            updateSet = sets[i];
        }
    }
    res.json(updateSet);
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});