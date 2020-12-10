function product_url(products){
    let url =window.location.hash.split('/')[1]
    for (let i=0;i < products.length;i++){
        if (products[i].url == url){
            return products[i]
        }
    }
}

function view(products){
    let product = product_url(products)
    if (product == undefined){
        return false
    }
    let body =  `
    <div class = "container">
        <div class = "row">
            <div class="col">
                <img src="${product.image}" id = "detal_pizza" alt="">
            </div>
            <div class="col">
                <h3>${product.name}</h3>
                <p>Composite: ${product.description}</p>
                <p>Value: ${product.price}grn.</p>
                <p>Weight:${product.weight}g.</p>
                <form class="needs-validation" id =${product.url} onsubmit = addLocalStorage(id,true) novalidate="">
                    <label for="pizza_count">Count:</label>
                    <input min="1" max="999" id="pizza_count" type="number" class="form-control" required=""> 
                </form>
                <button class="btn"  value=${product.url}>Buy Now</button>
            </div>
        </div>
        <h3>Related products</h3>
        <div class = "row" id = "detail_row">
    `;
    let related_pizza = product.related
    for (let i = 0; i < related_pizza.length; i++){
        
        body+=`
            <div class="detail_item" >
                <h4>${products[related_pizza[i]].name}</h4>   
                <a href = #catalog/${products[related_pizza[i]].url}><img src="${products[related_pizza[i]].image}" id = "related_pizza" alt=""></img></a>
            </div>
        `;
        
    }
    body+=`</div>
    </div>`
    return body
}
export default view;