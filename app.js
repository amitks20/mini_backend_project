require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/notes', require('./routes/notes'));

app.listen(3000, () => console.log('Server running on port 3000'));
