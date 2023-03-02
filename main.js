const fetchData=()=>
fetch("https://openapi.programming-hero.com/api/news/categories")
.then((res)=> res.json())
.then((data)=> getData(data.data.news_category))

const getData=(data)=>{
    const categoriesContainer= document.getElementById("categories-container");
data.forEach(singleElement => {
    
    let linkContainer= document.createElement("p");
    linkContainer.innerHTML= ` <a class= nav-link" href= "#" onclick= "fetchNews('${singleElement.category_id}','${singleElement.category_name}')">${singleElement.category_name} </a> `
    categoriesContainer.appendChild(linkContainer);
});
}

const fetchNews= (category_id, category_name)=>{
const url= `https://openapi.programming-hero.com/api/news/category/${category_id}`
fetch(url)
.then((res)=> res.json())
.then((data=> showAllNews(data, category_name)))
}

const showAllNews= (data, category_name) =>{
    const count= data.data.length;
    const categoryName=category_name;
   


const newsCount= document.getElementById("news-count");
newsCount.innerText= count

    const newsCategory= document.getElementById("news-category");
    newsCategory.innerText= categoryName;
}