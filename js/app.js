function shuffle(){

    const img = document.getElementById("img");
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    img.setAttribute("src", `../image/dado/${randomNumber}.png`);
    const sms = document.getElementById("status");
    sms.innerHTML = "El numero del dado es: " + randomNumber + ".";
}

function anim(){
    setTimeout(shuffle, 1200);
    const img = document.getElementById("img");
    
    img.setAttribute("src", "../image/dado/converted.gif");
    
}