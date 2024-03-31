function cart() {// function to display total items in cart
    var a = document.getElementById("crt").innerHTML;
    var c = a+1;
    if(c>a) // if statement
    {
        c = c+1;
        a = a+1;
        var b = document.getElementById("crt").innerHTML = a;
        document.getElementById("java").innerHTML = b.length;
    }
    alert("Item added to cart");
    document.getElementById()
}

function display(){ //function to display and hide cart 

    var x =  document.getElementById("shop");
    if(x.style.visibility == "hidden")
    {
        x.style.visibility = "visible";
    }
}

function cartclose(){
    document.getElementById("shop").style.visibility = "hidden";
}