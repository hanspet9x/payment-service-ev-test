const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
})
app.post('/form', (req, res) => {
    const data = JSON.stringify(req.body) + "\n\n";
    console.log(data);
    fs.appendFile('file.txt', data, (err) => {
        console.log(err);
    });

    res.status(200).send(data);
})

app.listen(port, () => {
    console.log('listening');
});