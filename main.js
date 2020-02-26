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