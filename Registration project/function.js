
function generate() {
    let capitalalphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallalphabet = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '1234567890'
    let symbol = '!@#$%^&*'
    let password = ''
    for (let index = 0; index < 6; index++) {

        randomcapital = Math.floor(Math.random() * capitalalphabet.length)
        randomsmall = Math.floor(Math.random() * smallalphabet.length)
        randomnumber = Math.floor(Math.random() * numbers.length)
        randomsymbol = Math.floor(Math.random() * symbol.length)
        generatedpassword = capitalalphabet[randomcapital] + smallalphabet[randomsmall] + numbers[randomnumber] + symbol[randomsymbol]

        password += generatedpassword
    }
    return password
}
let captcha = document.querySelector('#capcha')
captcha.textContent = generate().slice(0, 6)
let capchainput1 = document.querySelector('#capchainput')

// function capchacheck() {
//     if (capchainput1.value === captcha.textContent) {

//     } else { alert(`capcha didnt match`) }
// }


let nameid1 = document.querySelector('#nameid')
let phoneid1 = document.querySelector('#phoneid')
let emailid1 = document.querySelector('#emailid')
let passwordid1 = document.querySelector('#passwordid')
let confirmpasswordid1 = document.querySelector('#confirmpasswordid')
let capchainput2 = document.querySelector('#capchainput')
function fieldcheck() {
    if (nameid1.value === '' || phoneid1.value === '' || emailid1.value === '' || passwordid1.value === '' || confirmpasswordid1.value === '' || capchainput2.value === '') {
        alert(`Please fill above details`)
    } else if (capchainput1.value !== captcha.textContent) {
        alert(`capcha didnt match`)
    } else {
        alert(`Submit Successfully`)

    }
}
function showpassword(){
    if(passwordid1.type=='password'||confirmpasswordid1.type=='password'){
        passwordid1.setAttribute('type','text')
        confirmpasswordid1.setAttribute('type','text')
    }else {
        passwordid1.setAttribute('type','password')
        confirmpasswordid1.setAttribute('type','password')
    }
}


document.querySelector('#Submitid').addEventListener('click', fieldcheck)
// document.querySelector('#Submitid').addEventListener('click', capchacheck)
document.querySelector('#imageid').addEventListener('click', () => { captcha.textContent = generate().slice(0, 6) })
document.querySelector('#eye').addEventListener('click',showpassword)
// document.querySelector('#eye').addEventListener('click',hidepassword)