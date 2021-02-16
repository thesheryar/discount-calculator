function show() {
var result;
var bankobal = document.getElementById("bankobal").value;
var invest_pt = document.getElementById("invest_pt").value/100;
    

result = invest_pt * bankobal;
document.getElementById("prof").innerHTML = "Total Discount:" + result + "PKR";

}