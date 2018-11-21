document.querySelectorAll('.figure-img').forEach(figura =>{
    
    let caminho = figura.src;

    figura.addEventListener('mouseover',()=>{
        caminho = figura.src;
        figura.src = caminho.replace('-cinza',"");
    });

    figura.addEventListener('mouseout',()=>{
        caminho = figura.src;
        figura.src = caminho.replace('.png','-cinza.png')

    });
})  

// $('#contato').validator()

document.querySelector("#comSContainer1716523_ a").href = "#";