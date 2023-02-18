require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/game-routes');
const cors = require('cors');
const app = express();
const PORT = 5000 || PORT;
const mongoServer = process.env.MONGODB_CLIENT_ID;

//middleware
app.use(express.json());
app.use(cors());
app.use("/games", router);

mongoose.connect(mongoServer)
    .then(()=> console.log("sucessfully connected"))
        .then(() => app.listen(PORT))
          .catch((err) => {
        console.log(err);
     });

