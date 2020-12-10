const view = (main) =>
   `
    <section class="section">
        <div class="container">

            <div class="section__header">
                <h3 class="section__suptitle">Discounts</h3>
                <h2 class="section__title">Special for you</h2>
                <div class="section__text">
                    <p>Discounts are one of the most effective ways to attract and retain customers. To gain credibility among its customers 
                        and manage a stable business, the system of discounts must have a clear and understandable structure.</p>
                </div>
            </div>
            <section>
                <div class="slider">
                        <div id="img-container" class="images-container">
                        ${main.promo.map((img) => `
                        <a href="#promo/${img.url}"><img class="slider-item fade" src=${img.img} alt=""></a>
                    `).join('')};
                    </div>
                    <div class="buttons-block">
                        <div id="prev-btn">&lt;--</div>
                        <div id="next-btn">--&gt;</div>
                    </div>
                    <div id="dots-block">
                        <button class="dot dot-active"></button>
                        <button class="dot"></button>
                        <button class="dot"></button>
                        <button class="dot"></button>
                    </div>
                </div>
            </section>
            

        </div>
    </section>
    <section class="section">
        <div class="container">

            <div class="section__header">
                <h3 class="section__suptitle pizza-area" >Hot Offers</h3>
            </div>

            <div class="blog">
            ${main.recommend.map((item) =>`
                <div class="blog__item">
                    <div class="blog__header">
                        <a href="#catalog/${item.url}">
                            <img class="blog__photo" src=${item.img} width="300" height="300" alt="">
                        </a>
                    </div>
                    <div class="blog__content">
                        <div class="blog__title">
                            <a href="#catalog/${item.url}">${item.title}</a>
                        </div>
                        <div class="blog__text">${item.desc}</div>
                        <div class="blog__text"><br><b>Price: ${item.price}grn</b></br></div>
                    </div>
                    <div class="blog__footer">
                    <button class="btn" value=${item.url}>Buy Now</button>
                    </div>
                </div>
            `).join('')}
            </div>
        </div>
        </section>
        `;







export default view;