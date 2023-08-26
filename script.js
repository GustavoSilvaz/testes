var h = new Date();
var hora = h.getHours();

if (hora<12){
    var nome =document.getElementById("hour");
    nome.innerHTML=`Tenha um bom dia`;
    
} else if (hora<18) {
    var nome =document.getElementById("hour");
    nome.innerHTML=`Tenha uma boa tarde`; 

} else if (hora<24){
    var nome =document.getElementById("hour");
    nome.innerHTML=`Tenha uma boa noite.`;
}
