import spiner from './spiner.js'
import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';
import {cart_remove, addToCart,  make_order} from './scripts.js';
import {plusSlides,dot} from './slider.js'


let flag = false
function render(){
    spiner.view_spiner()
    const router = new Router();
    const templateProcessor = new TemplateProcessor();
    const client = new Client();
    const { viewName, endpointName } = router.getCurrentState();
    let view;
        import(`./views/${viewName}.js`)
            .then((viewModule) =>  {
                view = viewModule.default;
                return client.getData(endpointName);
            })
            .then((data) => {
                let view_page = view(data);
                if (view_page){
                templateProcessor.render(view(data))}
                else{
                    window.location.hash = '';
                }
            }).then(()=>{spiner.close_spiner(); addEvent(viewName)} );
}
render();

function addEvent(viewName){
    if (viewName == 'cartPage'){
        let a = document.getElementsByClassName('btn')
        for (let i = 0; i <a.length; i++){
            a[i].addEventListener('click', function(){cart_remove(this.value)})
        }
    }
    else if (viewName == 'catalogPage' || viewName == 'categoryPage'){
        let a = document.getElementsByClassName('btn')
        for (let i = 0; i <a.length; i++){
            a[i].addEventListener('click', function(){addToCart(a[i].value)})
        }
    }
    else if (viewName == 'productPage'){
        let a = document.getElementsByClassName('btn')
        for (let i = 0; i <a.length; i++){
            a[i].addEventListener('click', function(){addToCart(a[i].value,true)})
        }
    }
    else if (viewName == 'orderPage'){
        let a = document.getElementById('order')
        a.addEventListener('submit', function(){flag = true;make_order()})
        
    }

    else if (viewName == 'mainPage'){
        let a = document.getElementsByClassName('btn')
        for (let i = 0; i <a.length; i++){
            a[i].addEventListener('click', function(){addLocalStorage(a[i].value)})
        }
        document.getElementById('prev-btn').addEventListener('click', function(){plusSlides(-1)})
        document.getElementById('next-btn').addEventListener('click', function(){plusSlides(1)})
        let dots = document.getElementsByClassName('dot')
        for (let i = 0; i <a.length; i++){
            dots[i].addEventListener('click', function(){dot(i+1)})
        }
    }


}


// При загрузці сторінки вставляє футер з картинками і описом, які отримуються через fetch запрос (client)
(async () =>{
    let view;
    const client = new Client();
    import(`./views/footerPage.js`)
        .then((viewModule) =>  {
            view = viewModule.default;
            return client.getData('footer');
        })
        .then((data) => {
            document.getElementsByClassName('footer')[0].innerHTML = view(data)
        })
    })();


window.onhashchange = () => {
    if (flag){
        flag = false
    }
    else{
        render()
    }
}

window.onload = function(){
    let x = document.querySelector(".nav");
    document.querySelector(".nav-toggle").onclick = function(){
         x.classList.toggle('active');
    }
}
export default render


