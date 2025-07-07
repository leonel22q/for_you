const messages = [
    "gracias por seguir aqui",
    "eres hermosa tal cual eres",
    "tu sonrisa provoca la mia",
    "cada momento juntos es unico",
    "te adoro como no lo imaginas",
    "no te vayas nunca de mi vida",
    "siempre quiero ver el cafe de tus ojos",
    "te amo infinitamente",
    "estemos juntos por siempre",
    "amo cada parte de ti",
    "eres la estrella de mi vida <3",
    "estare para ti cuando me necesites",
    "te amo incondicionalmente",
    "eres y siempre seras tu"
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className= "text-bubble";
    bubble.innerText= messages[Math.floor(Math.random()* messages.length)];

    const left = Math.random()* 80+10;
    const top = Math.random()*80+10;

    bubble.style.position= "absolute";
    bubble.style.left=left+"vw";
    bubble.style.top=top+"vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
       const rect = bubble.getBoundingClientRect();
       
       if(rect.right>window.innerWidth){
        const newleft =window.innerWidth - rect.width-10;
        bubble.style.left=`${newleft}px`;
       }
       if(rect.bottom> window.innerHeight){
        const newtop = window.innerHeight- rect.height-10;
        bubble.style.top =`${newtop}px`;
       }
       if(rect.left< 0){
        bubble.style.left="10px";
       }
       if(rect.top<0){
        bubble.style.top="10px";
       }
    },10);

    setTimeout(() =>{
        bubble.remove();
    },8000);
} 

setInterval(createTextBubble, 500);