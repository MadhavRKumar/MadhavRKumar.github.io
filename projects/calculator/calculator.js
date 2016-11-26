var $screen = $(".screen");
var operators = ["-", "+", "\u00f7", "\u00d7"];
var canUseDecimal = true;
$(document).ready(function() {
$(".number").click(function(){
   $screen.text($screen.text()+$(this).text());
});

$(".clear").click(function(){
 $screen.text("");
});

$(".operator").click(function(){
  var length = $screen.text().length;
  if(!isOperator($screen.text()[length-1]) && length !==0 ){
    $screen.text($screen.text()+$(this).text());
    canUseDecimal = true;
  }
});

$(".equal").click(function(){
  var answer = $screen.text().replace(/\u00d7/g, "*").replace(/\u00f7/g, "/");
  $screen.text(eval(answer));
});

$(".decimal").click(function(){
  var length = $screen.text().length;
  if(!isOperator($screen.text()[length-1]) && length !==0 && canUseDecimal){
    $screen.text($screen.text()+$(this).text());
    canUseDecimal = false;
  }
});

});

function isOperator(val){
  for (var x=0; x<operators.length; x++){
    if(operators[x] == val){
      return true;
    }
  }
  return false;
}
