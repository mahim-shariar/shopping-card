
function plusMinus(idname, plus_minus, priceTotal) {
    var input = document.getElementById(idname);
    var number = parseInt(input.value);

    if (plus_minus == true) {
        number = number + 1;

    }
    else if (number > 0 && plus_minus == false) {
        number = number - 1;

    }
    input.value = number;


    // update price

    var price = document.getElementById(priceTotal);
    var price_input = parseInt(price.innerText);
    if (priceTotal == "case-price") {
        price.innerText = number * 49;

    }
    else {
        price.innerText = number * 1219;
    }

    calculateTotal();

}
function getinputvalue(inputid){
    var productInput = document.getElementById(inputid);
    var product_num = parseInt(productInput.value);
    return product_num;
}

function calculateTotal (){
    var phonetotal =getinputvalue("phone-num") * 1219;
    var caseTotal = getinputvalue("case-num") * 49;
    var subtotal = phonetotal + caseTotal;
    var tax = subtotal / 40;
    var total = subtotal + tax ;
    
    document.getElementById("sub-total").innerText = subtotal;
    document.getElementById("total").innerText = total;
    document.getElementById("tax-total").innerText = tax;
  



}

document.getElementById("case-plus").addEventListener("click", function () {
    // var caseInput = document.getElementById("case-num");
    // var caseNum =  parseInt(caseInput.value);
    // caseInput.value = caseNum + 1 ;
    plusMinus("case-num", true, "case-price")
})

document.getElementById("case-minus").addEventListener("click", function () {
    // var caseInput = document.getElementById("case-num");
    // var caseNum =  parseInt(caseInput.value);
    plusMinus("case-num", false, "case-price")

})

document.getElementById("phone-plus").addEventListener("click", function () {
    plusMinus("phone-num", true, "phone-price")
})
document.getElementById("phone-minus").addEventListener("click", function () {

    plusMinus("phone-num", false, "phone-price")


})