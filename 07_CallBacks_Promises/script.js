// console.log("Start");

// function abc(x){
// console.log(x*2);
// temp(x/2);
// }

// abc(8);

// console.log("Mid");

// function temp(x){

//     console.log(x/2);
// }
// console.log("End");

// promise








const cardContainer = document.getElementById("card-container");

// selecting value of search box
const userInput = document.getElementById("user-input");

// copying all the data of cards
// let apiData = [];


fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then((data) => {
    // apiData.push(data.recipes)
    displayData(data.recipes);
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });



 const createCard = (value) => {
  // console.log(value);
  // cardContainer.innerHTML='';

 const card = document.createElement("div");
   card.setAttribute("class", "col");

  // apiData.push(card);

  //   apiData.push(value.name);

  card.innerHTML = `
      <div class="card bg-secondary text-white" style="width: 18rem;">
          <img class="card-img-top" src="${value.image}" alt="Card image cap">
          <div class="card-body d-flex flex-column">
          <h5 class="card-title">${value.name}</h5>
          <p class="card-text text-warning d-inline-block">Rating: ${value.rating}</p>
          <button type="button" class="btn btn-success mt-auto ml-auto mr-1">Add to Cart</button>
          </div>
         
      </div>
    `;

  cardContainer.appendChild(card);
};

// console.log(apiData);

const displayData = (data) => {
  
  cardContainer.innerHTML="";

   data.map((value) => {
    
    createCard(value);
  });
};


userInput.addEventListener("input", (e) => {
  const searchValue = e.target.value;

  fetch(`https://dummyjson.com/recipes/search?q=${searchValue}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data.recipes);
        displayData(data.recipes);
    });
});






















  // search function
  
  // userInput.addEventListener('input',(e)=>{
  
  //     const searchValue = e.target.value.toLowerCase();
  
  //     apiData.filter((currentVal)=>{
  
  //         console.log(currentVal.querySelector(".card-title").innerText);
  
  //         currentVal.querySelector(".card-title").innerText.toLowerCase().includes(searchValue)? currentVal.classList.remove('hide'):currentVal.classList.add('hide');
  
  //     })
  
  // })