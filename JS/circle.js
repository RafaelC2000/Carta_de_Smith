$pointU=document.querySelector(".point_u")
$pointV=document.querySelector(".point_v")
$send=document.getElementById("send")
$impedance=document.getElementById("impedance")
$real=document.getElementById("real")
$imaginary=document.getElementById("imaginary")
$normal=document.querySelector(".normal")

$send.addEventListener('click',() => {
    let z0 = $impedance.value
    let z1r = $real.value 
    let z1i = $imaginary.value
    validations(z0, z1r, z1i)
})

function validations (z,r,i) {
    if(isNaN(z)||z==("")){
        $impedance.focus()
    }
    if(isNaN(r)||r==("")){
        $real.focus()
    }
    if(isNaN(i)||i==("")){
        $imaginary.focus()
    }
    normalize(z,r,i)
}

function normalize (z,r,i) {
    r=r/z
    i=i/z
    //Insercion de la normalizada
    if(i<0){
        z="-"
    }else{
        z="+"
    }
    $normal.innerHTML = `${r} ${z} i${Math.abs(i)}&#937`
    r=1/(1+r)
    i=1/i
    setCoords(r,i)
    findPoint((1-r/2)*1000,1000,500,(1+i)*500,r,i)
}

function setCoords (r,i){
    r = (r*1000)-4, t=i*1000, i=(i*1000)

    i = (i<0) ? i+4 : i-4
    
    let U = `${r}px`, U2 = `${r/2}px`
    let V = `${Math.abs(i)}px`, V2 = `${Math.abs(i/2)}px`, V3 = `translate(${Math.abs(t/2)}px, ${(t/2)*-1}px)`
    
    $pointU.style.setProperty("width", U)
    $pointU.style.setProperty("height", U)
    $pointU.style.setProperty("border-radius", U2)
    
    $pointV.style.setProperty("width", V)
    $pointV.style.setProperty("height", V)
    $pointV.style.setProperty("border-radius", V2)
    $pointV.style.setProperty("transform", V3)
}

function findPoint(a,h,b,k,r,i){
    console.log(`C1: (${a},${b}):${r*500}`)
    console.log(`C2: (${h},${k}):${i*500}`)

    let c=[0.25*1000*((4*r)+(i*(1+i)))] 
    let l=(Math.pow(i,2)+Math.pow(r,2))
    let m=(2*i*r*h - 2*c*i - 2*k*Math.pow(r,2))
    let n=Math.pow(c,2) - 2*c*h*r + Math.pow(h,2)*Math.pow(r,2) + Math.pow(k,2) - Math.pow(i,2)*Math.pow(500,2)*Math.pow(r,2)
    console.log(`${r}x+${i}y=${c},${l},${m},${n}`)
    let y=((-m)+Math.sqrt(Math.pow(m,2)-4*l*n))/(2*l)
    let x=(c-y*i)*(1/r) 
    console.log(x,y)
}
