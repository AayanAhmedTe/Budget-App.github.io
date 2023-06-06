let monthlyBudget = document.getElementById("monthlyBudget")
let monthlyBudgetField = document.getElementById("monthlyBudgetField")
function savebudget(){
    if (monthlyBudgetField.value != "" ){
        localStorage.setItem("monthlyBudget", monthlyBudgetField.value)
        monthlyBudget.style.display = "none"
        var getBudget = document.getElementById("getBudget")
        getBudget.innerText = localStorage.getItem("monthlyBudget")
    }
}

function toggleInput(expenseNumber) {
    var checkbox = document.getElementById("expense" + expenseNumber);
    var priceInput = document.getElementById("priceOf" + expenseNumber);
    var quantityInput = document.getElementById("quantityOf" + expenseNumber);
    
    if (checkbox.checked) {
        priceInput.disabled = false;
        quantityInput.disabled = false;
        priceInput.required = true;
        quantityInput.required = true;
    }
    else{
        priceInput.disabled = true;
        quantityInput.disabled = true;
    }
}

function kharcha1(){
    var priceOf1 = document.getElementById("priceOf1")
    var quantityOf1 = document.getElementById("quantityOf1")
    var priceOf2 = document.getElementById("priceOf2")
    var quantityOf2 = document.getElementById("quantityOf2")
    var priceOf3 = document.getElementById("priceOf3")
    var quantityOf3 = document.getElementById("quantityOf3")
    var priceOf4 = document.getElementById("priceOf4")
    var quantityOf4 = document.getElementById("quantityOf4")
    var priceOf5 = document.getElementById("priceOf5")
    var quantityOf5 = document.getElementById("quantityOf5")
    if(priceOf1.disabled == false && quantityOf1.disabled == false && priceOf1.value != "" && quantityOf1.value != "" || priceOf2.disabled == false && quantityOf2.disabled == false && priceOf2.value != "" && quantityOf2.value != "" || priceOf3.disabled == false && quantityOf3.disabled == false && priceOf3.value != "" && quantityOf3.value != "" || priceOf4.disabled == false && quantityOf4.disabled == false && priceOf4.value != "" && quantityOf4.value != "" || priceOf5.disabled == false && quantityOf5.disabled == false && priceOf5.value != "" && quantityOf5.value != ""){
        var total1 = priceOf1.value * quantityOf1.value
        var para1 = document.getElementById("para1")
        para1.innerText = "Transportation: " + total1
        var total2 = priceOf2.value * quantityOf2.value
        var para2 = document.getElementById("para2")
        para2.innerText = "Groceries: " + total2 
        var total3 = priceOf3.value * quantityOf3.value
        var para3 = document.getElementById("para3")
        para3.innerText = "Medicines: " + total3 
        var total4 = priceOf4.value * quantityOf4.value
        var para4 = document.getElementById("para4")
        para4.innerText = "Restaurants: " + total4
        var total5 = priceOf5.value * quantityOf5.value
        var para5 = document.getElementById("para5")
        para5.innerText = "School Fees: " + total5
        var total = total1 + total2 + total3 + total4 + total5;
        var totalSum = document.getElementById("totalSum")
        totalSum.innerText = total; 
        localStorage.setItem("Total Expense",total )
        var emptyPara = document.getElementById("emptyPara")
        emptyPara.style.display = "block"
    }else{
        console.log("error")
    }
}

var remaining = document.getElementById("remaining")
function remainingAmount(){
    if(localStorage.getItem("monthlyBudget") > localStorage.getItem("Total Expense")){
    remaining.innerText = localStorage.getItem("monthlyBudget") - localStorage.getItem("Total Expense") 
    }else if(localStorage.getItem("monthlyBudget") < localStorage.getItem("Total Expense") ){
        alert("YOUR TOTAL EXPENSE IS MORE THAN YOUR SAVED BUDGET")
    }else{
        remaining.innerText = 0
    }
}