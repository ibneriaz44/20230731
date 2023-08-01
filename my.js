
let print =document.getElementById('tableHere')
function table(){

    print.innerHTML=""
    let start= document.getElementById('start').value
    let end= document.getElementById('end').value
    let input= document.getElementById('input').value
 for (let v=start; v<end; v++)
    print.innerHTML+= input + "    x  " + " "+ v +  "   =  " +  input*v  + "<br>"
}