// task #2
var names = [];

for (var i = 0; i < 5; i++) {
	names.push( prompt('Enter some name') );
}

console.log(names);

var yourName = prompt('Enter your name');

// method #1
// if (names.indexOf(yourName) != -1) {
// 	alert(yourName + ', you entered successfully');
// } else {
// 	alert("you don\'t have permission")
// }

// method #2
for (var i = 0; i < names.length; i++) {
	var isMatch = (yourName === names[i]);
	break;
}

console.log(isMatch);

if (isMatch) {
	alert(yourName + ', you entered successfully');
} else {
	alert("you don\'t have permission")
}