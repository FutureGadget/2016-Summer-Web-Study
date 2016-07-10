/* String Concat */

// var x = "Hello World!";
var s = "Hello";
s += " World";

console.log(s);

// Equality
var x = 4, y = 4;
if (x == y) {
	console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
	console.log("x='4' is equal to y=4");
}

if (x === y) {
	console.log("Strict: x=4 === y=4");
} else {
	console.log("Strict: x='4' !== y=4");
}

// If statement
if ( false || null || undefined || "" || 0 || NaN) {
	console.log("This line won't ever execute");
} else {
	console.log("All false");
}

// {} style
function a()
{
	return
	{
		name: "Yaakov"
	};
}

// For loop
var sum = 0;
for (var i = 0; i < 10; ++i) {
	sum = sum + i;
}

console.log("sum of 0 through 9 is " + sum);

// object
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	"stock of company": 110
};

console.log(facebook.ceo.firstName);

// Function
function makeMultiplier(multiplier) {
	var myFunc = function(x) {
		return multiplier * x;
	}
	return myFunc;
}

function doOperationOn(x, operation) {
	return operation(x);
}

var f = makeMultiplier(3);
console.log(doOperationOn(3,f));