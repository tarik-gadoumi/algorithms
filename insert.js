var insert = function (array, rightIndex, value) {
  var key = value;

  for (var i = rightIndex; key < array[i]; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = key;

  //   for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
  //     array[j + 1] = array[j];
  //   }
  //   array[j + 1] = value;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
