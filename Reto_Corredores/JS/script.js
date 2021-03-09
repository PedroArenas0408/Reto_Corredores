#!/usr/bin/env node
function verificar()

let name = document.getElementById(`namer1`,`name2`).innerHTML.value   
let age = document.getElementById(`age1`,`age2`).innerHTML.value
let time = document.getElementById(`time1`,`time2`).innerHTML.value   

if( time1 ===time2){

swal({
    title: "Los dos participantes tienen el mismo tiempo",
    
})

} else if( time1 > time2 ){
    swal({
        title: "el participante 2 ha ganado"
    })
} else if(time1 < time2 ){

    swal({
        title: "El corredor 2 ha ganado",
    })
}
console.log("")
