
function encenderApagar() { 
   var bombi = document.getElementById('bombilla');
   var boton = document.getElementById('boton');
   
   if (bombi.src.match('on')) {
      bombi.src = "off.jpg";
      boton.src = "boff.jpg";
   } 
  else { 
      boton.src = "bon.jpg";
      bombi.src = "on.jpg"; 
    } 
} 
