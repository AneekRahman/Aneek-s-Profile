//THE PROFILE SCRIPTINGS HERE

var profileTrigger=0;
var sideProfileSelect=document.getElementById('sideProfile');
var profilebtnSelect=document.getElementById('profilebtn');
var proStyleSelect=document.getElementById('proArrowStyle');

function hideShowSide(){
    switch(profileTrigger){
        case 0:
            sideProfileSelect.style.width='240px';
            sideProfileSelect.style.padding='20px'; profilebtnSelect.style.backgroundColor="#00bbff";
            profilebtnSelect.style.color='#fff';
            proStyleSelect.innerHTML='#sideProfile::before{content: "";border: 10px solid;border-color: transparent transparent transparent #24c0ff;font-size: 0;position: fixed;top: 36px;left: 78px;transform: scaleY(4.6) scaleX(2.5);display:block}';
            document.getElementById('borFade').style.display='block';
            profileTrigger=1;
            break;
        case 1:
            sideProfileSelect.style.width='0';
            sideProfileSelect.style.padding='20px 0';
            profilebtnSelect.style.backgroundColor="#233442";
            proStyleSelect.innerHTML='#sideProfile::before{display:none}';
            document.getElementById('borFade').style.display='none';
            profileTrigger=0;
            break;
    }
}