(() => {
    //thought i was on the right track here but this doesn't work. was trying something different since I couldn't ge the array to work. 
    

let bttn = document.querySelector('#popbttn'),
    showPop = document.getElementById('#popup');
    

function openPopup()
    showPop.classList.add('.open-popup');





bttn.addEventListener('click', openPopup);



})();