function somaImpares(){
    let soma = 0;
    
    for (let n = 1; n <=500; n++){
        if (n % 2 !==0 && n % 3 === 0){
            soma += n;
            // console.log(n)
            // console.log(soma)
        }
    } alert(`A soma de todos o números impares e multiplos de 3 é : ${soma}`);
}

function menorEMaiorAltura(){

   let alturas = [1.35, 1.60, 1.90, 2.10, 1.98, 1.10, 2, 1.90, 1.55, 1.20, 1.93,  1.78, 1.80, 1.83, 1.60,1.33 ];
   let menor = alturas[0];
   let maior = alturas[0];

    for (altura of alturas) {

       if (altura > maior) {
        maior = altura;      
        console.log(`A maior altura é: ${maior}`)
       }  
       
       if (altura < menor){
        menor = altura;
        console.log(`A maior altura é: ${menor}`)
       }
    }
    alert(`A maior altura é: ${maior}\nA menor altura é: ${menor}`)
}