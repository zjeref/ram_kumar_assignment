const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mentorAssignment')
    .then(() => console.log('DB CONNECTED'))
    .catch((err) => console.error(err))


const port = 4000;

app.listen(port, () => console.log('Backend started at port ' + port));
