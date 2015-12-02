// task #1

var myBase = + prompt('Введите число');
var myExponent = + prompt('Введите степень');

function pow(myBase, myExponent) {
		var result = 1;
		for (i=0; i < myExponent; i++) {
		result = myBase * result
		};
	return result;
};

var calculationResult = pow(myBase, myExponent);
console.log('Ваш результат = ', calculationResult);
