const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./routes/api/users');

const app = express();

//body-parser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db)
  .then(() => console.log('Mongoose connected!'))
  .catch(err => console.log(err));

//user Routes
app.use('/api/users', users);

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html')));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));