let menssagemVermelho = "Banheiro"
let menssagemAzul= "Fralda"
let menssagemVerde= "Comida"
let menssagemAmarelo = "Trocar Roupa"
let menssagemBranco = "Emergência"

function buttonDisplay(i){
    let boxDisplay = document.getElementById("display")
    let notificationDisplay = document.getElementById("notificationButton")
    switch(i){
        case 1:
            boxDisplay.innerHTML = menssagemVermelho;
            notificationDisplay.innerHTML = menssagemVermelho;
            break;
        case 2:
            boxDisplay.innerHTML = menssagemAzul;
            notificationDisplay.innerHTML = menssagemAzul;
            break;
        case 3:
            boxDisplay.innerHTML = menssagemVerde;
            notificationDisplay.innerHTML = menssagemVerde;
            break;
        case 4:
            boxDisplay.innerHTML = menssagemAmarelo;
            notificationDisplay.innerHTML = menssagemAmarelo;
            break;
        case 5:
            boxDisplay.innerHTML = menssagemBranco;
            notificationDisplay.innerHTML = menssagemBranco;
            break;
        default:
            break;
    }
    arrowCountdown(1);
    
}

function saveButton(){
    let NewRed = document.getElementById('redInput').value
    let NewBlue = document.getElementById('blueInput').value
    let NewGreen = document.getElementById('greenInput').value
    let NewYellow = document.getElementById('yellowInput').value
    let NewWhite = document.getElementById('whiteInput').value
    arrowCountdown(2);
    if (NewRed.trim()){
        menssagemVermelho = NewRed
    }
    if (NewBlue.trim()) {
        menssagemAzul = NewBlue;
    }
    if (NewGreen.trim()) {
        menssagemVerde = NewGreen;
    }
    if (NewYellow.trim()) {
        menssagemAmarelo = NewYellow;
    }
    if (NewWhite.trim()) {
        menssagemBranco = NewWhite;
    }
    alert("Comandos Atualizado")
    event.preventDefault();
    
}
function arrowCountdown(i){
    const arrow = document.getElementById('arrow');
    const arrow2 = document.getElementById('arrow2');
    let countdown = 0;
    let countdownTimer = 4;
    const intervalo = setInterval(() =>{
        countdown++;
        if (countdown >= countdownTimer){
            arrow.style.display = 'none';
            arrow2.style.display = 'none';
            clearInterval(intervalo)
        } else{
            switch (i){
                case 1:
                    arrow.style.display = 'block';
                break;
                case 2:
                    arrow2.style.display = 'block';
                break;
            }
            
        }
    }, 1000)
}