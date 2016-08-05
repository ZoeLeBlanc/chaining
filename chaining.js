
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
/*
var sortIntegers = integers.sort(function(first, second){ return first - second});
var filterIntegers = integers.filter(function(integers){
	return integers <= 19 
});
var mapIntegers = integers.map(function(integers) {
	return integers * 1.5 -1
});
var reducedIntegers = integers.reduce(function(previous, current) {
	return previous + current
});

console.log(sortIntegers);
console.log(filterIntegers);
console.log(mapIntegers);
console.log(reducedIntegers);
*/
var chainedIntegers = integers.sort(function(first, second) {return first - second}).filter(function(integer) {return integer <= 19}).map(function(integers) {integers * 1.5 - 1 }).reduce(function(previous, current) {return previous + current});

console.log(chainedIntegers);
