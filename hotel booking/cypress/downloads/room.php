<?php
// process_booking.php

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process and store the submitted data (database, etc.)
    $bookingDetails = $_POST;

    // You may want to validate and sanitize the data before further processing

    // Redirect to a confirmation page or send a success message
    header('Location: confirmation.php');
    exit();
}
?>

<?php
// confirmation.php

// Display a confirmation message or any additional details
echo 'Booking successful! Thank you.';
?>

