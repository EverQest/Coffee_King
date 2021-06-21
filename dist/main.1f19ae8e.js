// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prod_list = void 0;
var prod_list = [{
  id: 1,
  prodName_or_alt: 'Кофейная канефора',
  icon_url: '/coffee1.jpg',
  price: '$23.05',
  index: 'coffee',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 2,
  prodName_or_alt: 'Кофейное зерно',
  icon_url: '/coffee2.jpg',
  price: '$24.66',
  index: 'coffee',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 3,
  prodName_or_alt: 'Эфиопский аромат',
  icon_url: '/coffee3.jpg',
  price: '$9.00-19.99$',
  index: 'coffee',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 4,
  prodName_or_alt: 'Кофейная чашка',
  icon_url: '/coffee4.jpg',
  price: '19.00$',
  index: 'accessories',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 5,
  prodName_or_alt: 'Кофемолка',
  icon_url: '/eq0.jpg',
  price: '$13.44',
  index: 'eq',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 6,
  prodName_or_alt: 'Американский кофе',
  icon_url: '/coffee6.jpg',
  price: '$14.00',
  index: 'coffee',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 7,
  prodName_or_alt: 'Аксессуар "Кепка"',
  icon_url: '/coffee7.jpg',
  price: '$4.99',
  index: 'accessories',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 8,
  prodName_or_alt: 'Кофейные конфеты',
  icon_url: '/coffee8.jpg',
  price: '$7.56',
  index: 'coffee',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 9,
  prodName_or_alt: 'Кофемолка Hario Ceramic Coffee Mill Skerton',
  icon_url: '/eq2.jpg',
  price: '$35.00',
  index: 'eq',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 10,
  prodName_or_alt: 'Капучино ICS Амаретто 1 кг',
  icon_url: '/coffee10.jpg',
  price: '$7.00',
  index: 'coffee',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 11,
  prodName_or_alt: 'Кофемашина профессиональная Iberital IB7',
  icon_url: '/eq4.jpg',
  price: '$150.00',
  index: 'eq',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 12,
  prodName_or_alt: 'Капучино ICS Crema Catalana 1 кг',
  icon_url: '/coffee12.jpg',
  price: '$18.00',
  index: 'coffee',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 13,
  prodName_or_alt: 'Чай ICS Лимонный 1 кг',
  icon_url: '/tea1.jpg',
  price: '$15.00',
  index: 'tea',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}, {
  id: 14,
  prodName_or_alt: 'Чай ICS Персиковый 1 кг',
  icon_url: '/tea2.jpg',
  price: '$15.20',
  index: 'tea',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ut a ducimus minus amet esse repudiandae in adipisci reiciendis voluptatem deleniti voluptatibus, velit eum natus, facilis cum. Dignissimos libero aspernatur placeat odit voluptate at. Magnam dicta consequuntur neque magni et eius provident aperiam inventore at atque, beatae dolor, quisquam reiciendis!'
}];
exports.prod_list = prod_list;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _data = require("./script/data");

// console.log(prod_list);
var js_push = document.getElementsByClassName("js_push")[0];
var js_push_header = document.getElementsByClassName("js_push_header")[0];

function all_render_on_page() {
  // Страница Продукции!!!
  function page_render_products_header() {
    js_push_header.innerHTML = "\n\n         <div class=\"filter\">\n\n        <button class=\"button_filter button_type_all\" data-filter=\"all\">\n          \u0412\u0441\u0435 \u0442\u043E\u0432\u0430\u0440\u044B\n        </button>\n\n        <button class=\"button_filter button_type_coffee\" data-filter=\"coffee\">\n          \u041A\u043E\u0444\u0435\n        </button>\n\n        <button class=\"button_filter button_type_tea\" data-filter=\"tea\">\n          \u0427\u0430\u0439\n        </button>\n\n        <button class=\"button_filter button_type_eq\" data-filter=\"eq\">\n          \u0422\u0435\u0445\u043D\u0438\u043A\u0430\n        </button>\n\n        <button\n          class=\"button_filter button_type_accessories\"\n          data-filter=\"accessories\"\n        >\n          \u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B\n      </div>\n      ";

    function page_render_products() {
      js_push.innerHTML = "\n  <div class=\"js_push\">\n  <main>\n    <div class=\"bg_prod\">\n    <div class=\"products_wrap\">\n      <section>\n        <div class=\"h1\">\u041D\u0430\u0448 \u0442\u043E\u0432\u0430\u0440</div>\n        <div class=\"coffee_grid\" id=\"coffee\">";
      var contentStr = '';

      function renderItems(array, wrap) {
        array.forEach(function (item) {
          contentStr += "<div class=\"coffee_items ".concat(item.index, "\">\n              <div class=\"container_wrap\">\n                <div>\n                  <a href=\"#\">\n                    <img class=\"img_buy\" src=\"").concat(item.icon_url, "\" alt=\"").concat(item.prodName_or_alt, "\" />\n                  </a>\n                </div>\n                <div>\n                  <div class=\"h3\">").concat(item.prodName_or_alt, "</div>\n                  Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum\n                  quis, eleifend vitae velit.\n                  <div class=\"price\">").concat(item.price, "</div>\n                </div>\n                <div class=\"add_button\">\n                  <a class=\"add_to_buy\" data-id=\"").concat(item.id, "\">\n                    \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\n                  </a>\n                </div>\n              </div>\n            </div>");
        });
      }

      renderItems(_data.prod_list);
      coffee.insertAdjacentHTML('beforebegin', contentStr);
      "\n          </div>\n        </div>\n      </section>\n    </div>\n    </div>\n    <div class=\"before_footer\">Like-themes \xA9 All Rights Reserved - 2020</div>\n    </main>\n    </div> \n    "; // Фильтр кнопок!!!

      var buttons = document.querySelectorAll(".button_filter");
      var arr_prod = document.querySelectorAll(".coffee_items");

      function filter_app() {
        function filter(category, items) {
          items.forEach(function (item) {
            var IsItemFiltered = !item.classList.contains(category);
            var isShowAll = category.toLowerCase() === "all";

            if (IsItemFiltered && !isShowAll) {
              item.classList.add("hide");
            } else {
              item.classList.remove("hide");
            }
          });
        }

        buttons.forEach(function (button) {
          button.addEventListener("click", function () {
            var current_category = button.dataset.filter;
            filter(current_category, arr_prod);
          });
        });
      }

      filter_app();
      document.querySelectorAll('.add_to_buy').forEach(function (btn) {
        btn.onclick = product_render.bind(null, btn.dataset.id);
        /*  btn.onclick = function () {
          product_render(btn);
        }; */
      });
    }

    page_render_products();
  } //Рендер покупки товара


  function product_render(id) {
    var drink = _data.prod_list.find(function (el) {
      return el.id === Number(id);
    });

    js_push_header.innerHTML = " ";
    js_push.innerHTML = "\n<div class=\"js_push\">\n  <main>\n  <div class=\"bg_prod\">\n    <div class=\"products_wrap\">\n      <section>\n        <div class=\"h1\">\u041D\u0430\u0448 \u0442\u043E\u0432\u0430\u0440</div>\n\n        <div class=\"coffee_item\">\n          <div class=\"coffee_items\">\n          <div class=\"h3\">".concat(drink.prodName_or_alt, "</div>\n            <div class=\"container_wrap_item\">\n              <div>\n                <a href=\"#\"\n                  ><img\n                    class=\"img_buy\"\n                   src=\"").concat(drink.icon_url, "\"\n                    alt=\"").concat(drink.prodName_or_alt, "\"\n                /></a>\n              </div>\n              <div>\n              ").concat(drink.text, "\n                <div class=\"price\">").concat(drink.price, "</div>\n              </div>\n              <div class=\"add_button\">\n                <a class=\"add_to_buy\" href=\"#\">\u041A\u0443\u043F\u0438\u0442\u044C</a>\n              </div>\n            </div>\n          </div>\n          </div>\n          <div class=\"flex_btn\"><a class=\"back\">< \u041A \u0442\u043E\u0432\u0430\u0440\u0430\u043C</a></div>\n      </section>\n    </div>\n  </div>\n  <div class=\"before_footer\">Like-themes \xA9 All Rights Reserved - 2020</div>\n  </main>\n  </div>\n");
    var back_btn = document.getElementsByClassName("back")[0];
    back_btn.onclick = page_render_products_header;
  } // Страница О нас!!!


  function page_render_about() {
    js_push_header.innerHTML = " ";
    js_push.innerHTML = "\n  <div class=\"js_push\">\n  <main>\n    <div class=\"map_container\">\n      <div class=\"container\">\n        <section>\n          <div class=\"map_wrap\">\n            <div class=\"h2 map_text\">\u0413\u0434\u0435 \u043C\u044B \u0431\u0435\u0440\u0435\u043C \u043D\u0430\u0448\u0435 \u043A\u043E\u0444\u0435?</div>\n            <br />\n            <div class=\"map_text2\">\n              Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id\n              vehicula odio. Donec pulvinartellus eget magna aliquet ultricies.\n              Praesent gravida hendreritex, nec eleifend semconvallis vitae.\n              Ortis. Curabitur in eleifend turpis, id vehicula odio. Donec\n              pulvinartellus eget magna aliquet ultricies. Praesent gravida\n              hendreritex, nec eleifend semconvallis vitae.Sed sagittis sodales\n              lobortis. Curabitur in eleifend turpis, id vehicula odio. Rect pu\n              magna aliquet ultricies. Praesent gravida hendreritex, nec\n              eleifend semco.\n            </div>\n            <div class=\"map_width\">\n              <img class=\"map\" src=\"./imgs/map.png\" alt=\"map\" />\n            </div>\n            <ul class=\"li_grid\">\n              <li class=\"ul_child\">\n                <a href=\"#\">\u041A\u0430\u043D\u0430\u0434\u0430<span class=\"mini\">(24)</span></a>\n              </li>\n              <li class=\"ul_child\">\n                <a href=\"#\">\u0421\u0428\u0410<span class=\"mini\">(37)</span></a>\n              </li>\n              <li class=\"ul_child\">\n                <a href=\"#\">\u041C\u0435\u043A\u0441\u0438\u043A\u0430<span class=\"mini\">(4)</span></a>\n              </li>\n\n              <li class=\"ul_child\">\n                <a href=\"#\">\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F<span class=\"mini\">(86)</span></a>\n              </li>\n              <li class=\"ul_child\">\n                <a href=\"#\">\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430<span class=\"mini\">(13)</span></a>\n              </li>\n              <li class=\"ul_child\">\n                <a href=\"#\">\u0415\u0432\u0440\u043E\u043F\u0430<span class=\"mini\">(66)</span></a>\n              </li>\n\n              <li class=\"ul_child\">\n                <a href=\"#\">\u0420\u043E\u0441\u0441\u0438\u044F<span class=\"mini\">(12)</span></a>\n              </li>\n              <li class=\"ul_child\">\n                <a href=\"#\">\u0410\u0437\u0438\u044F<span class=\"mini\">(3)</span></a>\n              </li>\n              <li class=\"ul_child\">\n                <a href=\"#\">\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F<span class=\"mini\">(41)</span></a>\n              </li>\n            </ul>\n          </div>\n        </section>\n      </div>\n    </div>\n    <div class=\"testimonials\">\n      <div class=\"container\">\n        <div class=\"testimonials_text\">\u041E\u0442\u0437\u044B\u0432\u044B</div>\n        <div class=\"inner\">\n          <span class=\"medium\">\n            Patrik James\n            <br />\n            <span class=\"mini\">\u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440</span>\n          </span>\n          <br />\n          <span class=\"testimonials_wrap medium\"\n            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum\n            voluptatum suscipit sunt ratione libero placeat, cumque odio\n            consequatur! Nemo, soluta distinctio sapiente a sunt amet officia\n            voluptatem quis quidem. Repellat maxime voluptas quo, temporibus\n            iusto, dolore mollitia animi consequuntur quae corrupti enim quia\n            nesciunt sequi exercitationem accusantium distinctio\n            voluptatem.</span\n          >\n          <div class=\"icon_t\">&#8222;</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"sponcor_descr\">\u041D\u0430\u0448\u0438 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u044B</div>\n    <div>\n      <div class=\"sponsors\">\n        <div>\n          <img class=\"sponsors_img\" src=\"./imgs/sponsors1.png\" alt=\"sponsor\" />\n        </div>\n        <div>\n          <img class=\"sponsors_img\" src=\"./imgs/sponsors2.png\" alt=\"sponsor\" />\n        </div>\n        <div>\n          <img class=\"sponsors_img\" src=\"./imgs/sponsors3.png\" alt=\"sponsor\" />\n        </div>\n\n        <div>\n          <img class=\"sponsors_img\" src=\"./imgs/sponsors4.png\" alt=\"sponsor\" />\n        </div>\n        <div>\n          <img class=\"sponsors_img\" src=\"./imgs/sponsors5.png\" alt=\"sponsor\" />\n        </div>\n        <div>\n          <img class=\"sponsors_img\" src=\"./imgs/sponsors6.png\" alt=\"sponsor\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"before_footer\">Like-themes \xA9 All Rights Reserved - 2020</div>\n    </main>\n    </div>\n      ";
  } //Страница Формы!!!


  function page_render_form() {
    js_push_header.innerHTML = " ";
    js_push.innerHTML = "\n  <div class=\"js_push\">\n  <main>\n<div class=\"container_form\">\n      <div class=\"form_wrap\">\n        <form class=\"transparent\">\n          <div class=\"form_inner\">\n            <h3>\u0412\u0445\u043E\u0434</h3>\n            <label for=\"username\">\u0412\u0430\u0448\u0435 \u0418\u043C\u044F</label>\n            <input type=\"text\" id=\"username\" />\n            <label for=\"password\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n            <input id=\"password\" type=\"password\" />\n            <input type=\"checkbox\" id=\"custom_checkbox\" />\n            <label for=\"custom_checkbox\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F</label>\n            <input class=\"btn_submit\" type=\"submit\" value=\"\u0412\u043E\u0439\u0442\u0438\" />\n            <div class=\"register_btn\"><a>\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u0441\u044F</a></div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"before_footer\">Like-themes \xA9 All Rights Reserved - 2020</div>\n    </main>\n    </div>\n    \n    \n      ";
    var form_page_register = document.getElementsByClassName('register_btn')[0];
    form_page_register.onclick = page_render_form_register;
  } //регестрация!!!


  function page_render_form_register() {
    js_push_header.innerHTML = " ";
    js_push.innerHTML = "\n  <div class=\"js_push\">\n  <main>\n<div class=\"container_form\">\n      <div class=\"form_wrap\">\n        <form class=\"transparent\">\n          <div class=\"form_inner\">\n            <h3>\u0412\u0445\u043E\u0434</h3>\n            <label for=\"username\">\u0418\u043C\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</label>\n            <input type=\"text\" id=\"username\" />\n            <label for=\"password\">\u0412\u0430\u0448\u0430 \u041F\u043E\u0447\u0442\u0430</label>\n            <input id=\"password\" type=\"email\" />\n            <label for=\"password\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n            <input id=\"password\" type=\"password\" />\n            <input type=\"checkbox\" id=\"custom_checkbox\" />\n            <label for=\"custom_checkbox\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F</label>\n            <input class=\"btn_submit\" type=\"submit\" value=\"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\" />\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"before_footer\">Like-themes \xA9 All Rights Reserved - 2020</div>\n    </main>\n    </div>\n      ";
  } // Все подключения!!!


  var back_btn = document.getElementsByClassName("back")[0];
  var products_page = document.querySelectorAll('.products');

  for (var i = 0; i < products_page.length; i++) {
    products_page[i].onclick = page_render_products_header;
  }

  var form_page = document.querySelector('.form');
  form_page.onclick = page_render_form;
  var about_page = document.querySelector('.about');
  about_page.onclick = page_render_about;
}

all_render_on_page();
},{"./script/data":"script/data.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63398" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map