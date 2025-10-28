async function getdata() {
    let a= await fetch('https://dummyjson.com/products')
    let b=await a.json()
    console.log(b);
    for (const element of b.products) {
    let category1=document.createElement('h1')
    let description1=document.createElement('p')
    let image1=document.createElement('img')
    category1.textContent=element.category
    description1.textContent=element.description
    image1.src=element.images
    image1.width=120
    let maindiv1=document.querySelector('#maindiv')
maindiv1.appendChild(category1)
maindiv1.appendChild(description1)
maindiv1.appendChild(image1)
}
}


getdata()
