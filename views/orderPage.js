function view(products){
    let count = document.getElementById("ItemNumb").textContent;
    let temp = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    if (temp == undefined){
      temp = {};
    }
    let backet_list = []
    for (let i = 0; i<products.length;i++){
        for (let j in temp){
            if (products[i].url == j){
                total +=products[i].price*temp[j]
                backet_list.push([products[i],temp[j]])
            }
        }
    }
    let body = `
    <div class="container">
    <h3>Деталі замовлення</h3>
      <form class="needs-validation" id='order'>
        <div class = "detail">
          <div class="col">
            <label for="name">Імя</label>
            <input type="text" class="form-control" id="name" placeholder="" pattern="[a-zA-Zа-яА-ЯіІїЇєЄ]+" value="" required="" title = "Імя повинно складатися лише з літер">
          </div>
          <div class="col">
            <label for="lastName">Прізвище</label>
            <input  type="text" class="form-control" id="lastName" placeholder="" pattern="[a-zA-Zа-яА-ЯіІїЇєЄ]+" value="" required="" title = "Прізвище повинно складатися лише з літер">
          </div>
      
            <div class="col">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="abc@mail.com" required ="true" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.]+[a-z]{2,}" title = "Введіть дійсний email">
            </div>

            <div class="col">
                <label for="address">Адресa</label>
                <input type="text" class="form-control" id="adres" placeholder="" required="true" title = "Введіть адресу">
            </div>
       
          <div class="col">
            <label for="phone">Номер телефона</label>
            <input maxlength="13" id="phone" type="tel" pattern="[+]+[3]+[8]+[0]+[0-9]{9}" class="form-control" placeholder="+380232323233" required="true" title = "Введіть дійсний мобільний телефон">
          </div>
          <div class="col">
            <label for="datetime">Час доставки</label>
            <input class="form-control" type="datetime-local" id="datetime"  required = "true">
          </div>
        </div>
        <hr>
        <h3 >Оплата</h3>

        <div class="detail">
          <div class="col">
            <label for="card_number">Номер карти</label>
            <input type="text"  pattern="[0-9]{16}" class="form-control" id="card_number" required="true" title = "Введіть дійсний номер карти">
 
          </div>
        
          <div class="col">
            <label for="cart_date">Срок дії</label>
            <input type="text" pattern="[0-9]{2}/[0-9]{2}" placeholder="01/12"  class="form-control" id="card_date" required="true" title = "Введіть дійсний срок дії">
            </div>
          <div class="col">
            <label for="cvv">CVV</label>
            <input type="text" pattern="[0-9]{3}" class="form-control" id="cvv" placeholder="111" required="true" title = "Введіть дійсний cvv">
          </div>
        </div>
        <hr>
        <button class="btn" id = 'order_btn' type="submit">Замовити</button>
      </form>
    </div>
</div>
</div>`

    return body
}
export default view;