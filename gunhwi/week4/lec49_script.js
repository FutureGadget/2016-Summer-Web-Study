var literalCircle={ // new object()
    radius:10,

    getArea : function(){

      //increaseRadious 하기위해 이 문장이 필요함
      var self = this;
      console.log(this);

      var increaseRadius = function(){
        self.radius=20;
      };
      //radius가 20으로 바뀌지 않음. inner function
      //window.radius 해보면 20으로 되어 있음.
      increaseRadius();
      console.log(this.radius);

      return Math.PI * Math.pow(this.radius,2);

    }
};

console.log(literalCircle.getArea());