const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Replace 'YOUR_MONGODB_ATLAS_CONNECTION_STRING' with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://jeonjj:look21@cluster1.zfkcceo.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const roomSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  check_in: Date,
  check_out: Date,
  guest_count: Number,
  ac_nonac: String,
  room_type: String,
  contact_number: String,
});

const Room = mongoose.model('Room', roomSchema, 'rooms');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/submitBooking', async (req, res) => {

  try {

    const newBooking = new Room(req.body);



    console.log('Received form data:', req.body); // Log the form data received



    await newBooking.save();



    console.log('Booking saved successfully!');



    res.send('Booking successful!');

  } catch (error) {

    console.error('Error:', error);

    res.status(500).send('Internal Server Error');

  }

});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Database Connected');
});
app.listen(port, () => {

  console.log(`Server is running on port: ${port}`);



});