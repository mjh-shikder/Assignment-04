function totalFine( fare ) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    
    let surCharge = fare * 0.20;
    let fine = surCharge + fare + 30;
    
    return fine;

}


