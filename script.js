function compute() {
    //Steps 2-4, defining the variables
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    //Steps 5-6
    var interest = principal.value * years.value * rate.value / 100;
    var curyear = 2021 + years.value * 1
    //Steps 15 and 16
    if (principal.value <=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    //Steps 10-12
    return document.getElementById("result").innerHTML = "If you deposit \<mark\>" + principal.value + "\<\/mark\>,\<br\>" + "at an interest rate of \<mark\>" + rate.value + "%\<\/mark\>.\<br\>" + "You will receive an amount of \<mark\>" + interest + "\<\/mark\>,\<br\>" + "in the year \<mark\>" + curyear + "\<\/mark\>\<br\>\<br\>";
}
//Steps 7-9
function visualize() {
    var slider = document.getElementById("rate").value;
    return document.getElementById("rate").innerHTML = slider;
}
        
