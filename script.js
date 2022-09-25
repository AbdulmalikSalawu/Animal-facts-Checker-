const endpoint = "https://zoo-animal-api.herokuapp.com/animals/rand"
 const test = async()=>{
    var allFacts = []
    let response = await fetch(endpoint)
    let jsonResponse  = await response.json()
    console.log(jsonResponse)
    allFacts.push(jsonResponse)
        disp.innerHTML =`
            <h2 class = "fw-bold">Name: ${allFacts[0].name}</h1>
            <h2><span class = "fw-bold">Latin name</span>: <i>${allFacts[0].latin_name}</i></h3>
            <h3><span class = "fw-bold">Habitat:</span> ${allFacts[0].habitat}</h3>
            <h3><span class = "fw-bold">Lifespan:</span> ${allFacts[0].lifespan} yrs</h3>
            <h3><span class = "fw-bold">Weight:</span> ${allFacts[0].weight_max} kg</h3>
            <h3><span class = "fw-bold">Diet:</span> ${allFacts[0].diet}</h3>
        `
        imagecont.innerHTML =`
            <img class = "w-75" src="${allFacts[0].image_link}">
        `
    }
//  const mySearch = async()=>{
//     var allFacts = []
//     let response = await fetch(endpoint)
//     let jsonResponse  = await response.json()
//     allFacts.push(jsonResponse)
//     var confirmSearch = searching.value
    
//     if(confirmSearch = allFacts[index].name){
//         searchinfo.innerHTML = allFacts[searching.value].name
//     }
//  }
 