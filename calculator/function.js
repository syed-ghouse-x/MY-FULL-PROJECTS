const inputbuttons=document.querySelectorAll("button")
const input1=document.querySelector('#input')
function appendValue(value){
    input1.value+=value
}
function clearall(){
    document.querySelector('#input').value=''
}
function calculate(){
    try {
        input1.value=eval(input1.value)
    } catch  {
        input1.value='error'
        
    }
}
function delete1(){
input1.value=input1.value.slice(0,-1)
}
