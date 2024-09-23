

function getElementById (eId){
return document.getElementById(eId);
}



function GetElementValueById(id){
    return document.getElementById(id).value;
}

function donationCalculate () {
    const myTotalMoney = parseInt(getElementById('myTotalMoney').innerText);
    return myTotalMoney;
}

function historyCreate(dTk, toDestination){
    const historyTab =  getElementById('historyTab');
    const Time = new Date();
    const div = document.createElement('div');
    div.classList.add('border', 'w-full', 'h-[100px]', 'rounded-lg', 'shadow-lg', 'p-5', 'mt-10');
    div.innerHTML = `
        <p class = "text-2xl font-bold"><span>${dTk}</span> is Donated For ${toDestination}</p>
        <p class = "font-semibold">Date : ${Time}</p>
    `;

    historyTab.appendChild(div)

}


// setTimeOut for PopUp Modal 10 Second

function popUpTimeout(){
    setTimeout(()=>{
        successPop.classList.add('hidden')
    },10000)
}

// Validate Input Value 
function checkInput(inputValue){
    if (inputValue === isNaN || inputValue<0) {
        alert("Please Enter a Valid Number")
        return
    }
}
