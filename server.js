const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
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

// Define routes
app.use('/api/users', require('./src/routes/api/users'));
app.use('/api/auth', require('./src/routes/api/auth'));
app.use('/api/profile', require('./src/routes/api/profile'));
app.use('/api/posts', require('./src/routes/api/posts'));

app.listen(PORT, () => {
    console.log(`Server running on a port ${PORT}`);
});
