$pointU=document.querySelector(".point_u")
$pointV=document.querySelector(".point_v")
$send=document.getElementById("send")
$impedance=document.getElementById("impedance")
$real=document.getElementById("real")
$imaginary=document.getElementById("imaginary")
$normal=document.querySelector(".normal")
$point=document.getElementById("point")
$coords=document.getElementById("coords")

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
    let discriminant
    console.log(`C1: (${a}a,${b}b):${r*500}R`)
    console.log(`C2: (${h}h,${k}k):${i*500}I`)

    let c=[0.25*1000*((4*r)+(i*(1+i)))] 
    let p=(2*h - 2*a)
    let q=(2*k - 2*b)
    let o=(Math.pow(r*500,2) + h*h + k*k - a*a - b*b - Math.pow(i*500,2))
    // let l=(Math.pow(i,2)+Math.pow(r,2))
    // let m=(2*i*r*h - 2*c*i - 2*k*Math.pow(r,2))
    // let n=Math.pow(c,2) - 2*c*h*r + Math.pow(h,2)*Math.pow(r,2) + Math.pow(k,2)*Math.pow(r,2) - Math.pow(i*500,2)*Math.pow(r,2)
    let u=(Math.pow(p,2)+Math.pow(q,2))
    let v=[(2*q*p*h - 2*o*q - 2*k*Math.pow(p,2))]/u
    let w=[Math.pow(o,2)]/u - [2*o*h*p]/u + [Math.pow(h,2)*Math.pow(p,2)]/u + [Math.pow(k,2)*Math.pow(p,2)]/u - [Math.pow(i*500,2)*Math.pow(p,2)]/u
    console.log(`${p}x+${q}y=${o},${u/u},${v},${w}`)
    // console.log(`${r}x+${i}y=${c},${l},${m},${n}`)
    //let y=((-m)+Math.sqrt(Math.pow(m,2)-4*l*n))/(2*l)
    let y
    if(i<0){
        y=((-v)-Math.sqrt(Math.pow(v,2)-4*1*w))/(2*1)
    }else{
        y=((-v)+Math.sqrt(Math.pow(v,2)-4*1*w))/(2*1)
    }
    let x=(o-y*q)/p
    console.log(x,y)
    let point = `translate(${x}px, ${-(y)}px)`
    $point.style.setProperty("transform", point)

    $coords.style.setProperty("transform", point)
    $coords.innerText = `(${((1/r)-1).toFixed(3)},${(1/i).toFixed(3)})`
}
