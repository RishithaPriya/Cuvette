// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const companyRoutes = require('./routes/companyRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/companies', companyRoutes);
app.use('/api/jobs', jobRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log('Connecting to MongoDB URI:', process.env.MONGO_URI);
