function onToggleMenu(){
    const ionBtn = document.getElementById("ion-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenu.classList.toggle('hidden');

    if(mobileMenu.classList.contains('hidden')){
        ionBtn.style.color = "black";
        ionBtn.setAttribute('name','menu');
    } else{
        ionBtn.style.color = "white";
        ionBtn.setAttribute('name','close');
    }
}