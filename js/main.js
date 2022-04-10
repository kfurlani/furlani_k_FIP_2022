(() => {
    //thought i was on the right track here but this doesn't work. was trying something different since I couldn't ge the array to work. 
    

let bttn = document.querySelector('#popbttn'),
    showPop = document.getElementById('#popup');

// trying to talk this out. in my css i should have an id that has a display of none or visibility of none 
// and then a second class with visible or display block (like we did with GOT)
// i think i need to do something like 'appendChild'
// create variable (like the let statement) then create array, create function and add event listener. 
// I almost understand each individual step but then when I need to add them all together I get the wrong answer. 
// i know this looks like i haven't done much but i've tried and then deleted multiple attempts. 


const popMsgData = [
    'HYDRAGLYDE IS OUR ULTRA MOISTURIZING FORMULA THAT HELPS KEEP YOU AND YOUR CONTACTS FEELING FRESH'
   
]


function openPopup()
    showPop.classList.add('.open-popup');

    let popMsgData = showPop.getElementsByClassName(".popup")

    //not right.. had to delete class/id from html since it was messing that up. 








bttn.addEventListener('click', openPopup);



})();