let homeStoreEl = document.getElementById("home-score")
let guestStoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function increment1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increment2() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increment3() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increment4() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function increment5() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function increment6() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeStoreEl.textContent = homeScore;
    guestStoreEl.textContent = guestScore;
}