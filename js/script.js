/*
function sendMail(){

    var params = {
        first_name: document.querySelector("#first_name").value,
        last_name: document.querySelector("#last_name").value,
        subject: document.querySelector("#subject").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    const serviceID = 'service_qeg7lql';
    const templateID = 'template_fnet57e';

    emailjs.send(serviceID,templateID,params)
    .then(
        (res) => {
            /*
            document.querySelector("#first_name").value = "";
            document.querySelector("#last_name").value = "";
            document.querySelector("#subject").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#message").value = "";
            console.log(res);
            alert("Your message sent successfully");
        }
    )
    .catch((err)=>console.log(err));
}*/

window.onload = function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var params = {
            first_name: document.querySelector("#first_name").value,
            last_name: document.querySelector("#last_name").value,
            subject: document.querySelector("#subject").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value
        };

        // these IDs from the previous steps
        emailjs.send('service_qeg7lql', 'template_fnet57e', params)
            .then(function() {
                document.querySelector("#first_name").value = "";
                document.querySelector("#last_name").value = "";
                document.querySelector("#subject").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#message").value = "";
                console.log('SUCCESS!');
                alert('Your message has been sent. Thank You');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
