// task #2

var name;
var arr = [];

for (var i = 0; i <5; i++) {
	name = prompt('Enter some name');
	arr[i] = name;
}

console.log(arr);

var yourName = prompt('Enter your name');

// method #1
if (arr.indexOf(yourName) != -1) {
	alert(yourName + ', you entered successfully');
} else {
	alert("you don\'t have permission")
}

// method #2
// for (var i = 0; i < 5; i++) {
// 	var check = 0;
// 	check = check + (yourName === arr[i]);
// }

// console.log(check);

// if (check > 0) {
// 	alert(yourName + ', you entered successfully');
// } else {
// 	alert("you don\'t have permission")
// }


