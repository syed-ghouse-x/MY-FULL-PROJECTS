
let image1=document.querySelector('#image')
let rightarrow1=document.querySelector('#rightarrow')
let leftarrow1=document.querySelector('#leftarrow')
const images=['01.jpg','2.jpeg','3.webp']
let index=0
function clickrightarrow(){

index++
if (index>=images.length) {index=0
    
    
}image1.src = images[index]}
rightarrow1.addEventListener('click',clickrightarrow)
function clickleftarrow(){
    index--
    if (index<0) {
        index=images.length-1
        
    }
    image1.src = images[index]
}
leftarrow1.addEventListener('click',clickleftarrow)