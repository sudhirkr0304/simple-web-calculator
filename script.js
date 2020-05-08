//alert("Hello");


function tdclick(text)
{
    document.getElementById("value").value = document.getElementById("value").value + text;
}


function erase()
{
    document.getElementById("value").value = "";
}

function calculate()
{
    document.getElementById("value").value = eval(document.getElementById("value").value);
}

