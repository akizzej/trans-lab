//con esto tomo el numero de codigo que ingrese el usuario

const boton = document.getElementById("btnSaldo");
        // 13 is enter
          // code for enter
          boton.addEventListener("click",()=>{
            let input = document.getElementById("input").value;
            
            let num = input;
             

          fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`) 
            .then(response => response.json())
            .then(data => {
                
                let datosBip= Object.values(data)//con object.values entro al obj
                let numeroTarjeta = datosBip[0];//llamo los datos dentro del array
                let saldoTarjeta = datosBip[2];
                let fechaSaldo = datosBip[3];
              
                //console.log(saldoTarjeta);//muestra x  consola el saldo
                
                document.getElementById("Saldo").innerHTML=saldoTarjeta; //imprime el saldo
            })   
           
    })
    