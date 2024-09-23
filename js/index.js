

const historyTabBtn = getElementById('historyTabBtn');
const donationTabBtn = getElementById('donationTabBtn');
const donationTab = getElementById('donationTab');
const historyTab = getElementById('historyTab');
const successPop = getElementById('successPop');
const popup = document.getElementById('popup');
const btnNoakhali = document.getElementById('btnNoakhali');
const btnFeni = document.getElementById('btnFeni');
const btnQuota = document.getElementById('btnQuota');





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

btnNoakhali.addEventListener('click', function(){
    
    const dTitle = 'titleNoakhali';
    const inputV = 'noakhaliInput';
    const Totaldiv = 'noakhaliDonationAmount';

    calculate(dTitle, inputV, Totaldiv)


})



// Feni Calculate Btn Work Here
btnFeni.addEventListener('click', function(){
    const dTitle = 'feniTitle';
    const inputV = 'feniInput';
    const Totaldiv = 'feniDonationAmmount';

    calculate(dTitle, inputV, Totaldiv)
})


// Quota Calculate Btn Work Here
btnQuota.addEventListener('click', function(){
    const dTitle = 'quotaTitle';
    const inputV = 'quotaInput';
    const Totaldiv = 'quotaDonationAmmount';

    calculate(dTitle, inputV, Totaldiv)
})





// Close Pop Up

getElementById('closePop').addEventListener('click', function(){
    successPop.classList.add('hidden');
})