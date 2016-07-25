// Object
// Method 1. By defining an object variable
var obj = {
    name: "danwoo",
    school: "Korea Univ.",
    favoriteSeries: "Good Wife",
    printFav: function() {
        console.log(this.favoriteSeries);
    }
};
obj.printFav();

// Method2. By using constructor function
function Dw() {
    this.name = "Dw";
    this.school = "Korea Univ.";
    this.printSchool = function() {
        console.log(this.school);
    }
}

var dw = new Dw();
dw.printSchool();

// Method3. By using Constructor function with prototype chain
var Dw = function () {};
Dw.prototype = {
    name: "danwoo",
    school: "Korea Univ.",
    printName: function() {
        console.log(this.name);
    }
}

var dw = new Dw();
dw.printName();

// Inheritance
function Human(age) {
    this.age = age;
    this.birthday = "1992.4.12";
    this.printAge = function() {
        console.log(this.age);
    }
}

function DW() {
    this.name = "danwoo";
    this.school = "Korea Univ.";
    this.printName = function() {
        console.log(this.name);
    }
    this.base = new Human(25);
    this.printBirth = function() {
        console.log(this.base.birthday);
    }
}
DW.prototype = new Human(25); // Attach a new Prototype chain to the function "DW".
console.log(DW);
var dw = new DW();
console.log(dw);
// dw.prototype = new Human(25); WRONG CODE!
dw.printAge();
dw.printBirth();

// Test prototype chain
var a = {
    x : 10,
    y : 20
}
var b = {
    y : 50,
    z : 30
}
function testa() {};
testa.prototype = a;
function testb() {};
testb.prototype = b;           // 1체인 설정
testb.prototype.__proto__ = a; // 2체인 설정 주의. prototype.prototype아님

var otestb = new testb();
console.log(otestb);
console.log(otestb.x); // 2체인
console.log(otestb.y); // 1체인