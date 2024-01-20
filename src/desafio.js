let nivel

function calculadora(vitoria , derrotas){
 let rank = vitoria - derrotas
return rank   
}
 let valor = calculadora(100,8)


switch(true){
    case valor <= 10:
      nivel = 'Ferro'
    break
    case valor >= 11 && valor <= 20:
      nivel = 'Bronze'
    break
    case valor >= 21 && valor <= 50:
      nivel = 'Prata'
    break
    case valor >= 51 && valor <= 80:
      nivel = 'Ouro'
    break 
    case valor >= 81 && valor <= 90:
      nivel = 'Diamante'
    break
    case valor >= 91 && valor <= 100:
      nivel = 'Lendário'
    break
    case valor >= 101 :
      nivel = 'Imortal'
    break           
}
console.log('O Herói tem de saldo de ' + valor + ' está no nível de ' + nivel)
