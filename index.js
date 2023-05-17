const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route.js')
const  mongoose  = require('mongoose')
const app = express()

require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.set({ strictQuery: true });
mongoose.connect(process.env.MongoDB_URI, {
        useNewUrlParser: true,useUnifiedTopology:true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.use(function (req, res) {
    return res.status(400).send({status : false, message : "path not found"})
    });


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
