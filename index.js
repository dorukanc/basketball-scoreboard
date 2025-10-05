let homeDisplay= document.getElementById('home-score')
let guestDisplay = document.getElementById('guest-score')

homeScore = 0
guestScore = 0

let homeButtons = document.getElementById('home-buttons')
let guestButtons = document.getElementById('guest-buttons')

homeButtons.addEventListener('click', function(e){
    if (e.target.tagName !== 'BUTTON') return;
    
   homeScore += parseFloat(e.target.dataset.value);
   homeDisplay.textContent = homeScore;
   console.log(homeScore)
        
})

guestButtons.addEventListener('click', function(e){
    if (e.target.tagName !== 'BUTTON') return;
    
   guestScore += parseFloat(e.target.dataset.value);
   guestDisplay.textContent = guestScore;
   console.log(guestScore)
        
})
