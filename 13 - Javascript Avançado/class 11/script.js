/*

 CALLBACKS
*/

function exibirNaTela(dados){
    console.log('beleza', dados)
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => carregarFotos(exibirNaTela)

function carregarFotos(callback){
        const xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
            const response = JSON.parse(this.responseText) 
            
            console.log(response[9])
            if(callback){
                callback(response)
            }    
            
            }
            

        }


        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
        xhttp.send()
}
