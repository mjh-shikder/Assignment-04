function  onlyCharacter( str ) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    
 
    return str.replace(/\s+/g, "").toUpperCase();
    
}

const letter = onlyCharacter(true)
console.log(letter);
