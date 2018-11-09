

document.querySelector('.form-submit').addEventListener('submit',btn=>{
    btn.preventDefault();

    document.querySelectorAll('.form-control').forEach(e=>{
        document.querySelectorAll('.form-group').forEach(f => {
            if(e.value == ''){
                f.innerHTML += `<div class="alert alert-danger" role="alert">
                Um simples alerta danger. Olha só!
              </div>`
            };
        });

    });
    
})
