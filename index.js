
function changeScore() {
    let localScore = +document.getElementById("local").textContent
    let awayScore = +document.getElementById("away").textContent
    let changePoints = arguments[0]
    let teamChanged = arguments[1]

    if(teamChanged == 'local') {
        localScore += changePoints
        document.getElementById("local").textContent = localScore
    }    else{
        awayScore += changePoints
        document.getElementById("away").textContent = awayScore
    }
}



