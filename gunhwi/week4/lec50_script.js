

// var names2 = ["Yaakov", "John", "Joe"];

// var myObj = {
//   name: "Yaakov",
//   course: "HTML/CSS/JS",
//   platform: "Courera"
// };
// for (var prop in myObj) {
//   console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }



//Arrays
var array=new Array();
array[0]="gunhwi";
array[1]=2014;
array[2]=function(name){
	console.log("HEllO"+" "+name);
};
array[3]={course:"HTML,CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course+" Course");


//Short-Hand Array Creation
var names=["gunhwi", "joe", "cho"];
console.log(names);

for(var i=0; i<names.length; i++){
	console.log(i+"번째 출력 : "+names[i]);
}

// names[50]="abc";
// for(var i=0; i<names.length; i++){
// 	console.log(i+"번째 출력 : "+names[i]);
// }


var names2=["ABCD", "joe", "XYZ"];

var myObj={
	name:"gunhwi",
	course:"HTML/CSS/JS",
	platform:"Coursera"
};

for(var name in names2){
	console.log("Hello "+names2[name]);
}


names2.greeting="Hi!!!!!";
for(var name in names2){
	console.log("Hello "+names2[name]);
}





















