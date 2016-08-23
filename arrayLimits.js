function minOf(array) {
    /*This function takes an array as input and 
    returns the smallest element present in it */
    return array.reduce(function(a, b) {
        return Math.min(a, b);
    })
}

function maxOf(array) {
    /*This function takes an array as input and 
    returns the greatest element present in it */
    return array.reduce(function(a, b) {
        return Math.max(a, b);
    })
}
