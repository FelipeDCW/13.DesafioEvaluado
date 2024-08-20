import Animal from "./animal.js";
import Lobo from "./lobo.js";

const btnAgregar = document.querySelector(`#btnRegistrar`)
const selectAnimal = document.querySelector(`#animal`)
const edad = document.querySelector(`option`)
const años = document.querySelector(`option`)



btnAgregar.addEventListener(`click`,()=>{
    if (selectAnimal.options[selectAnimal.selectedIndex].value === "Lobo"){
        console.log(`Lobo`);
    }
    

})

