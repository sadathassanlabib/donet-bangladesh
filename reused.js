//input value function//
function innerValue(id){
    const donation= document.getElementById(id).value;
    const donationNumber = parseFloat(donation);
    return donationNumber

}
//input text function//
function innerText(id){
    const cardMoney = document.getElementById(id).innerText;
    const cardMoneyNumber=parseFloat(cardMoney);
    return cardMoneyNumber
}

function donateMoney(currentDonationMoney,myTotalBlance,beforeDonationMoney,cardId,location){
   if( 
         currentDonationMoney >= myTotalBlance || currentDonationMoney === 0|| isNaN(currentDonationMoney)   ){ 
            alert("invalid Number");
            return
    }
    else{
    const money= currentDonationMoney+beforeDonationMoney
    document.getElementById(cardId).innerText= money

    // total balance //
    const myFinalBalance = myTotalBlance-currentDonationMoney;
    document.getElementById("my-balance" ).innerText= myFinalBalance


    // history//
    const history= document.createElement('div');
    history.className= 'bg-slate-50 p-8 mt-9 rounded-lg md-3 border border-indigo-500';
    history.innerHTML= 
    `<p class="">${currentDonationMoney} Taka is Donated for famine-2024 at ${location}, Bangladesh </p>
    <p>${new Date ().toLocaleDateString()};</p>`
    
    const historyResult=document.getElementById("history1")
    historyResult.insertBefore(history,historyResult.firstChild);
    
    return
    }
}



  
   