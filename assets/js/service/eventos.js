import Animal from "../model/animal.js";
import { buscarPorNombre, consumoAnimales, renderizarImagen, instanciarAnimales } from "./animalesService.js"



const eventoSelectChange = () => {
    const animal = document.querySelector(`#animal`)

    animal.addEventListener(`change`, async () => {
        const animales = await consumoAnimales()
        const animalBuscado = buscarPorNombre(animal.value, animales.animales)
        renderizarImagen(`preview`, animalBuscado)
    })
}

const eventoClick = async () => {
    const btnAgregar = document.querySelector(`#btnRegistrar`)
    const arregloAnimales = []
    btnAgregar.addEventListener(`click`, async () => {
        const animal = await instanciarAnimales()
        arregloAnimales.push(animal)
        console.log(arregloAnimales);
    })
}



export {
    eventoSelectChange,
    eventoClick
}