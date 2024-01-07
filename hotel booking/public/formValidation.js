function validateRoom()
    {
        if(document.room.first_name.value.length<1)
        {
            alert("Full name must be filled out");
        }
        if(document.room.last_name.value.length<1)
        {
            window.alert("Full name must be filled out");
        }
        if((!document.room.ac_nonac[0].checked) && (!document.room.ac_nonac[1].checked))
        {
            window.alert("Select type of accommodation: AC/non-AC")
        }
        if(document.room.guest_count.value<1)
        {
            window.alert("Select the guest count");
        }
        if(document.room.room_type.selectedIndex==0)
        {
            window.alert("Select type of accommodation");
        }
        if(document.room.contact_number.value.length<1)
        {
            window.alert("Contact number must be filled out")
        }
        if(isNaN(document.room.contact_number.value))
        {
            window.alert("Contact number must be numeric");
        }
    }


function validateAsk()
{
    if(document.ask.question.value.length<1)
        {
            window.alert("Enter your concern");
        }
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
        if(!document.ask.email.value.match(mailformat))
        {
            window.alert("Enter a valid email");
        }
}





function validateRoom() {
    // Form validation logic
    var firstName = document.getElementsByName('first_name')[0].value;
    var lastName = document.getElementsByName('last_name')[0].value;
    var checkInDate = document.getElementsByName('check_in')[0].value;
    var checkOutDate = document.getElementsByName('check_out')[0].value;
    var guestCount = document.getElementsByName('guest_count')[0].value;
    var roomType = document.getElementsByName('room_type')[0].value;
    var contactNumber = document.getElementsByName('contact_number')[0].value;

    // Add your form validation logic here...

    // Assuming the form is valid, display the success message
    displaySuccessMessage();

    // Continue with the form submission logic if needed
    // For demonstration purposes, you can reload the page after a brief delay
    setTimeout(function () {
        location.reload();
    }, 2000); // Reload after 2 seconds (adjust as needed)

    // Prevent the form from submitting in the traditional way
    return false;
}


function displaySuccessMessage() {
    // Get the element by its ID
    var successMessage = document.getElementById("successMessage");

    // Set the display property to block (show the message)
    successMessage.style.display = "block";
}

