console.log("Front-end js")


fetch("http://localhost:3000/api/v1/instructors")
.then(res => res.json())
.then(function(json){
    console.log(json)
})

fetch("http://localhost:3000/api/v1/instructors", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Steven"
    })
})
.then(res => res.json())
.then(function(json){
    console.log(json)
})