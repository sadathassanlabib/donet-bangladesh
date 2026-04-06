

// card-01
document.getElementById("card-01")
    .addEventListener( 'click', function(event){
    event.preventDefault();
    
    const feniBeforeMoney=innerText("card-01-donation-money")
    const feniCurrentTotalDonation= innerValue("card-01-input")
    const myTotalBlance= innerText('my-balance')
    
    donateMoney(
        feniCurrentTotalDonation,
        myTotalBlance,
        feniBeforeMoney,
        "card-01-donation-money",
        'feni')
    })

// card-02/

document.getElementById("card-02")
    .addEventListener( 'click', function(event){
    event.preventDefault();
  
    const noakhakliBeforeMoney=innerText("card-02-donation-money")
    const noakhaliCurrentTotalDonation = innerValue("card-02-input")
    const myTotalBlance= innerText('my-balance')
   
    donateMoney(
        noakhaliCurrentTotalDonation,
        myTotalBlance,
        noakhakliBeforeMoney,
        "card-02-donation-money",
        'noakhali')
    })

// card-03//
   
document.getElementById("card-03")
    .addEventListener( 'click', function(event){
    event.preventDefault();
    const qoutaBeforeMoney=innerText("card-03-donation-money")
    const qoutCurrentTotalDonation = innerValue("card-03-input")
    const myTotalBlance= innerText('my-balance')

    donateMoney(
        qoutCurrentTotalDonation,
        myTotalBlance,
        qoutaBeforeMoney,
        "card-03-donation-money",
        'quota')
})

       

 