function cariMedian(arr) {
  if (arr.length % 2 == 0) {
    i = ((arr.length / 2) - 1);
    j = (arr.length / 2);
    median = (arr[i] + arr[j]) / 2;
    return median;
  } else {
    i = Math.floor(arr.length / 2);
    median = i;
    return arr[median];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5