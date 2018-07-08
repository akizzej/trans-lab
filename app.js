//se declaran variables para guardar valores de input y elementos (HTML)
const input =document.querySelector("input")
const container=document.getElementById("elementos")

input.addEventListener("keypress",(Enter)=>
{
    let key = Enter.which || Enter.keyCode;
    if (key ===13)
    {
        let gif = input.value;
        input.value = ""; //limpiar casilla
        container.innerHTML="";
        //url que entrega pagina giphy apikey: U6ez8MR69J8unnN3fy2c4ARz589m0Lz3
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=U6ez8MR69J8unnN3fy2c4ARz589m0Lz3&q=${gif}&limit=25&offset=0&rating=G&lang=en`)
        .then(response =>response.json())
        .then(respuesta =>{ //respuesta es donde llegan mis json
            renderInfo(respuesta);

        })
    }
})
//declaro una constante para guardar mis respuestas
const renderInfo = respuesta =>{
    respuesta.data.forEach(element => {
        let gifImage = element.images.downsized.url;
        container.innerHTML += `<img src ="${gifImage}">`;
        
    });
}  