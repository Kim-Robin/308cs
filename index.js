// document.ready(function(){
//   "button-config".click(function(){
//     "button".fadeOut();
//
//   });
// });


function changeGrad(){
  document.getElementById("button-config").addEventListener("click", function(){
    document.getElementById("login").style.background = "linear-gradient(" + 130 + "deg, #E68745 50%, #6FCBC3 50%)";
    var t = document.getElementById("button-config");
    t.parentNode.removeChild(t);
    var y1 = document.getElementById("button-config-in1");
    y1.style.display = "initial";
    var y2 = document.getElementById("button-config-in2");
    y2.style.display = "initial";
  });
}
changeGrad();
