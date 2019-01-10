// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }



document.addEventListener("DOMContentLoaded", function(){

document.querySelector("#save_lincoln").addEventListener("click", lincolnTimer);

});

let timer = '0';
function lincolnTimer(){
interval = (parseInt(document.querySelector("input").value));

  if (Number.isInteger(interval) == false) {interval = 500;};
  if (document.querySelector("#save_lincoln").innerText == "Kill Lincoln!"){
    timer = setInterval(function(){fadeInLincoln(interval);}, 1/interval);
  } else {
    console.log(`lincolnTimer interval: ${interval}`)
    timer = setInterval(function(){fadeOutLincoln(interval);}, 1/interval);
  };
};

let currentOpacity = 1;
function fadeOutLincoln(interval){
    console.log(`currentOpacity: ${currentOpacity}`)
    console.log(`interval: ${interval}`)
    currentOpacity = currentOpacity - (1/interval);
    if (currentOpacity < 0){
      clearInterval(timer);
      document.querySelector("#foreground").style.opacity = 0;
      document.querySelector("#save_lincoln").innerText = "Kill Lincoln!"
    }
    document.querySelector("#foreground").style.opacity = currentOpacity;
;};


function fadeInLincoln(interval){
    console.log(`currentOpacity: ${currentOpacity}`)
    console.log(`interval: ${interval}`)
    currentOpacity = currentOpacity + (1/interval);
    if (currentOpacity > 1){
      clearInterval(timer);
      document.querySelector("#foreground").style.opacity = 1;
      document.querySelector("#save_lincoln").innerText = "Save Lincoln!"
    }
    document.querySelector("#foreground").style.opacity = currentOpacity;
;};
