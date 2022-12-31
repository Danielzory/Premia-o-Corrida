function checkMedal(){
 let medals = ['Sem premiação', 'Ouro', 'Prata', 'Bronze',]
 var n = document.getElementById('txtn')
 var res = document.getElementById('res')
 var number = Number (n.value)

    if(number <= 0 || number > 3){
       res.innerHTML = 'Sem premiação'
    }else{
     res.innerHTML = `Você irá receber medalha de ${medals[number]}`
    } 
    
}    

