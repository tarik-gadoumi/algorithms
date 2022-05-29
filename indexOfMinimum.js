var indexOfMinimum = function (array, startIndex) {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:
  var minValue = array[startIndex];
  var minIndex = startIndex;

  // Loop over items starting with startIndex,
  // updating minValue and minIndex as needed:
  for (var i = minIndex + 1; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
      minIndex = i;
    }
  }
  return minIndex;
};

var array = [18, 6, 66, 44, 9, 22, 14];
var index = indexOfMinimum(array, 2);

var indexOfMinimum = function (array, startIndex) {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:

  var minValue = array[startIndex];
  var minIndex = startIndex;

  // Loop over items starting with startIndex,
  // updating minValue and minIndex as needed:

  for (var i = minIndex + 1; i < array.length; i++) {
    //If this smallest value occurs more than once in this range,
    if (array[i] < array[minIndex]) {
      // i occurs more than minIndex which = startIndex?

      //then return the index of the leftmost occurrence within this range.

      minIndex = i; //index of leftmost occurence?
      minValue = array[i]; // why is this?
    }
  }
  return minIndex;
};
