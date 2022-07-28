document.querySelectorAll('[seletor]').forEach(link => {
    const container = document.getElementById('container')
        
        link.onclick = function(e){
            e.preventDefault()
            fetch(link.getAttribute('seletor'))
                .then(resp => resp.text())
                .then(html => container.innerHTML = html)
        }
    })

    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    
      });
    }
    const titulo = document.querySelector('p');
    
    typeWrite(titulo);
    