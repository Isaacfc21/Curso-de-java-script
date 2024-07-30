const idades=[15,12,21,50,40,18,16,31]
const maior=idades.filter((valor)=>{
    if (valor >= 18)
        return valor
})
const menor=idades.filter((valor)=>{
    if(valor < 18)
      return valor
})
console.log(idades)
console.log(maior)
console.log(menor)

// function filtromaior18(valor){
//      if (valor >= 18){
//         return valor 
//      }
// }
// filtromaior18()
// console.log(idades)
// console.log(maior)