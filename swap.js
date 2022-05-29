var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

// My  Array is  mutating !!!!!!
