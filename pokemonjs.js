
let randomNumber=Math.floor(Math.random()*875)
// axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`).then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log('no good: ', error)
// })



function getNameAndImage (object) {
    console.log(object)
    let name=object.data.name
    let imageURL= object.data.sprites.front_default
    return [name,imageURL]
}

const getMon = async ()=>{
    const randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)   
    // console.log(randomPokemon)
    firstPokemonData=getNameAndImage(randomPokemon)
    console.log(firstPokemonData)
    let firstName= document.getElementById("firstName")
    firstName.innerText=firstPokemonData[0]
    let firstPokemonImage=document.getElementById("firstPokemonImg")
    firstPokemonImage.src=firstPokemonData[1]
    pokemonTeamType= await axios.get(randomPokemon.data.types[0].type.url)
    avaialbleTeammates=pokemonTeamType.data.pokemon
    //create array with 5 random numbers, then grab the value of each index. -- guarantees won't be duplicats.
    secondPokemon= await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)    
    secondPokemonData=getNameAndImage(secondPokemon)

    thirdPokemon=await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)
    thirdPokemonData=getNameAndImage(thirdPokemon)

    fourthPokemon=await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)
    fourthPokemonData=getNameAndImage(fourthPokemon)

    fifthPokemon=await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)
    fifthPokemonData=getNameAndImage(fifthPokemon)
    
    sixthPokemon=await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)
    sixthPokemonData=getNameAndImage(sixthPokemon)
    //we could've had our function create new divs(columns),h2s,images 
    let secondName= document.getElementById("secondName")
    secondName.innerText=secondPokemonData[0]
    let secondPokemonImage=document.getElementById("secondPokemonImg")
    secondPokemonImage.src=secondPokemonData[1]
    let thirdName= document.getElementById("thirdName")
    thirdName.innerText=thirdPokemonData[0]
    let thirdPokemonImage=document.getElementById("thirdPokemonImg")
    thirdPokemonImage.src=thirdPokemonData[1]
    let fourthName= document.getElementById("fourthName")
    fourthName.innerText=fourthPokemonData[0]
    let fourthPokemonImage=document.getElementById("fourthPokemonImg")
    fourthPokemonImage.src=fourthPokemonData[1]
    let fifthName= document.getElementById("fifthName")
    fifthName.innerText=fifthPokemonData[0]
    let fifthPokemonImage=document.getElementById("fifthPokemonImg")
    fifthPokemonImage.src=fifthPokemonData[1]
    let sixthName= document.getElementById("sixthName")
    sixthName.innerText=sixthPokemonData[0]
    let sixthPokemonImage=document.getElementById("sixthPokemonImg")
    sixthPokemonImage.src=sixthPokemonData[1]
}

// const getMon = async ()=>{
//     const randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
//     console.log(randomPokemon)
//     const firstPokemonName= randomPokemon.data.name
//     const firstPokemonImageURL= randomPokemon.data.sprites.front_default
//     let firstName= document.getElementById("firstName")
//     // console.log(firstName)
//     firstName.innerText=firstPokemonName
//     randomPokemonImage.src=firstPokemonImageURL
//     // const randomPokemonImage = await axios.get("randomPokemonImageURL")


// 	const pokemonTypeURL = randomPokemon.data.types[0].type.url
// 	// console.log(pokemonTypeURL)
//     const pokemonSameType = await axios.get(pokemonTypeURL)
//     console.log("sameTypePokemon:")
//     console.log(pokemonSameType)
//     sameTypePokemonList=pokemonSameType.data.pokemon
//     secondpokemon= await axios.get(sameTypePokemonList[Math.floor(Math.random()*sameTypePokemonList.length)].pokemon.url)
//     // console.log(Object.keys(pokemonSameType.data.pokemon).length)
//     console.log(secondpokemon)
// }



