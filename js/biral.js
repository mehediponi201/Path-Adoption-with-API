// load all categories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};


// display the categories of cats
const displayCategories = (category) => {
    const buttonContainer = document.getElementById("button-id");
    category.forEach((item) => {
       // console.log(item);
        const card = document.createElement("div");
        //   card.classList = "card card-side bg-base-100 shadow-sm";
        card.classList.add(
            'card',
            'card-side',
            'active-btn',
            'py-2',
            'px-5',
            'font-medium',
            'rounded-md',
            'text-[#252525B3]',
            'bg-[#25252526]',
            'focus:bg-[#FF1F3D]',
            'focus:text-white',
            'focus:font-semibold'
        );
        card.innerHTML = `
      <figure>
      <img src=${item.category_icon} alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="">${item.category}</h2>
    </div>
      `;
        // card.innerText = item.category;
        buttonContainer.appendChild(card);
    });
};


// load all videos
const loadVideos = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(response => response.json())
    .then(data => displayVideos(data.pets))
    .catch(error => console.log(error))
}

//display videos
const displayVideos = videos =>{

// index.html file er ei id wala div k dhorche
const videoContainer = document.getElementById('video-container');
videos.forEach(video => {
    console.log(video);
    const card = document.createElement('div'); 
    card.classList = "card";
    card.innerHTML = `
     <figure>
    <img src="${video.image}"alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Category: ${video.category}</h2>
    <h2>Name: ${video.pet_name}</h2>
    <p>${video.pet_details}</p>
  </div>
    `;
    videoContainer.appendChild(card);
})

}

// call All categories
loadCategories();

// call video categories function
loadVideos();



