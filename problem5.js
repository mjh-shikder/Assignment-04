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

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));

