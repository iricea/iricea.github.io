// task #1

var myBase = prompt('Введите число');
var myExponent = prompt('Введите степень');

function pow(myBase, myExponent) {
	var result;
	result = Math.pow(myBase, myExponent);
	return result;
}

var calculationResult = pow(myBase, myExponent);
console.log('Ваш результат = ', calculationResult);
