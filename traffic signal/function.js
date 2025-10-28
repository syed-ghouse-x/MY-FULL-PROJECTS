let red1=document.querySelector('#red')
let yellow1=document.querySelector('#yellow')
let green1=document.querySelector('#green')
let current=0
function signal(){
    red1.classList.remove("bg-red-500");
    yellow1.classList.remove("bg-yellow-400");
    green1.classList.remove("bg-green-500");
if (current==0) {
    red1.classList.add('bg-red-500')
}else if (current===1) {
    yellow1.classList.add('bg-yellow-400')
}else if (current===2) {
    green1.classList.add('bg-green-500')
}
current++
if (current>2) {
    current=0
    
}}
setInterval(signal, 2000)
signal()