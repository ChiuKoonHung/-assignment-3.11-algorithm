// Task 1: To implement selection sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation

function selectionSort(array) {
  //implement code here
  let toBeSortedArray = array;  // O(1)
  for(i=0; i<toBeSortedArray.length; i++) {  // O(N)
    let currentMin = i;
    for(j=i+1; j<toBeSortedArray.length; j++) {  // O(N)
      if(toBeSortedArray[j] < toBeSortedArray[currentMin]) { // O(NN)
        currentMin = j;
      }
    }
    if(i !== currentMin) {  // O(NN)
        let temp = toBeSortedArray[i];
        toBeSortedArray[i] = toBeSortedArray[currentMin];
        toBeSortedArray[currentMin] = temp;
    }
  }
  return toBeSortedArray;
}
// Big O Notation  O(N^2)
// Worse Case: ?   O(N^2)
// Average Case: ? O(N^2)
// Best Case: ?    O(N^2)

module.exports = selectionSort;
