var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var flatArray = function (mang) {
    var results = mang.reduce(function (prev, current) {
        if(Array.isArray(current)){
            return prev.concat(flatArray(current));
        }
        return prev.concat(current);
    },[]);
    return results;
};
console.log(flatArray(arr));
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]