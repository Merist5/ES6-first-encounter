'use strict';

//1
var h = 'Hello';
var w = 'World!';

console.log(h + ' ' + w);

//2
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));
console.log(multiply());

//3
var average = function average() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (a, b) {
    return a + b;
  }) / numbers.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var avg = function avg() {
  for (var _len2 = arguments.length, grades = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    grades[_key2] = arguments[_key2];
  }

  return grades.reduce(function (a, b) {
    return a + b;
  }) / grades.length;
};

console.log(avg.apply(undefined, grades));

//5
var arr = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = arr[2],
    lastname = arr[4];


console.log(firstname + ' ' + lastname);
