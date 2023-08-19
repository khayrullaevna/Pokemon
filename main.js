const elCards = document.querySelector(".cards");
const elSearch = document.querySelector(".search")
const elBtn = document.querySelector("#search-btn");

function renderCards(array, parent){
    parent.innerHTML = null;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.width = "18rem";
        newCard.innerHTML = `
        <div class="card">
        <img src="${element.img}" alt="image" class="image">
        <hr class="line"/>
        <div class="naming">
            <p class="name">${element.name}</p>
            <svg width="30" height="30" class="like-card" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.02463 7.5C7.94463 7.5 6.93213 7.9175 6.17463 8.67625C4.60213 10.2512 4.60213 12.815 6.17588 14.3925L14.9996 23.2313L23.8246 14.3925C25.3984 12.815 25.3984 10.2512 23.8246 8.67625C22.3096 7.1575 19.6396 7.16 18.1246 8.67625L15.8846 10.92C15.4146 11.3913 14.5846 11.3913 14.1146 10.92L11.8746 8.675C11.1171 7.9175 10.1059 7.5 9.02463 7.5ZM14.9996 26.25C14.6684 26.25 14.3496 26.1187 14.1159 25.8825L4.40588 16.1575C1.86088 13.6075 1.86088 9.45875 4.40588 6.90875C5.63588 5.67875 7.27588 5 9.02463 5C10.7734 5 12.4146 5.67875 13.6434 6.90875L14.9996 8.2675L16.3559 6.91C17.5859 5.67875 19.2259 5 20.9759 5C22.7234 5 24.3646 5.67875 25.5934 6.90875C28.1396 9.45875 28.1396 13.6075 25.5946 16.1575L15.8846 25.8838C15.6496 26.1188 15.3321 26.25 14.9996 26.25Z" fill="#231F20"/>
                <mask id="mask0_1_70" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="5" width="26" height="22">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.02463 7.5C7.94463 7.5 6.93213 7.9175 6.17463 8.67625C4.60213 10.2512 4.60213 12.815 6.17588 14.3925L14.9996 23.2313L23.8246 14.3925C25.3984 12.815 25.3984 10.2512 23.8246 8.67625C22.3096 7.1575 19.6396 7.16 18.1246 8.67625L15.8846 10.92C15.4146 11.3913 14.5846 11.3913 14.1146 10.92L11.8746 8.675C11.1171 7.9175 10.1059 7.5 9.02463 7.5ZM14.9996 26.25C14.6684 26.25 14.3496 26.1187 14.1159 25.8825L4.40588 16.1575C1.86088 13.6075 1.86088 9.45875 4.40588 6.90875C5.63588 5.67875 7.27588 5 9.02463 5C10.7734 5 12.4146 5.67875 13.6434 6.90875L14.9996 8.2675L16.3559 6.91C17.5859 5.67875 19.2259 5 20.9759 5C22.7234 5 24.3646 5.67875 25.5934 6.90875C28.1396 9.45875 28.1396 13.6075 25.5946 16.1575L15.8846 25.8838C15.6496 26.1188 15.3321 26.25 14.9996 26.25Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_1_70)">
                <rect width="30" height="30" fill="black"/>
                </g>
            </svg>
        </div>
        <p class="type">${element.type}</p>
        <div class="features">
            <p class="feauture kg">6.9 kg</p>
            <p class="feauture age">99 age</p>
        </div>
        <button data-id=${element.id} id="delete-icon" class="delete-btn">Delete</button>
    </div>
        `
        parent.appendChild(newCard)
    }
}

elBtn.addEventListener("click", (evt) => {
    const newArray = [];
    pokemons.forEach((pokemon) => {
        if (pokemon.name.toLowerCase().includes(elSearch.value.toLowerCase())){
            console.log(pokemon.name)
            newArray.push(pokemon);
        }
    });
    renderCards(newArray, elCards);
})


elCards.addEventListener("click", function(evt){
    if(evt.target.id === "delete-icon"){
        const id = Number(evt.target.dataset.id);
        const newPokemons = [];
        for (let i = 0; i < pokemons.length; i++) {
            const element = pokemons[i];
            if(id !== element.id){
                newPokemons.push(element);
            }
        }

        pokemons = newPokemons;
        renderCards(pokemons, elCards);
        console.log(newPokemons)

    }
})
renderCards(pokemons, elCards);

