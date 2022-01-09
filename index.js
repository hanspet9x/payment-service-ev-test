const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.text());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/form', (req, res) => {
    const body = req.body;
    if (body) {
        let data = typeof body === 'string' ? body : JSON.parse(body);
        fs.appendFile('file.txt', data + "\n\n", (err) => {
            if(err) {
                res.status(200).send(err.message);
                return;
            }
            res.status(200).send(data);
        });
    }

    res.send('no valid data');
})

app.get('data', (req, res) => {
    fs.readFile('file.txt', (err, data) => {
        if (err) {
            res.send(err.message);
            return;
        }
        res.send(data);
    });
})

app.listen(port, () => {
    console.log('listening');
});