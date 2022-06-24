//TRAIGO UNA ETIQUETA DEL HTML
let titulo=document.getElementById("titulo");
console.log(titulo)


//CONTROLANDO ETIQUETAS
// 1. CAMBIAR EL TEXTO DE UNA ETIQUETA
// SOLO APLICA H1 ---, P,A
titulo.textContent="CHAO"

//2. CAMBIAR LA IMAGEN ( O LA FUENTE)
let foto=document.getElementById("foto")
foto.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3ZLQRQXO_pwWnjFubYxtq5fNL0gN2AlnlA&usqp=CAU"

//3. AGREGANDO ESTILOS
    titulo.classList.add("letra")

//4. DECTETANDO EVENTOS
let boton=document.getElementById("boton")
boton.addEventListener("click",function(){
    console.log("hice click")
})