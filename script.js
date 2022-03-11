const all=document.querySelector(".all");
const laptop=document.querySelector(".laptop");
const smartphone=document.querySelector(".telephone");
const tv=document.querySelector(".tv");


  fetch("db.json")
    .then(
        (res) => {
            return res.json();
})

    .then(
        (data) => {

 const container=document.createElement("div");
container.className="container";



       data.forEach
      ((post)=> {

const item=document.createElement("div");
item.className="item";
container.appendChild(item);
        
    
     const img=document.createElement("img");
     const src=img.setAttribute("src",post.img);
     img.className="img";
     item.appendChild(img)


    const name=document.createElement("div");
    name.innerHTML=post.title;
    name.className="name";
   


    const price=document.createElement("div");
    price.innerHTML=post.price;
    price.className="price";
   
const priceName=document.createElement("div");
priceName.classList="priceName";
priceName.appendChild(name);
priceName.appendChild(price);
item.appendChild(priceName);

const desc=document.createElement("div");
desc.innerHTML=post.desc;
desc.className="desc";
item.appendChild(desc);

document.querySelector(".box").appendChild(container);



all.addEventListener("click", ()=>{
      item.style.display="block"}  
  )

laptop.addEventListener("click", ()=>{
    if(post.category=="ноутбуки"){
        item.style.display="block"}
        else{item.style.display="none"}
    })
       
  
    smartphone.addEventListener("click", ()=>{
      if(post.category=="смартфоны"){
          item.style.display="block"}
          else{item.style.display="none"}
      })

      tv.addEventListener("click", ()=>{
        if(post.category=="tv"){
            item.style.display="block"}
            else{item.style.display="none"}
        })



     })




    })


 

 .catch((error) => {
      console.log(error);
    });



 







        


            
     
       
            
            
      