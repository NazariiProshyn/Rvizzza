function view(products){
    let temp = JSON.parse(localStorage.getItem('cart'))
    if (temp == undefined){
      temp = {}
    }
    let backet_list = []
    for (let i = 0; i<products.length;i++){
        for (let j in temp){
            if (products[i].url == j){
                backet_list.push([products[i],temp[j]])
                break
            }
        }
    }
    let body = `
    <h3 align = "center" class="cart">Корзина</h3>
    <div class = "container">
        <div class = "back_row">`;
    body +=`
    ${backet_list.map((item) =>`
    <div class="blog__item" id = ${item[0].url}>
                    <div class="blog__header">
                        <a href="#catalog/${item[0].url}">
                            <img class="blog__photo" src=${item[0].image} width="300" height="300" alt="">
                        </a>
                    </div>
                    <div class="blog__content">
                        <div class="blog__title">
                            <a href="#catalog/${item[0].url}">${item[0].name}</a>
                        </div>
                        Ціна: ${item[0].price}грн. x ${item[1]}=<var class = ${item[0].url}>${item[0].price*item[1]}</var>грн.
                    </div>
                    <div class="blog__footer">

                    <button class="btn" value = ${item[0].url}>Видалити з корзини</button>
                    </div>
                </div>
            `).join('')}
</div>`;
    let total = 0
    for (let k=0;k< backet_list.length;k++){
        total +=backet_list[k][0].price*backet_list[k][1]
    }
    body +=`</div>
    <h3 align = "center" class = "total_price">Загальна вартість: <var class = "total">${total}</var>грн</h3>
    <a class="orders" href = #order role = "button">Замовити</button>
    `
    return body
}

export default view;
