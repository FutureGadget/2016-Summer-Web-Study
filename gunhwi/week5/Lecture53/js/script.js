// D O M

function sayHello(){
  var name=document.getElementById("name").value;

  var message ="Hello "+name+"!!!";

  // document
  //   .getElementById("content")
  //   .textContent=message;

  document
    .getElementById("content")
    .innerHTML=message;


  if(name==="student"){
    var title = document.querySelector("#title").textContent;
    title+=" & enjoy it!!";
    document.querySelector("h1").textContent=title;
  }

}