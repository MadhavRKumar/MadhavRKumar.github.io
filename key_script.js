//JS object acts as library for our keyCodes
var keys = { 74: "J",
  75: "K",
  77: "M",
  188: "comma"
};

document.onkeydown = function(e){
  return keyEventHandler(e, "activate");
}

document.onkeyup = function(e){
  return keyEventHandler(e, "");
}

function keyEventHandler(e, className){
  var code = e.keyCode ? e.keyCode : e.which;
  var key = keys[code];
  if(key){
    var elem = document.getElementById(key);
    if(!className){
      simulateClick(elem);
      elem.className = "key";  //reset the css to an unpressed key
    }
    else{
      if(!elem.className.includes(className)){  //makes sure to only add the className once
        elem.className = elem.className+" "+className;
      }
    }
  }
}
function simulateClick(el) {
  var event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  el.dispatchEvent(event);
}
