const fetchData = () =>
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then((data) => getData(data.data.news_category))

const getData = (data) => {
    const categoriesContainer = document.getElementById("categories-container");
    data.forEach(singleElement => {

        let linkContainer = document.createElement("p");
        linkContainer.innerHTML = ` <a class= nav-link" href= "#" onclick= "fetchNews('${singleElement.category_id}','${singleElement.category_name}')">${singleElement.category_name} </a> `
        categoriesContainer.appendChild(linkContainer);
    });
}

const fetchNews = (category_id, category_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then((res) => res.json())
        .then((data => showAllNews(data.data, category_name)))
}

const showAllNews = (data, category_name) => {
    const count = data.length;
    const categoryName = category_name;
    const newsCount = document.getElementById("news-count");
    newsCount.innerText = count

    const newsCategory = document.getElementById("news-category");
    newsCategory.innerText = categoryName;

    const newsContainer = document.getElementById("all-news");
    newsContainer.innerHTML = ""

    data.forEach(singleNews => {
        console.log(singleNews);
        const card = document.createElement("div");
        card.classList.add('card', 'mb-3');
        card.innerHTML = ` <div class="row g-0">
    <div class="col-md-4">
      <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singleNews.title}</h5>
        <p class="card-text">${singleNews.details.slice(0, 200)}...</p>
        <div class="card-footer border-0 bg-body d-flex justify-content-between">
        <div class= "d-flex " >
        <div><img src="${singleNews.author.img}" class="img-fluid rounded-circle" width="60" height="60" alt="...">
  </div>
  <div>
  <p>${singleNews.author.name}</p>
      <p>${singleNews.author.published_date}</p>
  </div>
     
      </div>
  
  
      <div class= d-flex align-items-center>
      <i class="fas fa-eye"></i>
      <p> ${singleNews.total_view}</p>
      </div>
  
  
  
      <div></div>
      <div><i class="fas fa-arrow-right"></i></div>
        </div>
  
      </div>
    </div>
  </div>`

        newsContainer.appendChild(card)
    })
}