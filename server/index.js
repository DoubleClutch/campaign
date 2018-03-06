const express = require('express');
const db = require('../database/index.js');
const BodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

let app = express();

app.use(BodyParser.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use('/:id', express.static(path.resolve(__dirname, '../client/dist')));
app.get('/campaign-info/api/:id', function(req, res){
    db.findCampaignInfo({id: req.params.id})
    .then(dbResponse => res.send(dbResponse));
});

app.listen(3300, function() {
    console.log('your listening to port 3300');
});