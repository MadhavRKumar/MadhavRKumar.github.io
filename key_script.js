var keys = { 74: "J",
  75: "K",
  77: "M",
  188: "comma"
};

document.onkeydown = function(e){
  var code = e.keyCode ? e.keyCode : e.which;
  var key = keys[code];
  if(key){
    var elem = document.getElementById(key);
    elem.className += "activate";
    setTimeout(function(){ unpress(elem)}, 100);
  }
}

function unpress(elem){
  elem.className = "";
}
