let arr=[]
let p=fetch("https://newsapi.org/v2/everything?q=bamboo&language=en&apiKey=54d47093f1df43ce85a45e0f2cd2aaed")
p.then((response)=>{
    arr=response.json();
    return arr;
}).then((response)=>{
    arr=response.articles;
    displaynews(arr)
    // console.log(arr);
})



function displaynews( arr){
let container=document.getElementById('container')
arr.forEach((element)=>{
    let news=document.createElement('div')
    news.setAttribute('class','news')
    let heading=document.createElement('h5');
    heading.setAttribute('class','heading')
    heading.innerHTML=element.title;
    news.appendChild(heading)
    let image=document.createElement('img')
    image.setAttribute('class','img')
    image.setAttribute('alt','Image')
    image.setAttribute('src',`${element.urlToImage}`)

    let content=document.createElement('p')
    content.setAttribute('class','content')
    content.innerHTML=element.description;
    let link=document.createElement('a')
    link.setAttribute('class','link')
    link.setAttribute('href',`${element.url}`)
    link.setAttribute('target','_blank')
    link.innerHTML="... Read more"
    news.appendChild(image)
    news.appendChild(content)
    news.appendChild(link)

    container.appendChild(news)
})
}