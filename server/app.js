const express = require('express');
const cors = require('cors');
const calculatorRoutes = require('./src/routes/calculatorRoutes');

const app = express();

const corsOptions = {
    origin: '*',
    methods: [
        'GET',
        'POST'
    ],
    allowHeaders: [
        'Content-Type'
    ],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/calculate', calculatorRoutes);

module.exports = app;
