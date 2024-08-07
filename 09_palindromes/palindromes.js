const palindromes = function (string) {
    let regex = /[A-Za-z0-9]+/i;
    filteredString = string.replace(/[^a-zA-Z0-9]/g, '');
    for(a = 0, b = filteredString.length - 1; a < b; a++, b--){
        if(filteredString[a].toLowerCase() !== filteredString[b].toLowerCase()){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
