require("dotenv").config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const companyRoutes = require('./routes/company-routes');
const adRoutes = require('./routes/ad-routes');

mongoose.connect(process.env.database_url)
    .then(() => { console.log("DB CONNECTED") })
    .catch(err => { console.log(err) })

app.use(cors());
app.use(express.json());
app.use("/api/company", companyRoutes);
app.use("/api/ad", adRoutes);


const port = 4000;

app.listen(port, () => console.log('Backend started at port ' + port));
