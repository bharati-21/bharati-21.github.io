const introHead = document.querySelector('.intro-head');
document.addEventListener('DOMContentLoaded', loadIntroHead);

let i = 0;
const introText = "Hello there, I am Bharati. Welcome to my space!";  
const w = window.matchMedia("(min-width: 990px)");

function loadIntroHead(e) {
    typeChars(introText);

}

function typeChars() {
    if(i < introText.length) {
        introHead.innerHTML+= introText.charAt(i);
        i++;

        setTimeout(typeChars, 100);
    }
    else {
        
        if(w.matches) {
            setTimeout(() => {
                introHead.innerHTML = "";
                i = 0;
                setTimeout(typeChars, 100);
            }, 5000);
        }
        
    }
}
