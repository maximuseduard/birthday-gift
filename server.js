const express = require('express');

const app = express();

app.use(express.static('./dist/birthday-gift'));

app.get('/*', (req, res) => res.sendFile('index.html', { root: 'dist/birthday-gift/' }));

app.listen(process.env.PORT || 8080, function () {
    console.log('###########################################################');
    console.log(`#            Server is listening on port: ${process.env.PORT || 8080}            #`);
    console.log('###########################################################');
});
