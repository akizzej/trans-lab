//con esto tomo el numero de codigo que ingrese el usuario
saldo = () => 
{
    document.getElementById("").innerHTML
}
tarifa = () => 
{
    document.getElementById("").innerHTML
}
perfil = () => 
{
    document.getElementById("").innerHTML
}
preguntas = () => 
{
    document.getElementById("#navbarToggleExternalContentTwo").innerHTML
}
home = () => 
{
    document.getElementById("").innerHTML
}

let input = document.getElementById("boton").value;

function getBip(num){

        
          // code for enter
          boton.addEventListener("keypress",(enter)=>{
            let key = enter.which || enter.keyCode;
            if (key === 13) {// 13 is enter
                let num = boton.value;
                boton.value = ""; //limpiar casilla
                //container.innerHTML="";


          fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`) 
            .then(response => response.json())
            .then(data => {
              
                console.log(data);
                
             })
            }
    
        })
    }
    
     console.log(getBip(''));




        
  