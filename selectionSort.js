var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function (array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function (array) {
  var result;
  for (var i = 0; i < array.length; i++) {
    result = indexOfMinimum(array, i);
    swap(array, result, i);
  }
  return result;
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println('Array after sorting:  ' + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
var a = [-1, -9, 2, 8, -5];
var b = [1, 2, 0, 5];
selectionSort(a);
Program.assertEqual(a, [-9, -5, -1, 2, 8]);
selectionSort(b);
Program.assertEqual(b, [0, 1, 2, 5]);
