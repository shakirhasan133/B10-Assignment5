

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
    div.classList.add('border', 'w-full', 'rounded-lg', 'shadow-lg', 'p-5', 'mt-10');
    div.innerHTML = `
        <p class = "text-base md:text-2xl font-bold"><span>${dTk}</span> is Donated For ${toDestination}</p>
        <p class = "md:font-semibold">Date : ${Time}</p>
    `;

    // historyTab.appendChild(div)
    historyTab.insertBefore(div, historyTab.childNodes[0])
  

}


// setTimeOut for PopUp Modal 10 Second

function popUpTimeout(){
    setTimeout(()=>{
        successPop.classList.add('hidden')
    },10000)
}





function calculate(dTitle, inputV, Totaldiv){

    const donationTitle = getElementById(dTitle).innerText;
    const inputValue = getElementById(inputV);
    const donationInputValue = GetElementValueById(inputV);
    const totalDonationAmount = parseInt(getElementById(Totaldiv).innerText);
    const donationValueInt = parseInt(donationInputValue);

    console.log(donationValueInt);
    
    if ( isNaN(donationValueInt) || donationInputValue<0 ) {
        alert("Please Enter a Valid Number")
        return
    }
 
    if (donationCalculate()>=donationValueInt) {

        const nResult = totalDonationAmount + donationValueInt;
        getElementById(Totaldiv).innerHTML = nResult

        const lastMoney = donationCalculate() - donationValueInt;
        getElementById('myTotalMoney').innerText = lastMoney;

        historyCreate(donationValueInt, donationTitle);




        successPop.classList.remove('hidden')
 
        popUpTimeout()
        
        inputValue.value = '';
        
    }
    else{
        alert("insufficient Balance")
    }

}
   
























// const titleNoakhali = getElementById('titleNoakhali').innerText;
    // const noakhaliDonationInputValue = getElementById('noakhaliInput');
    // const noakhaliDonationAmount = parseInt(getElementById('noakhaliDonationAmount').innerText);
    // const noakhaliInput = parseInt(GetElementValueById('noakhaliInput'));

    // if ( isNaN(noakhaliDonationInputValue.value) || noakhaliDonationInputValue.value<0) {
    //     alert("Please Enter a Valid Number")
    //     return
    // }
 
    // if (donationCalculate()>noakhaliInput) {

    //     const nResult = noakhaliDonationAmount + noakhaliInput;
    //     getElementById('noakhaliDonationAmount').innerHTML = nResult

    //     const lastMoney = donationCalculate() - noakhaliInput;
    //     getElementById('myTotalMoney').innerText = lastMoney;

    //     historyCreate(noakhaliInput, titleNoakhali);




    //     successPop.classList.remove('hidden')
    //     popUpTimeout()
    //     noakhaliDonationInputValue.value = '';
        
    // }
    // else{
    //     alert("insufficient Balance")
    // }