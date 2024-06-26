const palindromes = function (str) {
    let strArray = str.toLowerCase().split('');
    const filteredArr = strArray.filter((character) => {
        if (character >= 'a' && character <= 'z') {
            return true;
        }
        else if (character >= '0' && character <= '9') {
            return true;
        }
        else {
            return false;
        }
    });

    const reverseFilteredArr = filteredArr.slice().reverse();

    if (filteredArr.join('') === reverseFilteredArr.join('')) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
