function agregarelemento(){
    var micajadetexto = document.getElementById("idele");
   
    if (micajadetexto.value!=''){
        
        var ul = document.getElementById("miul");
    
        var li = document.createElement("li");
        var texto_li = document.createTextNode(micajadetexto.value);
    
        li.appendChild(texto_li);
        ul.appendChild(li);
    }else{
        alert('Por favor digite un elemento.');
        
    }
   

}