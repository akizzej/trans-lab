//con esto tomo el numero de codigo que ingrese el usuario

let input = document.querySelector('input');
        // 13 is enter
          // code for enter
          input.addEventListener("keypress",(enter)=>{
            let key = enter.which || enter.keyCode;
            if (key === 13) {
            let num = input.value;
             

          fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`) 
            .then(response => response.json())
            .then(data => {
                
                let datosBip= Object.values(data)//con object.values entro al obj
                let numeroTarjeta = datosBip[0];//llamo los datos dentro del array
                let saldoTarjeta = datosBip[2];
                let fechaSaldo = datosBip[3];
              
                //console.log(saldoTarjeta);//muestra x  consola el saldo
                document.getElementById("Saldo").innerHTML=saldoTarjeta; //imprime x  consola el saldo
            })   
        }    
    })
    

    
  
   
          


        
  