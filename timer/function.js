let startbtn1=document.querySelector('#startbtn')
let stopbtn1=document.querySelector('#stopbtn')
let resetbtn1=document.querySelector('#resetbtn')
let paragraph1=document.querySelector('#paragraph')
let count=0
let interval
startbtn1.addEventListener('click',()=>{
 if (interval) return;
interval= setInterval(() => {
    
    paragraph1.textContent=count
count++
}, 1000)
})
stopbtn1.addEventListener('click',()=>{
    clearInterval(interval)
    interval=null
})
resetbtn1.addEventListener('click',()=>{
    clearInterval(interval)
    count=0
    paragraph1.textContent=count
})