$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  debugger;
  if(isNaN(interval)) {
    
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}



// let button = document.querySelector('#save_lincoln')
//
// function fixThatBitch() {
//   let intervalInput = document.querySelector('#interval')
//   let zombie = document.querySelector('#foreground')
//   const removeZombie = function(){zombie.parentElement.removeChild(zombie)}
//   let parsedInterval = parseInt(intervalInput.value)
//   if (isNaN(parsedInterval)) {
//     setTimeout(removeZombie, 5000);
//   }else{
//     setTimeout(removeZombie, parsedInterval);
//   }
//
// }
//
// button.addEventListener('click', fixThatBitch)
