
import { prod_list } from './script/data';

// console.log(prod_list);

const js_push = document.getElementsByClassName("js_push")[0];
const js_push_header = document.getElementsByClassName("js_push_header")[0];
function all_render_on_page() {

  // Страница Продукции!!!

  function page_render_products_header() {
    js_push_header.innerHTML = `

         <div class="filter">

        <button class="button_filter button_type_all" data-filter="all">
          Все товары
        </button>

        <button class="button_filter button_type_coffee" data-filter="coffee">
          Кофе
        </button>

        <button class="button_filter button_type_tea" data-filter="tea">
          Чай
        </button>

        <button class="button_filter button_type_eq" data-filter="eq">
          Техника
        </button>

        <button
          class="button_filter button_type_accessories"
          data-filter="accessories"
        >
          Аксессуары
      </div>
      `

    function page_render_products() {
      js_push.innerHTML = `
  <div class="js_push">
  <main>
    <div class="bg_prod">
    <div class="products_wrap">
      <section>
        <div class="h1">Наш товар</div>
        <div class="coffee_grid" id="coffee">`
      let contentStr = '';
      function renderItems(array, wrap) {

        array.forEach(function (item) {
          contentStr += `<div class="coffee_items ${item.index}">
              <div class="container_wrap">
                <div>
                  <a href="#">
                    <img class="img_buy" src="${item.icon_url}" alt="${item.prodName_or_alt}" />
                  </a>
                </div>
                <div>
                  <div class="h3">${item.prodName_or_alt}</div>
                  Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum
                  quis, eleifend vitae velit.
                  <div class="price">${item.price}</div>
                </div>
                <div class="add_button">
                  <a class="add_to_buy" data-id="${item.id}">
                    Посмотреть
                  </a>
                </div>
              </div>
            </div>`;
        });
      }

      renderItems(prod_list);
      coffee.insertAdjacentHTML('beforebegin', contentStr);
      `
          </div>
        </div>
      </section>
    </div>
    </div>
    <div class="before_footer">Like-themes © All Rights Reserved - 2020</div>
    </main>
    </div> 
    `;
      // Фильтр кнопок!!!

      const buttons = document.querySelectorAll(".button_filter")
      const arr_prod = document.querySelectorAll(".coffee_items")

      function filter_app() {

        function filter(category, items) {
          items.forEach((item) => {
            const IsItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === "all"
            if (IsItemFiltered && !isShowAll) {
              item.classList.add("hide")
            } else {
              item.classList.remove("hide")
            }
          })
        }

        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            const current_category = button.dataset.filter;
            filter(current_category, arr_prod)
          })
        })
      }
      filter_app();

      document.querySelectorAll('.add_to_buy').forEach((btn) => {
        btn.onclick = product_render.bind(null, btn.dataset.id);
        /*  btn.onclick = function () {
          product_render(btn);
        }; */
      });
    }
    page_render_products()
  }

  //Рендер покупки товара

  function product_render(id) {
    const drink = prod_list.find((el) => el.id === Number(id));
    js_push_header.innerHTML = ` `
    js_push.innerHTML = `
<div class="js_push">
  <main>
  <div class="bg_prod">
    <div class="products_wrap">
      <section>
        <div class="h1">Наш товар</div>

        <div class="coffee_item">
          <div class="coffee_items">
          <div class="h3">${drink.prodName_or_alt}</div>
            <div class="container_wrap_item">
              <div>
                <a href="#"
                  ><img
                    class="img_buy"
                   src="${drink.icon_url}"
                    alt="${drink.prodName_or_alt}"
                /></a>
              </div>
              <div>
              ${drink.text}
                <div class="price">${drink.price}</div>
              </div>
              <div class="add_button">
                <a class="add_to_buy" href="#">Купить</a>
              </div>
            </div>
          </div>
          </div>
          <div class="flex_btn"><a class="back">< К товарам</a></div>
      </section>
    </div>
  </div>
  <div class="before_footer">Like-themes © All Rights Reserved - 2020</div>
  </main>
  </div>
`
    const back_btn = document.getElementsByClassName("back")[0];
    back_btn.onclick = page_render_products_header;
  }

  // Страница О нас!!!


  function page_render_about() {
    js_push_header.innerHTML = ` `
    js_push.innerHTML = `
  <div class="js_push">
  <main>
    <div class="map_container">
      <div class="container">
        <section>
          <div class="map_wrap">
            <div class="h2 map_text">Где мы берем наше кофе?</div>
            <br />
            <div class="map_text2">
              Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
              vehicula odio. Donec pulvinartellus eget magna aliquet ultricies.
              Praesent gravida hendreritex, nec eleifend semconvallis vitae.
              Ortis. Curabitur in eleifend turpis, id vehicula odio. Donec
              pulvinartellus eget magna aliquet ultricies. Praesent gravida
              hendreritex, nec eleifend semconvallis vitae.Sed sagittis sodales
              lobortis. Curabitur in eleifend turpis, id vehicula odio. Rect pu
              magna aliquet ultricies. Praesent gravida hendreritex, nec
              eleifend semco.
            </div>
            <div class="map_width">
              <img class="map" src="./imgs/map.png" alt="map" />
            </div>
            <ul class="li_grid">
              <li class="ul_child">
                <a href="#">Канада<span class="mini">(24)</span></a>
              </li>
              <li class="ul_child">
                <a href="#">США<span class="mini">(37)</span></a>
              </li>
              <li class="ul_child">
                <a href="#">Мексика<span class="mini">(4)</span></a>
              </li>

              <li class="ul_child">
                <a href="#">Бразилия<span class="mini">(86)</span></a>
              </li>
              <li class="ul_child">
                <a href="#">Аргентина<span class="mini">(13)</span></a>
              </li>
              <li class="ul_child">
                <a href="#">Европа<span class="mini">(66)</span></a>
              </li>

              <li class="ul_child">
                <a href="#">Россия<span class="mini">(12)</span></a>
              </li>
              <li class="ul_child">
                <a href="#">Азия<span class="mini">(3)</span></a>
              </li>
              <li class="ul_child">
                <a href="#">Австралия<span class="mini">(41)</span></a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div class="testimonials">
      <div class="container">
        <div class="testimonials_text">Отзывы</div>
        <div class="inner">
          <span class="medium">
            Patrik James
            <br />
            <span class="mini">дизайнер</span>
          </span>
          <br />
          <span class="testimonials_wrap medium"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatum suscipit sunt ratione libero placeat, cumque odio
            consequatur! Nemo, soluta distinctio sapiente a sunt amet officia
            voluptatem quis quidem. Repellat maxime voluptas quo, temporibus
            iusto, dolore mollitia animi consequuntur quae corrupti enim quia
            nesciunt sequi exercitationem accusantium distinctio
            voluptatem.</span
          >
          <div class="icon_t">&#8222;</div>
        </div>
      </div>
    </div>
    <div class="sponcor_descr">Наши спонсоры</div>
    <div>
      <div class="sponsors">
        <div>
          <img class="sponsors_img" src="./imgs/sponsors1.png" alt="sponsor" />
        </div>
        <div>
          <img class="sponsors_img" src="./imgs/sponsors2.png" alt="sponsor" />
        </div>
        <div>
          <img class="sponsors_img" src="./imgs/sponsors3.png" alt="sponsor" />
        </div>

        <div>
          <img class="sponsors_img" src="./imgs/sponsors4.png" alt="sponsor" />
        </div>
        <div>
          <img class="sponsors_img" src="./imgs/sponsors5.png" alt="sponsor" />
        </div>
        <div>
          <img class="sponsors_img" src="./imgs/sponsors6.png" alt="sponsor" />
        </div>
      </div>
    </div>
    <div class="before_footer">Like-themes © All Rights Reserved - 2020</div>
    </main>
    </div>
      `;
  }

  //Страница Формы!!!

  function page_render_form() {
    js_push_header.innerHTML = ` `
    js_push.innerHTML = `
  <div class="js_push">
  <main>
<div class="container_form">
      <div class="form_wrap">
        <form class="transparent">
          <div class="form_inner">
            <h3>Вход</h3>
            <label for="username">Ваше Имя</label>
            <input type="text" id="username" />
            <label for="password">Пароль</label>
            <input id="password" type="password" />
            <input type="checkbox" id="custom_checkbox" />
            <label for="custom_checkbox">Запомнить меня</label>
            <input class="btn_submit" type="submit" value="Войти" />
            <div class="register_btn"><a>Зарегестрироватся</a></div>
          </div>
        </form>
      </div>
    </div>
    <div class="before_footer">Like-themes © All Rights Reserved - 2020</div>
    </main>
    </div>
    
    
      `;
    const form_page_register = document.getElementsByClassName('register_btn')[0];
    form_page_register.onclick = page_render_form_register;
  }

  //регестрация!!!

  function page_render_form_register() {
    js_push_header.innerHTML = ` `
    js_push.innerHTML = `
  <div class="js_push">
  <main>
<div class="container_form">
      <div class="form_wrap">
        <form class="transparent">
          <div class="form_inner">
            <h3>Вход</h3>
            <label for="username">Имя Пользователя</label>
            <input type="text" id="username" />
            <label for="password">Ваша Почта</label>
            <input id="password" type="email" />
            <label for="password">Пароль</label>
            <input id="password" type="password" />
            <input type="checkbox" id="custom_checkbox" />
            <label for="custom_checkbox">Запомнить меня</label>
            <input class="btn_submit" type="submit" value="Создать аккаунт" />
          </div>
        </form>
      </div>
    </div>
    <div class="before_footer">Like-themes © All Rights Reserved - 2020</div>
    </main>
    </div>
      `;
  }


  // Все подключения!!!

  const back_btn = document.getElementsByClassName("back")[0];

  const products_page = document.querySelectorAll('.products');
  for (let i = 0; i < products_page.length; i++) {
    products_page[i].onclick = page_render_products_header;
  }
  const form_page = document.querySelector('.form');
  form_page.onclick = page_render_form;

  const about_page = document.querySelector('.about');
  about_page.onclick = page_render_about;
}

all_render_on_page();