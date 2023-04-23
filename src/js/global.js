const counter = document.getElementById('counter')
const updateCounter = async () =>{
    const data = await fetch( "https://api.countapi.xyz/hit/Counter_CV_812569854554-52-3");
    const count = await data.json()
    counter.textContent = count.value
}
updateCounter()
console.log(counter);