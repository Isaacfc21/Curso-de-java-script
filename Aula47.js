const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btn_pesquisar=document.querySelector("#btnPesquisar")
const p_resultado=document.querySelector("#resultado")

const elementosarray=["isaac","suze","anibal"]
p_array.innerHTML="["+elementosarray+"]"

btn_pesquisar.addEventListener("click", (evt)=>{
    p_resultado.innerHTML= "Valor não encontrado"
    const ret=elementosarray.find((e,i)=>{
        let indice_inicia= i+1
       if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
         p_resultado.innerHTML="Valor encontrado: " + e + " , na posição: " + indice_inicia
       }
    })
})