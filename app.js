 // on se position sur l'ecran c est a dire input  c est l'ecran
 var input=document.getElementById("inputLabel");
 // des le click sur une bouton on lance la fonction BtnClick qui a en parametre objet donc dont on a click
 function BtnClick(obj){
     // recuperation de la valeur de la bouton click
     var valeur=obj.value;
     if(valeur=='='){
         // si on a clické sur = on evalue  l expression dans l'input
         input.innerHTML=eval(input.innerHTML);
     }else if(valeur=='AC'){
         // si on a clické sur ac on efface
         input.innerHTML='';
     }else{
         // si on a ni clické sur = ni sur AC  c est a dire si on appui sur un chiffre un operateur
         // on teste aussi qu'on a saise quelque chose 
         if(input.innerHTML=='0'){
             // si avant le click la valeur de la calculatrise etait 0 en avec la valeur clicke a l'ecran
              input.innerHTML=valeur;
         }else{
             // sinon on concaterne l avec la valeur trouve
             input.innerHTML+=valeur;
         }
     }
 }