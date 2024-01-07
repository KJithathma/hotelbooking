// Example using Node.js with Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_booking', (req, res) => {
    // Process and store the submitted data (database, etc.)
    const bookingDetails = req.body;

    // Generate a response to send back to the client
    res.send('Booking successful! Thank you.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


// Modify the server script to handle the form submission
app.post('/submit_booking', (req, res) => {
    // Process and store the submitted data (database, etc.)

    // Redirect to a confirmation page or send a success message
    res.redirect('/confirmation');
});
// Assume this is a simplified example of your booking logic
function handleBooking() {
    // Your booking logic here

    // After a successful booking, display the success message
    displayBookingSuccessMessage();
}

function displayBookingSuccessMessage() {
    // Get the element by its ID
    var successMessage = document.getElementById("bookingSuccessMessage");

    // Set the display property to block (show the message)
    successMessage.style.display = "block";
}
