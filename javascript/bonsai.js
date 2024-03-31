function form(){ //script for form validation
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    // var txt = document.getElementById("txt");

    if(name.value == "" || email.value == "")
    {
        alert("please fill the form"); // alert function to display pop up
    }
    else{
        alert("Thank you for your feedback");
    }
}