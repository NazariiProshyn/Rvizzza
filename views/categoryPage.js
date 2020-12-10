import category_of_products from './category.js'


function view(product){
    let {categoryes,product_category} = category_of_products(product)
    let section = Number(window.location.hash.split('/')[1])-1

    categoryes = categoryes[section]
    product_category=product_category[section]
    if (categoryes == undefined || product_category == undefined){
        return false
    }
    let html_body = `<section class="section">
            <div class="container">

                <div class="section__header">
                    <h3 class="section__suptitle pizza-area" >${categoryes}</h3>
                </div>

                <div class="blog">
                ${product_category.map((item) =>`
                    <div class="blog__item">
                        <div class="blog__header">
                            <a href="#catalog/${item.url}">
                                <img class="blog__photo" src=${item.image} width="300" height="300" alt="">
                            </a>
                        </div>
                        <div class="blog__content">
                            <div class="blog__title">
                                <a href="#${item.url}">${item.name}</a>
                            </div>
                            <div class="blog__text">${item.description}</div>
                            <div class="blog__text"><br><b>Price: ${item.price}grn</b></br></div>
                        </div>
                        <div class="blog__footer">
                        <button class="btn" value=${item.url}>Buy Now</button>
                        </div>
                    </div>
                `).join('')}
                </div>
            </div>
            </section>`;

    return html_body
}

export default view;