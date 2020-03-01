//Login button event handler
const loginBtn = document.getElementById('login');
const transactionArea = document.getElementById('transaction-area');
transactionArea.style.display = "none";
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
});

//deposit button event handler
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener("click",function(){
    const depositNumber = getInputNumber('depositAmount');

    updateSpanText("currentDeposit",depositNumber);

    updateSpanText("totalBalance",depositNumber);

    document.getElementById('depositAmount').value = null;

});

//withdraw button event handler
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click',function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw',withdrawNumber);
    updateSpanText("totalBalance",-1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = null;
    

});

//Get input number function

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


// const withdrawBtn = document.getElementById('withdraw');
// withdrawBtn.addEventListener('click',function(){
//     const withdrawAmount = document.getElementById('withdrawAmount').value;
//     const withdrawNumber = parseFloat(withdrawAmount);
    
//     const totalBalance = document.getElementById('totalBalance').innerText;
//     const totalAmount = parseFloat(totalBalance);

//     const remainBalance = totalAmount - withdrawNumber;
//     document.getElementById('totalBalance').innerText = remainBalance;

// });

function updateSpanText(id,depositNumber){
    let totalBalance = document.getElementById(id).innerText;
    totalBalance = parseFloat(totalBalance);
    totalBalance = depositNumber + totalBalance;
    document.getElementById(id).innerText = totalBalance;
};


