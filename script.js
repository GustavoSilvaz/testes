var h = new Date();
var hora = h.getHours();
var nome = document.getElementById("hour");
var c = document.getElementById("cor")
var ig=document.getElementById("imgd")


if (hora<12){
    nome.innerHTML=`Tenha um bom dia`;
    c.style.backgroundColor="gray";
    ig.innerHTML=`<img src="Amanhecer01.jpg" alt="">`;
} else if (hora<18) {
    nome.innerHTML=`Tenha uma boa tarde`; 
    c.style.backgroundColor="orange";
    ig.innerHTML=`<img src="pexels-photo-2386144.jpg" alt="">`
} else if (hora<24){
    nome.innerHTML=`Tenha uma boa noite.`;
    c.style.backgroundColor="blue";
    ig.innerHTML=`<img src="images.jpeg" alt="">`
}
