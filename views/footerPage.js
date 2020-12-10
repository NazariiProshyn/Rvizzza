const view = (footer) =>
    ` <div class="container">

    <div class="footer__inner">
        <div class="footer__col  footer__col--first">
            <div class="footer__logo">Rvizza</div>
            <div class="footer__text">${footer.desc}</div>

            <div class="footer__social">
                <div class="footer__social-header">
                    <b>15k</b> followers
                </div>
                <div class="footer__social-content">
                    Follow Us:
                    <a href="#" target="_blank">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>


        </div><!-- /.footer__col -->

        <div class="footer__col  footer__col--second">
            <div class="footer__title">Blogs</div>

            <div class="blogs">
            ${footer.blog.map((item) =>`
                <div class="blogs__item">
                    <img class="blogs__img" src=${item.img} alt="">
                    <div class="blogs__content">
                        <a class="blogs__title" href="#">${item.desc}</a>
                        <div class="blogs__date">${item.date}</div>
                    </div>
                </div>
                `).join('')}
            </div><!-- /.blogs -->
        </div>

        <div class="footer__col  footer__col--third">
            <div class="footer__title">Instagram</div>

            <div class="instagram">
            ${footer.Instagram.map((item) =>`
                <a class="instagram__item" href="#" target="_blank">
                    <img class="blogs__img" src=${item} alt="">
                </a>
            `).join('')}
            </div>
        </div>

    </div>


</div>`;



export default view