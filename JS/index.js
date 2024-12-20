/*var corazon1=document.getElementById("foto1")
corazon1.onclick=function(){
    var contador1=document.getElementById("span1")    
    contador1.innerHTML=parseInt(contador1.innerHTML)+1;
    alert("dame más")

}

var corazon2=document.getElementById("foto2")
corazon2.onclick=function(){
    var contador2=document.getElementById("span2")    
    contador2.innerHTML=parseInt(contador2.innerHTML)+1;
    alert("dame más")
}

function incrementarContador(idFoto, idSpan) {
    var corazon = document.getElementById(idFoto);
    corazon.onclick = function() {
        var contador = document.getElementById(idSpan);
        contador.innerHTML = parseInt(contador.innerHTML) + 1;
        alert("Dame más");
    }
}

incrementarContador("foto1", "span1");
incrementarContador("foto2", "span2");
incrementarContador("foto3", "span3");
incrementarContador("foto4", "span4");
incrementarContador("foto5", "span5");
incrementarContador("foto6", "span6");
*/

var corazones=document.getElementsByClassName("fa-heart");

for (let index = 0; index < corazones.length; index++) {
    var element = corazones[index];
    element.onclick=function(c){
                var cont=c.target.nextElementSibling;
                cont.innerHTML++;
        
    }
}