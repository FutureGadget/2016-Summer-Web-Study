// Closures
function makeMultiplier(multiplier) {
	function b() {
		console.log("Multiplier is: " + multiplier);
	}
	b();
	return (
		function(x) {
			return multiplier * x;
		}
		);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// fake namespaces
var namespace1 = new Object(); // == var namespace1 = {};
namespace1.name = "dw";
namespace1.hello = function(){
	console.log("Hello, "+namespace1.name);
};
namespace1.hello();
console.log(namespace1);

// IIFE (Immediately invoked function expressions)
// ()();
(function(window){
	name = "dw";
	window.hello = function() {
		console.log("Hello, " + name);
	}
})(window);
hello();
console.log(window);