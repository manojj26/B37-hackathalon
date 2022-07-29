var div = document.createElement("div");
div.innerHTML = `
<div id="search">
        <input type="text" id="txt" placeholder=" Type brand name e.g:stila">
        <button type="button" onclick="foo()">search</button>
    </div>  
     <section id="list">
        <div class="container">
        <div id="brand"></div>
        <div id="name"></div>
        <div id="price"></div>
        <div id="description"></div>
        <div id="image"></div>
        <div id="product-link"></div>
    </div>
</section>`

 div.style.textAlign = "center";
document.body.append(div);


// var h = document.querySelector("h1");
// h.style.textAlign = "center";

// function createDetails(makeup_items) {}
//   document.getElementById("brand").innerHTML = `<b>Brand:</b>${makeup_items.brand}`;
//   document.getElementById(
//     "name"
//   ).innerHTML = `<b>Name of product:</b>${makeup_items.name}`;
//   document.getElementById("price").innerHTML = `<b>price :$</b> ${makeup_items.price}`;
//   document.getElementById(
//     "description"
//   ).innerHTML = `<b>Description:</b>${makeup_items.description}`;

//   document.getElementById(
//     "image"
//   ).innerHTML = `<img src=${makeup_items.image_link}/>`;
  
//   document.getElementById(
//     "product-link"
//   ).innerHTML = `<a href=${makeup_items.product_link}>Visit product details</a>`;


async function foo() {
    try{
    let brand = document.getElementById("txt").value;
  let res = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
  );
  var result = await res.json();
  console.log(result);

// let result1=result.length
// for(i=0; i<result1; i++){
  for (let value of result) {
    console.log(value.brand);
//     console.log(value)
    var brandname = value.brand;    
    console.log(value.name);
    var nameofprod = value.name;
    console.log(value.price);
    var price = value.price;
    console.log(value.description);
    var description = value.description;
    console.log(value.image_link);
    var image = value.image_link;
    console.log(value.product_link);
    var productLink = value.product_link;

document.getElementById("brand").innerHTML += `
<img src=${value.image_link}/><br>
<a href=${value.product_link}>Visit product details</a><br>
<b style="color:deeppink;">Brand:</b>${brandname}<br>
<b style="color:deeppink;">Name of product:</b>${nameofprod}<br>
<b style="color:deeppink;">price :$</b> ${price}<br>
<b style="color:deeppink;">Description:</b>${description}<br>
<p>**************************************************************</p>
`;
  }
}
catch(error){
console.log(error)
}
}
Footer