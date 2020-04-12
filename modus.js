/** MODUS */
function cariModus(arr) {
    var result = [];
    var modus;
    for (var i = 0; i < arr.length; i++) {
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j][0] === arr[i]) {
                found = true;
                result[j].push(arr[i]);
            }
        }
        if (found === false) result.push([arr[i]]);
    }
    console.log(result);
    var terbanyak;
    var lengthterbanyak = 0;
    for (var i = 0; i < result.length; i++) {
        if (result[i].length > lengthterbanyak) {
            lengthterbanyak = result[i].length;
            terbanyak = result[i][0]
        }
    }
    if (lengthterbanyak === 1 || result.length === 1) return -1

    return terbanyak;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1