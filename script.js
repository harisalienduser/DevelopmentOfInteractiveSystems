let menu = document.getElementById("navLinks");
let name = document.getElementById("contact-name");
let email = document.getElementById("contact-email");
let subject = document.getElementById("contact-subject");
let msg = document.getElementById("contact-message");

function showMenu()
{
    menu.style.right = "0";
}

function hideMenu()
{
    menu.style.right = "-200px";
}

function sendEmail(e)
{
    e.preventDefault();
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mockba@tlu.ee",
        Password : "1B8946CA194617462BD0C2C272192FA8E45D",
        To : "mockba@tlu.ee",
        From : email.value,
        Subject : subject.value,
        Body : msg.value
    }).then(
      message => alert(message)
    );

    return alert("Email sent successfully");
}