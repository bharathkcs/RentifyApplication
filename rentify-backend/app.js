const express = require('express');
const connectDB = require('./config/db');
const dotenv =  require("dotenv");
const cors = require("cors")
const helmet = require("helmet")

const app = express();
app.use(express.json());

dotenv.config();

connectDB();

app.use(cors())
app.use(helmet())

app.use("/", require('./routes/dummyRoutes'))
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/properties', require('./routes/propertyRoutes'));

module.exports = app;
