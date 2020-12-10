function promo_url(promo){
    let url =window.location.hash.split('/')[1]
    for (let i=0;i < promo.length;i++){
        if (promo[i].url == url){
            return promo[i]
        }
    }
    return false;
}

function view(main){
    let prom = promo_url(main)
    if (prom ==false){
        console.log('fail promo')
        return false
    }
    let body =  `
    <div class = "container">
        <div class = "row">
            <div class="col">
                <img src="${prom.img}" id = "promo_detal" alt="">
            </div>
            <div class="col">
                <p>${prom.date}</p>
                <h3>${prom.title}</h3>
                <p> ${prom.desc}</p>
            </div>
        </div>
    </div>
    `;

    return body
}
export default view;