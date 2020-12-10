function count(){
    let temp = JSON.parse(localStorage.getItem('cart'))
    if (temp == undefined){
      temp = {}
    }
    let amount = 0
    for (let item in temp){
        amount += temp[item]
      }
    document.getElementById("ItemNumb").textContent =amount
}

function addToCart(value, detail = false){
    let count
    if (detail){
      count = document.getElementById(value).pizza_count.value
    }
    else{
      count = 1
    }
    let temp = JSON.parse(localStorage.getItem('cart'))
    if (temp == undefined){
      temp = {}
    }
    if (count>0){
      if (temp[value] == undefined){
        temp[value] =Number(count)
      }
      else{
        temp[value] = Number(temp[value]) +Number(count)
      }
      let amount = 0
      for (let item in temp){
        amount += temp[item]
      }
      document.getElementById("ItemNumb").textContent =amount
      localStorage.setItem("cart", JSON.stringify(temp))
    }
}

function cart_remove(id){
  document.getElementsByClassName('total')[0].innerHTML = document.getElementsByClassName('total')[0].innerHTML - document.getElementsByClassName(id)[0].innerHTML  
  let temp = JSON.parse(localStorage.getItem('cart'))
  delete temp[id]
  document.getElementById(id).remove()
  localStorage.setItem("cart", JSON.stringify(temp))
  count()
}
count()

async function make_order(){
    let form = document.getElementById('order')
    let data = {
      "name":form.name.value,
      "lastname": form.lastName.value,
      "email": form.email.value,
      "address": form.adres.value,
      "tel": form.phone.value,
      "time": form.datetime.value,
      "orders": JSON.parse(localStorage.getItem('cart'))
    }
    const response = await fetch('https://my-json-server.typicode.com/NazariyProshyn/test-json/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  });
    const json = await response.json();
    window.location.hash = 'order/'+json.id;
    localStorage.clear();
    document.getElementById("ItemNumb").textContent='0';
    const rootNode = document.getElementById('main');
    rootNode.innerHTML = `<h3 align = "center" class='after_order'>Дякуємо за замовлення!</h3>
    <h4 align = "center" class='after_order'>Номер вашого замовлення: ${json.id}</h4>
    <div class="container" id = "after_order">
      <div class="details">
        <div class="col" >
        <h4 class="end">Очікуваний час доставки: ${json.time.split('T').join(' ')}</h4>
        <h4 class="end">Контактне імя: ${json.name + ' '+json.lastname}</h4>
        <h4 class="end">Телефон: ${json.tel}</h4>
        </div>
        <div class="col" >
          <h4 class="end">Адреса: ${json.address}</h4>
          <h4 class="end">Електронна пошта: ${json.email}</h4>
        </div>
      </div>
      <a class="btn" id = "href_but" href = "#" role = "button">На головну сторінку</a>
    </div>`;
 



}


export {cart_remove, addToCart, make_order};

