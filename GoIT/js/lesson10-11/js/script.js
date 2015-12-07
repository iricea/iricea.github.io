// task #1

var myBase = parseInt( prompt('Введите число') );
var myExponent = parseInt( prompt('Введите степень') );

function pow(myBase, myExponent) {
	var result = 1;
	for (var i = 0; i < myExponent; i++) {
		result *= myBase;
	}
	return result;
}

// var calculationResult = pow(myBase, myExponent);
console.log( 'Ваш результат =', pow(myBase, myExponent) );
