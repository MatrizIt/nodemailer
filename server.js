const path = require('path');
const express = require('express');

const app = express();

app.use(require('cors')());
app.use(express.json());



app.post('/send', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    require('./services/mailService')(email,name, message, phone)
    .then(response => res.json(response))
    .catch(error => res.status(500).json(error));
    /*res.json({
        name,
        email,
        message, 
        phone
    });*/
});

app.use(express.static(path.join(__dirname, 'build')));

app.listen(8000, () => {
    console.log('server start');
})