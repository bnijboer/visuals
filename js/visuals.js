
var panel;
var r;
var g;
var b;
var color;
var num;
var bla;

setInterval(showFrame,750);

function showFrame(){
      panel = document.getElementsByClassName("color-panel");
      
      for(var i = 0; i < panel.length; i++){
            panel[i].style.backgroundColor = createColor();
      }
}

function createColor(){
      r = createValue();
      g =  createValue();
      b = createValue();
      color = "rgb(" + r  + ", " + g + ", " + b + ")"; 
      return color;
}

function createValue(){
      value = Math.floor(Math.random()*256);
      value = value.toString();
      return value;
}