
function Circle(radius){
	this.radius=radius;
	// this.getArea=function(){
	// 	return Math.PI * Math.pow(this.radius,2)
	// }
}

// circle을 여러개 new 할 때마다 function을 만들지 말고 
// 한번만 만들어서 그 function을 공유 할 수 있게 만듬. 
// prototype 사용
Circle.prototype.getArea = 
	function(){
		return Math.PI * Math.pow(this.radius,2)
	}

var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle=new Circle(100);
console.log(myOtherCircle.getArea());