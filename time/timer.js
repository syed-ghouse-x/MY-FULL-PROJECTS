
function times(){
   const t=new Date()
let hours=t.getHours()
hours=hours%12
let minutes=t.getMinutes()
let seconds=t.getSeconds()
   result= `${hours}:${minutes}:${seconds}`
   document.querySelector('#time').innerHTML=result
}
setInterval(times,1000)
function datefunction(){
const s=new Date()
let day=s.getDate()
let month=s.getMonth()+1
let year=s.getFullYear()
date1=`Date:${day}/${month}/${year}`
document.querySelector('#date').innerHTML=date1
}
datefunction()
console.log(datefunction);

