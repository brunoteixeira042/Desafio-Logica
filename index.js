let Heroi = 'SuperMan'
let XpHeroi = 10001
let mensagem 

switch (true){
    case XpHeroi <= 1000 :
      mensagem = 'Ferro'
    break    
    case  XpHeroi >= 1001 && XpHeroi<= 2000 :
      mensagem ='Bronze'
    break    
    case XpHeroi >= 2001 && XpHeroi<= 5000  :
      mensagem = 'Prata'
    break    
    case XpHeroi >= 5001 && XpHeroi<= 7000  :
      mensagem = 'Ouro'
    break    
    case XpHeroi >= 7001 && XpHeroi<= 8000 :
      mensagem = 'Platina'
    break  
    case XpHeroi >= 8001 && XpHeroi<= 9000 :
      mensagem = 'Ascendente'
    break  
    case XpHeroi >= 9001 && XpHeroi<= 10000 :
      mensagem = 'Imortal'
    break  
    case  XpHeroi >= 10001 :
     mensagem = 'Radiante'
    break  

    

}
console.log("O Herói de nome " + Heroi+ " está no nível de " + mensagem)