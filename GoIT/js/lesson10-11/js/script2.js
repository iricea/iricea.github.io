// task #2

var name;
var arr = [];

for (var i = 0; i <5; i++) {
	name = prompt('Enter some name');
	arr[i] = name;
}

var yourName = prompt('Enter your name');

if (arr.indexOf(yourName) != -1) {
	alert(yourName + ', you entered successfully');
} else {
	alert("you don\'t have permission")
}

