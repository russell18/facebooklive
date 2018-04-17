// main document ready function to check if dom is loaded fully or not

let myFacebookToken;

$(document).ready(() => {

       myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No usr Token found");

        $('#dataSection').css('display', 'none');

    } else {
    

        getAllDetails();

    // end if condition
}
}); // end document.ready function

let getAllDetails = () => {


    // API call to get user details

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://graph.facebook.com/me?fields=posts{full_picture}&access_token=' + myFacebookToken,

        success: (response) => {

            $('.dataSection').css('display', 'block');

            console.log(response);

 


        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });// end ajax call 

}