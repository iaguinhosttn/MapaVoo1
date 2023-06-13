 // alert(url_val)
 var exibir = document.getElementById('painel-voo')

 if(url_val === 'canada'){
     exibir.innerHTML = `
     <div class="bg-blue rounded-10 mt-10 p-15 w-100 bg-white" id="painel-voo">                
         <div class="d-flex-column">
             <div  class="d-flex-row justify-between">
                 <div><strong>Origem</strong></div>
                 <div><strong>Destino</strong></div>
             </div>
             <div  class="d-flex-row justify-between">
                 <div>
                     <span class="font-22">GRU - Garulhos</span>
                 </div>
                 <div>
                     <span class="font-22">YYZ - Canadá</span>
                 </div>
             </div>
             <div  class="d-flex-row justify-between align-center">
                 <div class="d-flex-row align-center justify-between">
                     <div>
                         <span class="text-blue bold">08:00 hrs</span>
                     </div>
                     <div class="ml-10">  
                         <span>Gate 001</span>
                     </div>
                     <div>  
                         <span class="ml-10">
                             <img src="imagens/lua-crescente.png" alt="noturno" class="icone">
                         </span>
                     </div>    
                 </div>
                 <div>
                     <span class="text-blue bold">22:40 hrs</span>
                 </div>
             </div>
         </div>
     </div>          
     
     `
 }
 else if(url_val === 'paris'){
     exibir.innerHTML = `
     <div class="bg-blue rounded-10 mt-10 p-15 w-100 bg-white" id="painel-voo">                
         <div class="d-flex-column">
             <div  class="d-flex-row justify-between">
                 <div><strong>Origem</strong></div>
                 <div><strong>Destino</strong></div>
             </div>
             <div  class="d-flex-row justify-between">
                 <div>
                     <span class="font-22">GRU - Garulhos</span>
                 </div>
                 <div>
                     <span class="font-22">PRI - Paris</span>
                 </div>
             </div>
             <div  class="d-flex-row justify-between align-center">
                 <div class="d-flex-row align-center justify-between">
                     <div>
                         <span class="text-blue bold">08:00 hrs</span>
                     </div>
                     <div class="ml-10">  
                         <span>Gate 001</span>
                     </div>
                     <div>  
                         <span class="ml-10">
                             <img src="imagens/lua-crescente.png" alt="noturno" class="icone">
                         </span>
                     </div>    
                 </div>
                 <div>
                     <span class="text-blue bold">22:40 hrs</span>
                 </div>
             </div>
         </div>
     </div>          
     `
 }
 else if(url_val === 'portodegalinhas'){
     exibir.innerHTML = `
     <div class="bg-blue rounded-10 mt-10 p-15 w-100 bg-white" id="painel-voo">                
         <div class="d-flex-column">
             <div  class="d-flex-row justify-between">
                 <div><strong>Origem</strong></div>
                 <div><strong>Destino</strong></div>
             </div>
             <div  class="d-flex-row justify-between">
                 <div>
                     <span class="font-22">GRU - Garulhos</span>
                 </div>
                 <div>
                     <span class="font-22">PRG - Porto de Galinhas</span>
                 </div>
             </div>
             <div  class="d-flex-row justify-between align-center">
                 <div class="d-flex-row align-center justify-between">
                     <div>
                         <span class="text-blue bold">08:00 hrs</span>
                     </div>
                     <div class="ml-10">  
                         <span>Gate 001</span>
                     </div>
                     <div>  
                         <span class="ml-10">
                             <img src="imagens/lua-crescente.png" alt="noturno" class="icone">
                         </span>
                     </div>    
                 </div>
                 <div>
                     <span class="text-blue bold">22:40 hrs</span>
                 </div>
             </div>
         </div>
     </div>          
     `
 }