const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function ce(tag){
    return document.createElement(tag)
}

function qs(selector){
    return document.querySelector(selector)
}

const main = qs("main")

fetch(TRAINERS_URL)
.then(res => res.json())
.then(trainers => displayTrainers(trainers))

{/* <div class="card" data-id="1">
    <p>Prince</p>
    <button data-trainer-id="1">Add Pokemon</button>
    <ul>
        <li>Jacey (Kakuna) 
            <button class="release" data-pokemon-id="140">Release</button>
        </li>
        <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
        <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
        <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
        <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
    </ul>
</div> */}

function displayTrainers(trainers){
    trainers.forEach(trainer => {

        // const div = document.createElement('div')
        const div = ce('div')
        div.className = "card"
        // const div1 = document.createElement('div').setAttribute("class", "card") // div1 is undefined
        div.setAttribute("data-id", trainer.id )
        // debugger
        const p = ce('p')
        p.innerText = trainer.name

        const btn = ce("button")
        btn.setAttribute("data-trainer-id", trainer.id)
        btn.innerText = "Add Pokemon"

        btn.addEventListener("click", () => {
            fetch(POKEMONS_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    trainer_id: trainer.id
                })
            })
            .then(res => res.json())
            // .then(info => console.log(info))
            // .then(console.log)
            .then(newPoke => {
                // debugger
                // console.log(newPoke)
                if(newPoke.error){
                    alert(newPoke.error)
                }else{
                    //update the DOM
                    const newLi = addPokemon(newPoke)
                    ul.append(newLi)
                }
            })
        })

        const ul = ce('ul')

        trainer.pokemons.forEach(pokemon => {
            const pokeLi = addPokemon(pokemon)
            ul.append(pokeLi)
        } )
       
        div.append(p, btn, ul)

        main.append(div)

    })

}

function addPokemon(pokemon){
    const li = ce('li')
    li.innerText = `${pokemon.nickname} (${pokemon.species})`

    const delBtn = ce("button")
    delBtn.className = "release"
    delBtn.setAttribute("data-pokemon-id", pokemon.id)
    delBtn.innerText = "Release"

    delBtn.addEventListener("click", () => {
        fetch(POKEMONS_URL+"/"+pokemon.id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(delPoke => {
            //update the DOM
            li.remove()
        })
    })

    li.append(delBtn)
    return li
}


// APPROACH - 2
// Event Delegation
// main.addEventListener("click", (e) => {
//     if(e.target.innerText === "Add Pokemon"){
//         // debugger
//         fetch(POKEMONS_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 trainer_id: e.target.dataset.trainerId
//             })
//         })
//         .then(res => res.json())
//         // .then(info => console.log(info))
//         // .then(console.log)
//         .then(newPoke => {
//             // debugger
//             // console.log(newPoke)
//             if(newPoke.error){
//                 alert(newPoke.error)
//             }else{
//                 //update the DOM
//                 // debugger
//                 const trainerUl = e.target.nextSibling
//                 const newLi = addPokemon(newPoke)
//                 trainerUl.append(newLi)
//             }
//         })

//     }
//     else if(e.target.innerText === "Release"){
//         // debugger
//         fetch(POKEMONS_URL+"/"+e.target.dataset.pokemonId, {
//             method: "DELETE"
//         })
//         .then(res => res.json())
//         .then(delPoke => {
//             //update the DOM
//             const delLi = e.target.parentElement
//             delLi.remove()
//         })
//     }
// })
