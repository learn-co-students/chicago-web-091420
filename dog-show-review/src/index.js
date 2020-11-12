document.addEventListener('DOMContentLoaded', () => {

    function ce(element){
        return document.createElement(element)
    }

    function qs(selector){
        return document.querySelector(selector)
    }

    const url = "http://localhost:3000/dogs"
    const tbody = qs("tbody#table-body")
    const editForm = qs("form#dog-form")

    fetch(url)
    .then(res => res.json())
    .then(dogs => {
        dogs.forEach(dog => display(dog))
        // dogs.forEach(display)
    })

    function display(dog){
        // console.log(dog)
        // <tr>
        //     <td>Dog *Name*</td> 
        //     <td>*Dog Breed*</td> 
        //     <td>*Dog Sex*</td> 
        //     <td>
        //         <button>Edit</button>
        //     </td>
        // </tr>

        const tr = ce('tr')
        tr.setAttribute("data-dogId", dog.id)

        const td1 = ce('td')
        td1.innerText = dog.name

        const td2 = ce('td')
        td2.innerText = dog.breed

        const td3 = ce('td')
        td3.innerText = dog.sex

        const td4 = ce('td')

        const editBtn = ce('button')
        editBtn.innerText = "Edit"

        editBtn.addEventListener("click", (e) => {
            // console.log(dog)
            // console.log(editForm)
            // debugger

            editForm[0].value = dog.name
            editForm[1].value = dog.breed
            editForm[2].value = dog.sex

            // To solve the bug discussed during class
            
            // editForm[0].value = e.target.parentElement.parentElement.children[0].innerText
            // editForm[1].value = e.target.parentElement.parentElement.children[1].innerText
            // editForm[2].value = e.target.parentElement.parentElement.children[2].innerText

            const hiddenInput = ce("input")
            hiddenInput.setAttribute("type", "hidden")
            hiddenInput.value = dog.id
            hiddenInput.name = "id"

            editForm.append(hiddenInput)

        })

        td4.append(editBtn)

        tr.append(td1, td2, td3, td4)

        tbody.append(tr)

    }

    editForm.addEventListener("submit", (e) => {
        e.preventDefault()

        // debugger

        // fetch(url+"/"+e.target["id"].value)
        fetch(url+"/"+e.target[4].value, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target[0].value,
                breed: e.target[1].value,
                sex: e.target[2].value
            })
        })
        .then(res => res.json())
        .then(updatedDog => {
            //update the DOM

            // debugger

            // Array.from(document.querySelectorAll('tr')).find(tr => tr.dataset.dogid == updatedDog.id)

            // for(let tr of arr){
            //     if(tr.dataset.dogid == updatedDog.id){
            //     console.log(tr)
            //     }
            // }

            const updateTr = Array.from(tbody.children).find(tr => tr.dataset.dogid == updatedDog.id)

            // const dogRow = tbody.children[updatedDog.id-1]
            // debugger

            updateTr.children[0].innerText = updatedDog.name
            updateTr.children[1].innerText = updatedDog.breed
            updateTr.children[2].innerText = updatedDog.sex


        })


    })


})