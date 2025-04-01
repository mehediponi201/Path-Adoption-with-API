const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
        .catch(error => console.log(error))
}

const displayCategory = (category) => {
    const buttonContainer = document.getElementById('button-id');
    category.forEach(items => {
        console.log(items);
        const button = document.createElement('div');
        button.innerHTML = `
    <button onclick="loadCategoryVideo(${items.id})"
    class="card card-side active-btn py-2 items-center px-5 font-medium rounded-md text-[#252525B3] bg-[#25252526] focus:bg-[#FF1F3D] focus:text-white focus:font-semibold">
    <span><img src="${items.category_icon}"/></span>  
    ${items.category}
    </button>
    `;
        buttonContainer.appendChild(button);
    })
}

loadCategory();


// video container section

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayVideos(data.pets))
        .catch(error => console.log(error))
}

const loadCategoryVideo = () => {
    //alert(id);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`)
        .then(res => res.json())
        .then(data => displayVideos(data.data))
        .catch(error => console.log(error))
}


const displayVideos = (pet) => {
    const videoContainer = document.getElementById('video-container');
    console.log(pet);
    videoContainer.innerHTML = '';
    pet.forEach(item => {
        const card = document.createElement('div');
        card.classList = "card";
        card.innerHTML = `
     <figure>
    <img src='${item.image}' alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.breed}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions">
      <button class="btn btn-primary">Show Details</button>
    </div>
  </div>
    `;
        videoContainer.appendChild(card);
    })
}

loadVideos();
