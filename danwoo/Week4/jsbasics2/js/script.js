// Constructor
function Circle (radius) {
	this.radius = radius;
}

Circle.prototype.getArea = 
function () {
	return Math.PI * Math.pow(this.radius,2);
}

var myCircle = new Circle(10);
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// Constructor 2
function Dog (name) {
	this.name = name;
}

Dog.prototype.bark = function () {
	console.log(this.name + " Bark Bark!");
}
var dog = new Dog("Ham", "Sily");
// The second argument is not used, but gramatically legal in JS.
console.log(dog);
console.log(new Dog("a","b").bark());

// Array
var array = new Array();
array[0] = "Danwoo";
array[1] = 2;
array[2] = function(name) {
	console.log("Hello, "+ name);
};
array[3] = {course: "HTML, CSS & JS"};
console.log(array[3].course);

// Short hand array creation
var names = ["dw", "ug", "gh"];
function hello(array) {
	for (var i = 0; i < array.length; ++i) {
		console.log(names[i] + ", Hello!");
	}
}
hello(names);

//Object as an array
var Student = {
	name: "dw",
	age: "25",
	hello: function() {
		console.log(this.name + " Hello!");
	}
};

for (var x in Student) {
	console.log(x + ": " + Student[x]);
}

// Array length
function printObj(obj) {
	for (var i in obj) {
		console.log(i+" :" + obj[i]);
	}
}
console.log(length + " " + names.length);
printObj(names);
names.newobj = "newobject";
console.log(length + " " + names.length);
printObj(names);
