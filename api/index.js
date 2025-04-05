const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');

app.use(cors());
app.get('/api/test', (req, res) => {
    res.json('hello world' + Date.now());
})

if (process.env.API_PORT) {
    app.listen(process.env.API_PORT);
}
module.exports = app;