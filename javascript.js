function submitbtn() {
  var x = document.getElementById("myname").value;
  var y = document.getElementById("my_address").value;
  alert("name value is" + " " + x + "\n" + " and value is" + " " + y );
};

function selectvalue() {
  var select_drop = document.getElementById("select_value").value;
  alert("select value is" + " " + select_drop);
};

function getvalue() {
  var checks = document.getElementsByClassName("checks");
  var str ="";

  for (i=0; i<3; i++) {
    if(checks[i].checked === true) {
      str += checks[i].value+" ";
     alert(str);
    }
  }

};

var counter  = "asdf";

for (counter=0; counter<10; counter++){
  document.write(counter);
}

var html  = "";
var text  = "box number";

for (i=0; i<10; i++){
  html += text + " " + i +  "<br />" ;
}
document.getElementById("help").innerHTML = html;

function submitform() {
  var name= document.getElementById("name").value;
  var address= document.getElementById("address").value;
  var message= document.getElementById("message").value;

  if (name === "") {
    alert("please enter your name");
  }
  else if (address === "") { 
     alert("please enter your address");
  }
  else if (message === "") { 
     alert("please enter your address");
  }
}