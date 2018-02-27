var map = {};
var buttons;
var off = 'off';
var on = 'on';
var modal;
var buttonContainer;

function change(elem){
  var associate = map[elem.id];
  switchState(elem);
  switchState(associate);
  checkWin();
}

function switchState(elem){
  var newState = elem.className == off ? on : off; //switches class name from off to on and vice versa
  elem.className = newState;
}

function closeModal(){
  modal.style.display = 'none';
}

function openModal(){
  modal.style.display = 'block';
}

function setButtons(){
  var button;
  var x;
  var length = buttons.length;
  for(x=0; x<length; x++){
    button = buttons.shift();     //remove the first button from the array so it doesn't pair with itself
    button.onclick = function(){
      change(this)
    };
    button.className = on;
    var index = Math.floor(Math.random()*buttons.length);   //get a random button to pair it with
    map[button.id] = buttons[index];
    buttons.push(button);  //re-add the button back to the end of the array
  }
}

function addButton(){
  var newButton = document.createElement('button');
  newButton.className = on;
  newButton.id = buttons.length+1;
  buttonContainer.appendChild(newButton);
  buttons.push(newButton);
  setButtons();
}

function removeButton(){
  if(buttons.length>2){
    var toRemove = buttons.pop();
    toRemove.parentNode.removeChild(toRemove);
    setButtons();
  }
}

function init(){
  buttonContainer = document.getElementById('buttons');
  var plus = document.getElementById('plus');
  var minus = document.getElementById('minus');
  var collection = buttonContainer.getElementsByTagName('button'); //getElementsByTagName returns an HTMLCollection
  buttons = [].slice.call(collection);                      //convert it into an array
  modal = document.getElementById('modal-window');
  var close = document.getElementsByClassName('close')[0];
  setButtons();
  close.addEventListener('click', function(){
    closeModal();
    setButtons();
  });
  plus.addEventListener('click', addButton);
  minus.addEventListener('click', removeButton);
}

function checkWin(){
  var x;
  var length = buttons.length;
  for(x=0; x<length; x++){
    if(buttons[x].className == on){
      return;
    }
  }
  openModal();
}

document.addEventListener('DOMContentLoaded', init, false);
