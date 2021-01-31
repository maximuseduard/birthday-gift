const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/dist/birthday-gift`));

// app.get('/*', (_req, res) => res.sendFile('./dist/birthday-gift/index.html'));
app.get('/*', (_req, res) => res.sendFile('index.html', { root: 'dist/angular-heroku/' }));

app.listen(process.env.PORT || 8080, function () {
    console.log('###########################################################');
    console.log(`#            Server is listening on port: ${process.env.PORT || 8080}            #`);
    console.log('###########################################################');
});
