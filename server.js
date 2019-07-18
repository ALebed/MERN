const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;
const app = express();

// mongoose connection
connectDB();

app.use(cors());

app.get('/', (req, res) => {
    res.send(`Node and express server running on a port ${PORT}`);
});

// use the body parser middleware in express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server running on a port ${PORT}`);
});
