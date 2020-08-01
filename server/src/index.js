const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./midddleware');
const logs = require('./api/logs');

// To use dotenv in our app
require('dotenv').config();

const app = express();

// Connecting to the database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(morgan('common')); // morgan is a logging middleware, can see all requirest on console
app.use(helmet()); // This is a security middleware add additonal security measures
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json()); // Parsinf json in body

// Api's
app.use('/api/logs', logs);

const { PORT } = process.env;

app.use(middleware.notFound);
app.use(middleware.errorHandler);

// Starting the app
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running at http://localhost:${PORT}`);
});
