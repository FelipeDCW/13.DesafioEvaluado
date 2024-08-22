
const btnAgregar = document.querySelector(`#btnRegistrar`)
const tabla = document.querySelector(`#tabla`)
const animal = document.querySelector(`#animal`)

btnAgregar.addEventListener(`click`,()=>{
    const animales = await consumoAnimales()
    const animalBuscado = buscarPorNombre(animal.value, animales.animales )
        
    tabla.innerHTML = 
    

})

