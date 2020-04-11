function sendEmail(){
    Email.send({
        Host:"smtp.gmail.com",
        Username:"testplowed@gmail.com",
        Password:"1234!@#$",
        To:"mitchell.schaller@gmail.com",
        From: "testplowed@gmail.com",
        Subject: "Driver Request",
        Body: ""
    }).then(
        message => alert("mail sent successfully")
    );
}