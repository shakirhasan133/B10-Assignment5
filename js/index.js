

const historyTabBtn = getElementById('historyTabBtn');
const donationTabBtn = getElementById('donationTabBtn');
const donationTab = getElementById('donationTab');
const historyTab = getElementById('historyTab');
const successPop = getElementById('successPop');
const popup = document.getElementById('popup');





// Donation Tab Button Work Here
donationTabBtn.addEventListener('click', function(){
    donationTabBtn.classList.add('bg-primary');
    donationTabBtn.classList.remove('bg-white');
    
    historyTabBtn.classList.remove('bg-primary');
    historyTabBtn.classList.add('bg-white');


        // unhide Donation Tab Element
        donationTab.classList.remove('hidden');

        // hide history Tab
        historyTab.classList.add('hidden');
})



// History Tab Button Work Here 

historyTabBtn.addEventListener('click', function(){
    // Change button color 
    historyTabBtn.classList.add('bg-primary');
    historyTabBtn.classList.remove('bg-white');

    donationTabBtn.classList.remove('bg-primary');
    donationTabBtn.classList.add('bg-white');


    // hide Donation Tab Element
    donationTab.classList.add('hidden');

    // unhide history Tab
    historyTab.classList.remove('hidden');
})




// Calculate Button Work Here

const btnNoakhali = document.getElementById('btnNoakhali');

btnNoakhali.addEventListener('click', function(){
    const titleNoakhali = getElementById('titleNoakhali').innerText;
    const noakhaliDonationInputValue = getElementById('noakhaliInput');
    const noakhaliDonationAmount = parseInt(getElementById('noakhaliDonationAmount').innerText);
    const noakhaliInput = parseInt(GetElementValueById('noakhaliInput'));

    if ( isNaN(noakhaliDonationInputValue.value) || noakhaliDonationInputValue.value<0) {
        alert("Please Enter a Valid Number")
        return
    }
 
    if (donationCalculate()>noakhaliInput) {

        const nResult = noakhaliDonationAmount + noakhaliInput;
        getElementById('noakhaliDonationAmount').innerHTML = nResult

        const lastMoney = donationCalculate() - noakhaliInput;
        getElementById('myTotalMoney').innerText = lastMoney;

        historyCreate(noakhaliInput, titleNoakhali);




        successPop.classList.remove('hidden')
        popUpTimeout()
        noakhaliDonationInputValue.value = '';
        
    }
    else{
        alert("insufficient Balance")
    }

  
})


// Close Pop Up

getElementById('closePop').addEventListener('click', function(){
    successPop.classList.add('hidden');
})