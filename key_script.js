var keys = { 74: "J",
  75: "K",
  77: "M",
  188: "comma"
};

document.onkeydown = function(e){
  return keyEventHanlder(e, "activate");
}

document.onkeyup = function(e){
  keyEventHanlder(e, "");
}

function keyEventHanlder(e, className){
  var code = e.keyCode ? e.keyCode : e.which;
  var key = keys[code];
  if(key){
    var elem = document.getElementById(key);
    elem.className = className;
  }
}
