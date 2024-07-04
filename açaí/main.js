const açai=12.00
const tapioca=18.00
let pagamento=" "
let quantidadeaçai=prompt("informe quantidade de açai: ")
let quantidadedetapioca=prompt("informe quantidade de tapiocas")
let valortotal=((açai*quantidadeaçai)+(tapioca*quantidadedetapioca))
if(valortotal>=100){
    let pagamento= prompt("qual a forma de pagamento: ")
if(pagamento=='pix'){
    valortotal=(valortotal*0.85)
    alert(` o senhor tem 15% de desconto o novo valor da compra é:${valortotal}`)
}
else{
    valortotal=(valortotal*0.90)
    alert(`o senhor tem direito a 10% de desconto o  novo valor da compra é:${valortotal}`)
}
}
else{
    alert("o senhor não tem desconto")
}


