function getColor() {

   return '#' + Math.random().toString(16).slice(2, 8);
   
}
function setTextColor(){
     var textColor = getColor();
     document.getElementById("myH1").style.color = bgColor;
 }

function setBackground() {
var bgColor = getColor();
 document.body.style.background = bgColor;   
}

 document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        setBackground();
          
      }
document.body.onkeyup = function(e){
    if (e.keyCode == 67){
        setTextColor();
    }
}     
  }
 
 
 