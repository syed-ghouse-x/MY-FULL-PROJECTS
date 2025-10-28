const inputtask1 = document.querySelector('#inputtask')
const button = document.querySelector('#addtask')
const empty1 = document.querySelector('#empty')
button.addEventListener('click', () => {
    if (inputtask1.value !== '') {
        const firsttask = inputtask1.value
        let elementtask = document.createElement('div')
        elementtask.classList.add('flex', 'border', 'rounded', 'w-full', 'm-2', 'text-white', 'ml-0')
        let paragraph = document.createElement('p')
        paragraph.textContent = firsttask
        paragraph.classList.add('p-2', 'w-md', 'text-black')
        elementtask.appendChild(paragraph)
        empty1.appendChild(elementtask)
        btn2 = document.createElement('button')
        btn2.textContent = 'Edit'
        btn2.classList.add('border', 'text-white', 'bg-[#03b034]', 'rounded', 'cursor-pointer', 'w-20', 'p-2', 'm-1')
        elementtask.appendChild(btn2)
         const donebtn = document.createElement('button')
            donebtn.classList.add('border', 'text-white', 'bg-[#035502]', 'rounded', 'cursor-pointer', 'w-20', 'p-2', 'm-1')
            donebtn.textContent='Done'
            elementtask.appendChild(donebtn)
        btn = document.createElement('button')
        btn.classList.add('border', 'text-white', 'bg-[#b00325]', 'rounded', 'cursor-pointer', 'w-20', 'p-2', 'm-1')
        btn.textContent = 'Delete'
        elementtask.appendChild(btn)
        inputtask1.value = ''
        btn.addEventListener('click', () => {
            elementtask.remove()

        })
        btn2.addEventListener('click', () => {
           
            const editelement = document.createElement('input')
            editelement.type = 'text'
            editelement.classList.add('p-2', 'w-md', 'text-black')
            editelement.value = paragraph.textContent
            elementtask.replaceChild(editelement, paragraph)
           donebtn.addEventListener('click',()=>{elementtask.replaceChild(paragraph, editelement)}) 
        })
        
        
    }

})

