$container=document.querySelector(".container")
$pointU=document.querySelector(".point_u")
$pointV=document.querySelector(".point_v")

console.log($container.style)   //CSSStyleDeclaration
console.log($container.getAttribute("style")) //null
console.log(getComputedStyle($container))   //CSSStyleDeclaration

let tam = 600, i=-800, i2=Math.abs(i/2)+1//Recordar que esto se debe igualar a la escuacion del radio, r se debe obtener con un input html

i2 = (i<0) ? i2*-1 : i2*1

let U = `${tam}px`, U2 = `${tam/2}px`
let V = `${Math.abs(i)}px`, V2 = `${Math.abs(i/2)}px`, V3 = `translate(${Math.abs(i2)}px, ${i2}px)`

console.log(i,i2)

$pointU.style.setProperty("width", U)
$pointU.style.setProperty("height", U)
$pointU.style.setProperty("border-radius", U2)

$pointV.style.setProperty("width", V)
$pointV.style.setProperty("height", V)
$pointV.style.setProperty("border-radius", V2)
$pointV.style.setProperty("transform", V3)


console.log(getComputedStyle($pointU).getPropertyValue("width"))
console.log(getComputedStyle($pointU).getPropertyValue("border-radius"))

console.log(getComputedStyle($pointU).getPropertyValue("width"))
console.log(getComputedStyle($pointU).getPropertyValue("border-radius"))
console.log(getComputedStyle($pointU).getPropertyValue("transform"))