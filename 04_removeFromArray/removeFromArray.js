const removeFromArray = function(array, ...items) {
    for (let i = 0; i < array.length; i++) {
        if (items.includes(array[i])) {
            array.splice(i,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
