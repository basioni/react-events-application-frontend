const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routesHandler);

const PORT = 4000;
app.listen(PORT, () => {
});
