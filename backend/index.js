const express = require('express');
const cors = require('cors');
const audiorouter = require('./routes/audio');
const multer = require('multer');

require('dotenv').config();

const app = express();

const upload = multer();


app.use(cors());

app.use(express.json({ limit: '30mb', extended: true }))



app.use('/', audiorouter);


const listen = () => {

    app.listen(5000, (err) => {
        if (err) {
            console.log("Error in Listening");
            return;
        }

        console.log("server listening on port 5000");
    })

}
listen();
