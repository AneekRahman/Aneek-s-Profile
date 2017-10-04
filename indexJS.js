//THE PROFILE SCRIPTINGS HERE

var profileTrigger=0;
var sideProfileSelect=document.getElementById('sideProfile');
var profilebtnSelect=document.getElementById('profilebtn');
var proStyleSelect=document.getElementById('proArrowStyle');

function hideShowSide(){
    switch(profileTrigger){
        case 0:
            sideProfileSelect.style.width='300px';
            sideProfileSelect.style.padding='20px'; profilebtnSelect.style.backgroundColor="#00bbff";
            profilebtnSelect.style.color='#fff';
           /* proStyleSelect.innerHTML='#sideProfile::before{content: "";border: 10px solid;border-color: transparent transparent transparent #24c0ff;font-size: 0;position: fixed;top: 43px;left: 91px;transform: scaleY(5.3) scaleX(2.5);display:block}'; */
            profileTrigger=1;
            break;
        case 1:
            sideProfileSelect.style.width='0';
            sideProfileSelect.style.padding='20px 0';
            profilebtnSelect.style.backgroundColor="#000";
            proStyleSelect.innerHTML='#sideProfile::before{display:none}';
            profileTrigger=0;
            break;
    }
}