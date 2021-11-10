// Task 1: To implement bubble sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation


function bubbleSort(array) {
  let toBeSortedArray = array;  // O(1)
  for(i=0; i<toBeSortedArray.length; i++) { // O(N)
    for(j=0; j<toBeSortedArray.length; j++) {  // O(N)
      if(toBeSortedArray[j] > toBeSortedArray[j+1]) { // O(NN)
        let temp = toBeSortedArray[j];
        toBeSortedArray[j] = toBeSortedArray[j+1];
        toBeSortedArray[j+1] = temp;
      }
    }
  }

  return toBeSortedArray;
}

// Big O Notation ?  O(N^2)
// Worse Case: ?     O(N^2)
// Average Case: ?   O(N^2)
// Best Case: ?      O(N)

module.exports = bubbleSort;

// c=a;
// a=b;
// b=c;
