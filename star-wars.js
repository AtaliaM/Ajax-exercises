const peopleEndpoint = 'https://swapi.dev/api/people/';
const planetsEndpoint = 'https://swapi.dev/api/planets/';
const container = document.querySelector("container");
let peopleObj = [];
let planetsObj = [];

async function fetchCharactersInfo() {
  let objArr = [];
  const response = await fetch(`${peopleEndpoint}`);
  const data = await response.json();
  console.log(data);
  for (let i = 0; i < data.results.length; i++) { //copy the people array from the promise I fetched
    objArr[i] = data.results[i];
  }
  await fetchingEachCharacterData(objArr); //after the previous steps completed-call this func with the object array
  return objArr;
}

async function fetchPlanetsInfo() {
  let objArr2 = [];
  const response = await fetch(`${planetsEndpoint}`);
  const data = await response.json();
  for (let i = 0; i < data.results.length; i++) { //copy the planet array from the promise I fetched
    objArr2[i] = data.results[i];
  }
  await fetchingEachPlanetData(objArr2); //after the previous steps completed-call this func with the object array
  return objArr2;
}

//fetching people data//
fetchCharactersInfo();
//fetching planet data//
fetchPlanetsInfo();

//iterating on every character in the characters array and sending it to the function
//in which I add each character to my object array
async function fetchingEachCharacterData(peopleData) {
  for (let i = 0; i < peopleData.length; i++) {
    fetchAndAddToPeopleObjArr(peopleData[i]);
  }
}

//iterating on every planet in the planets array and sending it to the function
//in which I add each planet to my object array
async function fetchingEachPlanetData(planetData) {
  for (let i = 0; i < planetData.length; i++) {
    fetchAndAddToPlanetsObjArr(planetData[i]);
  }
}

async function fetchAndAddToPeopleObjArr(characterData) {
  const character = {};
  character.name = characterData.name;
  character.height = characterData.height;
  character.hair_color = characterData.hair_color;
  character.homeworld = {};
  peopleObj.push(character);
  // console.log(character);
}

async function fetchAndAddToPlanetsObjArr(planetData) {
  const planet = {};
  planet.name = planetData.name;
  planet.population = planetData.population;
  planetsObj.push(planet);
  // console.log(planet);
}

console.log(peopleObj);
console.log(planetsObj);

