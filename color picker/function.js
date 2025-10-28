function color(event){
    document.body.style.backgroundColor=event.target.value}
let colorsid=document.querySelector('#colors')
colorsid.addEventListener('input',color)