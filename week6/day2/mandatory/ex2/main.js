function winBattle(){
    return true;
}

function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}



experiencePoints()

var experiencePoints = winBattle()?10:1
console.log(experiencePoints)