

const historyTabBtn = getElementById('historyTabBtn');
const donationTabBtn = getElementById('donationTabBtn');
const donationTab = getElementById('donationTab');
const historyTab = getElementById('historyTab');






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