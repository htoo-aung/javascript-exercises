const getTheTitles = function(arr) {
    const titles = [];
    arr.forEach(obj => titles.push(obj.title));
    
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
