var arr = [["a", 1, true], ["b", 2, false]];

var result = arr.reduce(function(acc, innerArray) {
    innerArray.forEach(function(element, innerIndex) {
        if (!acc[innerIndex]) {
            acc[innerIndex] = [];
        }
        acc[innerIndex].push(element);
    });
    return acc;
}, []);

console.log(result);
