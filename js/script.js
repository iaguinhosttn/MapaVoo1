var ibl = document.getElementById('pesquisar_destino')

ibl.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
       var destino = e.target.value

       switch(destino){
        case 'Canadá': 
            window.location = "voos.html?canada"
            break;
        case 'Paris':
            window.location = "voos.html?paris"
            break;
        case 'Porto de Galinhas':
            window.location = "voos.html?portodegalinhas"
            break;

       }

    }
} )