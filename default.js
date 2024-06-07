
function createProduct(p){
    return `<div class="card col-3 mx-2 my-2" style="width: 18rem;">
    <img src="${p.image}" class="card-img-top" alt="..." height="250px" style="object-fit: cover;">
    <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <p class="card-text">AED ${p.price}</p>
        <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
</div>`
}



async function getAllProducts(){
    const response = await fetch('https://fakestoreapi.com/products', {
        method: 'GET'
    });
    var prodData = await response.json();
    console.log(prodData);
    let productListContainer = "";
    for(let p of prodData){
        console.log(p);
        const prodContainer = createProduct(p);
        productListContainer = productListContainer + prodContainer;
        console.log(productListContainer);
    }

    const productsContainer = document.getElementById("productContainer");
    productsContainer.innerHTML = productListContainer;

}

async function getLimitedProducts(){
    const response = await fetch('https://fakestoreapi.com/products?limit=4', {
        method: 'GET'
    });
    var prodData = await response.json();
    console.log(prodData);
    let productListContainer = "";
    for(let p of prodData){
        console.log(p);
        const prodContainer = createProduct(p);
        productListContainer = productListContainer + prodContainer;
        console.log(productListContainer);
    }

    const productsContainer = document.getElementById("productsContainerLimited");
    productsContainer.innerHTML = productListContainer;

}

getAllProducts();
getLimitedProducts();
