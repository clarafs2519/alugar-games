function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    console.log(jogoClicado);//ele é tudo, é o pai, vai retornar a lista toda com o img butotn...

    let botao = jogoClicado.querySelector(".dashboard__item__button");

    let imagem = jogoClicado.querySelector(".dashboard__item__img");


    
    //acender e apagar a imagem e botao trocar alugar/devolver
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        if (confirmarDevolucao() == true){
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
    }
      
    }else{
           imagem.classList.add("dashboard__item__img--rented");
            botao.classList.add("dashboard__item__button--return");
            botao.textContent = "Devolver";

    }
}
function confirmarDevolucao (){
    return confirm("Você confirma a devolução?");
   
    
}


  
            
        
