const bill = document.getElementById('bill');
const numberOfPeople = document.getElementById('people');

const fiveBtn = document.getElementById('tip-five');
const tenBtn = document.getElementById('tip-ten');
const fifteenBtn = document.getElementById('tip-fifteen');
const twentyFiveBtn = document.getElementById('tip-twenty-five');
const fiftyBtn = document.getElementById('tip-fifty');
const customBtn = document.getElementById('custom');
const resetBtn = document.getElementById('reset');

const invalidBill = document.querySelector('.invalid-bill');
const invalidPeople = document.querySelector('.invalid-people');

const tipEl = document.querySelector('.tip-el');
const totalEl = document.querySelector('.total-el');

isValid = false;

numberOfPeople.addEventListener('input', (e) => {
    if(numberOfPeople.value === ''){
        isValid = false;
        invalidPeople.classList.add('error');
        return;
    } else {
        isValid = true;
        invalidPeople.classList.remove('error');
    }    
})

bill.addEventListener('input', (e) => {
    if(bill.value === ''){
        isValid = false;
        invalidBill.classList.add('error');
        return;
    } else {
        isValid = true;
        invalidBill.classList.remove('error');
    }    
})

fiveBtn.addEventListener('click', () => {
    if(isValid){
        let tipPerPerson = 0;
        let totalPerPerson = 0;
        tipPerPerson = (bill.value * 0.05 ) / numberOfPeople.value;
        totalPerPerson = (bill.value / numberOfPeople.value) + tipPerPerson;
        let tip = tipPerPerson.toFixed(2);
        let total = totalPerPerson.toFixed(2);
        tipEl.textContent = `$${tip}`;
        totalEl.textContent = `$${total}`;
    } else {
        alert('Error');
    }
})

tenBtn.addEventListener('click', () => {
    if(isValid){
        let tipPerPerson = 0;
        let totalPerPerson = 0;
        tipPerPerson = (bill.value * 0.1 ) / numberOfPeople.value;
        totalPerPerson = (bill.value / numberOfPeople.value) + tipPerPerson;
        let tip = tipPerPerson.toFixed(2);
        let total = totalPerPerson.toFixed(2);
        tipEl.textContent = `$${tip}`;
        totalEl.textContent = `$${total}`; 
    } else {
        alert('Error');
    }
})

fifteenBtn.addEventListener('click', () => {
    if(isValid){
        let tipPerPerson = 0;
        let totalPerPerson = 0;
        tipPerPerson = (bill.value * 0.15 ) / numberOfPeople.value;
        totalPerPerson = (bill.value / numberOfPeople.value) + tipPerPerson;
        let tip = tipPerPerson.toFixed(2);
        let total = totalPerPerson.toFixed(2);
        tipEl.textContent = `$${tip}`;
        totalEl.textContent = `$${total}`;
    } else {
        alert('Error');
    }
})

twentyFiveBtn.addEventListener('click', () => {
    if(isValid){
        let tipPerPerson = 0;
        let totalPerPerson = 0;
        tipPerPerson = (bill.value * 0.25 ) / numberOfPeople.value;
        totalPerPerson = (bill.value / numberOfPeople.value) + tipPerPerson;
        let tip = tipPerPerson.toFixed(2);
        let total = totalPerPerson.toFixed(2);
        tipEl.textContent = `$${tip}`;
        totalEl.textContent = `$${total}`;
    } else {
        alert('Error');
    }
})

fiftyBtn.addEventListener('click', () => {
    if(isValid){
        let tipPerPerson = 0;
        let totalPerPerson = 0;
        tipPerPerson = (bill.value * 0.5 ) / numberOfPeople.value;
        totalPerPerson = (bill.value / numberOfPeople.value) + tipPerPerson;
        let tip = tipPerPerson.toFixed(2);
        let total = totalPerPerson.toFixed(2);
        tipEl.textContent = `$${tip}`;
        totalEl.textContent = `$${total}`;
    } else {
        alert('Error');
    }
})

customBtn.addEventListener('click', () => {
    if(isValid){
        let tipPerPerson = 0;
        let totalPerPerson = 0;
        tipPerPerson = (bill.value * (custom.value / 100)) / numberOfPeople.value;
        totalPerPerson = (bill.value / numberOfPeople.value) + tipPerPerson;
        let tip = tipPerPerson.toFixed(2);
        let total = totalPerPerson.toFixed(2);
        tipEl.textContent = `$${tip}`;
        totalEl.textContent = `$${total}`;
    } else {
        alert('Error');
    }
})

resetBtn.addEventListener('click', () => {
    tipEl.textContent = '$0.00';
    totalEl.textContent = '$0.00';
    bill.value = '';
    numberOfPeople.value = '';
})