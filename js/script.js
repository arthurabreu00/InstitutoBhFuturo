document.querySelectorAll('.figure-img').forEach(figura =>{
    

    // figura.addEventListener('touchmove',()=>{
    //     let caminho = figura.src;
    //     figura.src = caminho.replace('-cinza',"");
    // })

    // figura.addEventListener('touchend',()=>{
    //     let caminho = figura.src;
    //     figura.src = caminho.replace('.png','-cinza.png')
    // })

    figura.addEventListener('mouseover',()=>{
        let caminho = figura.src;
        figura.src = caminho.replace('-cinza',"");
    });

    figura.addEventListener('mouseout',()=>{
        let caminho = figura.src;
        figura.src = caminho.replace('.png','-cinza.png')

    });
})  