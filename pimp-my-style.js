import { styles } from "./pimp-my-style.data.js"
let count = 0
export function pimp(){
    const button = document.querySelector(".button")
    if (!button.classList.contains("unpimp")){
        button.classList.add(styles[count])
        count++
        if (count === styles.length){
            button.classList.toggle("unpimp")// toggle unpimp on
        }
    }else {
        count--
        button.classList.remove(styles[count])
        if(count === 0){
            button.classList.toggle("unpimp")
        }

    }


}
