
const interruttore = document.querySelector(".interruttore");
const lampada = document.querySelector(".lampada");
let spenta = true

interruttore.addEventListener('click',onOff);


function onOff() {
    if (spenta) {
        lampada.src = "img/yellow_lamp.png"
        interruttore.innerText = "Spegni"
        spenta = false
    }else{
        lampada.src="img/white_lamp.png"
        interruttore.innerText = "Accendi"
        spenta = true
    }

    
}