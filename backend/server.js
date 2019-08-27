const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


/* ==== MongoDB Connection ==== */
const uri = process.env.atlas_uri;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


/* ==== ROUTES ==== */
const postRouter = require('./routes/posts');
app.use('/', postRouter);



/* ==== Server Start ==== */
app.listen(port, () => {
    console.log('Server running on port ' + port);
});