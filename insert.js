var insert = function (array, rightIndex, value) {
  var key = value;
  for (var i = rightIndex; key < array[i]; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = key;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
