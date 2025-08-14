// Problem-1
function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }

    let surCharge = fare * 0.20;
    let fine = surCharge + fare + 30;

    return fine;

}

// Problem-2
function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }


    return str.replace(/\s+/g, "").toUpperCase();

}


// Problem-3
function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    const total1 = player1.foul + player1.cardY + player1.cardR;
    const total2 = player2.foul + player2.cardY + player2.cardR;

    if (total1 < total2) {
        return player1.name;
    }
    else if (total2 < total1) {
        return player2.name;
    }
    else {
        return "Tie";
    }
}



// Problem-4
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}




// Problem-5
function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let PassCount = 0;
    let failCount = 0;

    for (let mark of marks) {
        total += mark;
        if (mark >= 40) {
            PassCount++;
        }

        else {
            failCount++;

        }
    }

    let avarage = Math.round(total / marks.length);
    return {
        fainalScore: avarage,
        pass: PassCount,
        fail: failCount

    };
}


