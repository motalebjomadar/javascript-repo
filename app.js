function updateInputNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-input-field');
    let productNumber = productInput.value ;
    if(isIncreasing==true) {
        productNumber = parseInt(productInput.value) + 1 ;
    }
    else if(productNumber>0){
        productNumber = parseInt(productInput.value) - 1 ;
    }
    productInput.value = productNumber ;

    // Update total balance
    const productTotal = document.getElementById(product + '-total-balance');
    productTotal.innerText = productNumber * price ;
    // Calculate total
    calculateTotal();
}

function getInputValue(product){
    const productTotal = document.getElementById(product + '-input-field');
    const productNumber = parseInt(productTotal.value);
    return productNumber ;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1500 ;
    const caseTotal = getInputValue('case') * 45 ;
    const subTotal = phoneTotal + caseTotal ;
    const tax = subTotal / 10 ;
    const grandBalance = subTotal + tax ;
    // Update on the html
    document.getElementById('sub-total').innerText = subTotal ;
    document.getElementById('tax').innerText = tax ;
    document.getElementById('grand-balance').innerText = grandBalance ;
}



// Phone event
document.getElementById('phone-plus-btn').addEventListener('click',function(){
    updateInputNumber('phone', 1500, true );
})
document.getElementById('phone-minus-btn').addEventListener('click',function(){
    updateInputNumber('phone', 1500, false );
})
// Case event
document.getElementById('case-plus-btn').addEventListener('click',function(){
    updateInputNumber('case', 45, true );
})
document.getElementById('case-minus-btn').addEventListener('click',function(){
    updateInputNumber('case', 45, false );
})