const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bookings = require("./v1/bookings.js");
const mongoose = require('mongoose');
const uri = "mongodb+srv://trapLord2:trapLord_123@cluster0.mstc8.mongodb.net/shawtyManager?retryWrites=true&w=majority"
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs');
app.use(bodyParser.json());


app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));


//mongoose connection
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });  

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);


//User APIS
//CRUD
app.post('/api/register', async (req, res) => {
    console.log(req.body)
    let data = await register.registerUser(req);
    res.send(data);
})
//list all the dashboard users
app.get('/api/listUsers', async (req, res) => {
    console.log(req.body)
    let data = await register.listUsers(req);
    res.send(data);
})

//perform login which will grant access to booking (token manangement on the front)
app.post('/api/login', async (req, res) => {
    console.log(req.body)
    let data = await register.loginUser(req); 
    res.send(data);
})



//BOOKING APIS
app.post('/api/addReservation', async (req, res) => {
    console.log(req.body)
    let data = await bookings.addBooking(req);
    res.send(data);
})

app.post('/api/getReservations', async (req, res) => {
    console.log(req.body)
    let data = await bookings.getBooking(req);
    res.send(data);
})

app.post('/api/getAllReservations', async (req, res) => {
    console.log(req.body)
    let data = await bookings.getAllBooking(req);
    res.send(data);
})

app.post('/api/cancelBooking', async (req, res) => {
    console.log(req.body)
    let data = await bookings.cancelBooking(req);
    res.send(data);
})

app.post('/api/updateBooking', async (req, res) => {
    console.log(req.body)
    let data = await bookings.updateBooking(req);
    res.send(data);
})


app.listen(process.env.PORT || 3030, () => {
    console.log("Started Listening at port")
})