const caixa1=document.querySelector('#caixa1')
const btn_c1=document.querySelector('#c1')
const instrumentos=[...document.querySelectorAll('.instrumentos')]
caixa1.addEventListener('click', (evt)=>{
     console.log("clicou")
})
instrumentos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})

