/*toggle icon*/
document.querySelector('#toggle').addEventListener('click', hamburger);

function hamburger() {
    let toggleCover = document.querySelector('#toggle-cover');
    
    if (toggleCover.classList == 'show') {
        toggleCover.classList.remove('show');
        toggleCover.classList = 'hide';
    }   else {
        toggleCover.classList = 'show';
     }
     
}

/*scroll effect*/
document.querySelector('#contactid').addEventListener('click', scrolldown);

function scrolldown() {
    window.scroll({
        top: 100,
        left: 0,
        duration: 1000,
        behavior: 'smooth'
    });
}

/*growserf*/
// Check to see if GrowSurf is available
if(!window.growsurf) {
    // Listen and wait for the Growsurf Universal Code to initialize
    window.addEventListener('grsfReady', () => {
      console.log('GrowSurf is Ready!');
      // You code goes here.... 
    });
  } else {
    console.log('GrowSurf is Already Available');
    // You code goes here....
  }// Check to see if GrowSurf is available
if(!window.growsurf) {
  // Listen and wait for the Growsurf Universal Code to initialize
  window.addEventListener('grsfReady', () => {
    console.log('GrowSurf is Ready!');
    // You code goes here.... 
  });
} else {
  console.log('GrowSurf is Already Available');
  // You code goes here....
}