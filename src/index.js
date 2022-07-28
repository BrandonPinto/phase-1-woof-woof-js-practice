
const span = document.createElement('span');
//this will create a span tag to populate the div tag with the id of dog bar
const dogBar = document.querySelector('#dog-bar');

fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(pups => pups.forEach(dog => renderDogs(dog)))


renderDogs = (dog) => {
    
}


// create fetch statement and console.log the data to ensure it is working properly by returning and array of objects
//1. create or querySelector() the element needed for the deliverable
//2. in the created or selected element, you will need to update img.src, .innerText
//3. append to DOM if needed (element.append(newElement)
// side note: .value is only used for input elements form.input.value
// for every step === console.log() to make sure it is in working order
//addEventListener - submit, click
//e.target.input.value this needs to be set to a variable
//querySelector - differentiate between '.', '#'
//element.append(newElement)