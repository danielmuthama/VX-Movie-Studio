function formvalidation(){
    let myName = document.getElementById("name").value;
    let myEmail = document.getElementById("email").value;
    let myMessage = document.getElementById("message").value;

    if( myName == null || myName == ""){
        alert("Please enter your Name");
        return false;
    }else if(myEmail == null || myEmail == ""){
        alert("Please enter a valid email address");
        return false;
    }else if(myMessage == null || myMessage == ""){
        alert("Please enter a Message");
        return false;
    }else{
        alert("Welcome " + myName + " your message has been received and we will respond ASAP");
    }
};

function sendEmail() {

  Email.send({

    Host: "smtp.gmail.com",

    Username: "sender@email_address.com",

    Password: "Enter your password",

    To: 'receiver@email_address.com',

    From: "sender@email_address.com",

    Subject: "Sending Email using javascript",

    Body: "Well that was easy!!",

  })

    .then(function (message) {

      alert("mail sent successfully")

    });

}
