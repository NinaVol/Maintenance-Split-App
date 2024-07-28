const button = document.querySelector('#calculate');
button.addEventListener('click', Amount);

const buttonTip = document.querySelector('#addTip');

buttonTip.addEventListener('click', showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display = 'block';
}


function Amount(e) {
    e.preventDefault();
    const heat = document.querySelector('#heat').value;
    const water = document.querySelector('#water').value;
    const electro = document.querySelector('#electro').value;
    const tenants = document.querySelector('#tenants').value;
    const tip = document.querySelector('#tip').value;

    if (heat === ''|| water === ''|| electro === ''|| tenants === ''|| tenants < 1) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter the information!",
          });
       return;  
    }


    let sum = Number(heat) + Number(water) + Number(electro);

    let amountPerTenant = sum / tenants;

    let tipPerTenant = (sum * tip) / tenants;

    let total = amountPerTenant + tipPerTenant;

    amountPerTenant = amountPerTenant.toFixed(2);
    tipPerTenant = tipPerTenant.toFixed(2);
    total = total.toFixed(2);

    document.querySelector('#dividedBill').textContent = amountPerTenant;
    document.querySelector('#dividedTip').textContent = tipPerTenant;
    document.querySelector('#billAndTip').textContent = total;
}