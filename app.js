function getInputValue (inputId) {
    const inputTag = document.getElementById(inputId);
    const inputTagText = inputTag.value ;
    const newNumber = parseFloat(inputTagText);
    inputTag.value = '';
    return newNumber;
}
// This is for withdraw condition, user can't withdraw big amount from actual balance.
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldTagTextValue = fieldTag.innerText;
    const value = parseFloat(fieldTagTextValue);
    return value;
}
function updateTotal(totalId,amount) {
    const totalTag = document.getElementById(totalId);
    const totalTagText = totalTag.innerText;
    const previousNumber = parseFloat(totalTagText);
    const newTotal = previousNumber + amount ;
    totalTag.innerText = newTotal; 
}
function currentBalance(amount,isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceTagText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceTagText);
    let newBalance;
    if(isAdding==true){
        newBalance = previousBalance + amount ;
    }
    else{
        newBalance = previousBalance - amount ;
    }
    balanceTag.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue ('deposit-input');
    if(amount>0){
        updateTotal('deposit-total',amount);
        currentBalance(amount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(amount> 0 && amount <= balance ){
        updateTotal('withdraw-total', amount);
        currentBalance(amount, false);
    }
})