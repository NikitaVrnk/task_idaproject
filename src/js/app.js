import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import Swiper, { Navigation, Pagination } from "swiper";
const swiper = new Swiper();

//
import{ CATALOG} from './data.js'

//////GLOBAL VARIABLES//////
const $product_items = document.querySelector(".product-items");
const $product_name = document.getElementById("product_name");
const $product_description = document.getElementById("product_description");
const $product_url = document.getElementById("product_url");
const $product_price = document.getElementById("product_price");
////////////////////////////



/////GoodsItem/////

class GoodsItem {
 
    createHtmlBtnDelete(){ //создаем кнопку удалить 
        return `<button class="item-delete">
                    <img  src="/images/icons-delete.png" alt="">
                </button>`
    }
  renderCATALOG() { //рендор всего каталога
    let htmlCatalog = "";

    CATALOG.products.forEach(
      ({ product_url, product_name, product_description, product_price }) => {
        htmlCatalog += `<div class="item"> 
                            ${this.createHtmlBtnDelete()}
                            <img src="${product_url}" alt="" class="item-img" />
                            <h3 class="item-title">${product_name}</h3>
                            <p class="item-subtitle">${product_description}</p>
                            <p class="item-price">${product_price}</p></div>
                        `;
      }
    );

    $product_items.insertAdjacentHTML("afterbegin", htmlCatalog);
  }

  renderLastItem(obj){//рендор последнего добавленного товара
      let htmlItem = `<div class="item"> 
                        ${this.createHtmlBtnDelete()}
                        <img src="${obj.product_url}" alt="" class="item-img" />
                        <h3 class="item-title">${obj.product_name}</h3>
                        <p class="item-subtitle">${obj.product_description}</p>
                        <p class="item-price">${obj.product_price}</p></div>
                    `;
  $product_items.insertAdjacentHTML("afterbegin", htmlItem);
  }

  addToCatalog(){ //добавление товара в каталог

    let tempObjItem = {
        product_name: "",
        product_description: "",
        product_url: "",
        product_price: "",
    };

    tempObjItem.product_name = $product_name.value;
    tempObjItem.product_description = $product_description.value;
    tempObjItem.product_url = $product_url.value;
    tempObjItem.product_price = $product_price.value;

    //проверка инпута на пустоту
    if ($product_name.value !== '' &
        $product_url.value !== '' &
        $product_price.value !== ''   
        ){
        console.log('НЕ пустой');

        CATALOG.products.push(tempObjItem)
        this.renderLastItem(tempObjItem)

            //затирание инпутов
        $product_name.value = null
        $product_description.value = null
        $product_url.value = null
        $product_price.value = null

      }else{
      console.log('Пустой input');
    }
  }
}

const productsPage = new GoodsItem();
productsPage.renderCATALOG();
//////////////////////////////////



///////Button/////
class Button {

    btnClick(){
        const btnClick = new GoodsItem();
        btnClick.addToCatalog()
    }
    //добавление события на кнопку
   addEventClickBtn(){
    const $btn_add = document.querySelector("#btn_add");
    $btn_add.addEventListener("click", this.btnClick);
   }
}

const btnClick = new Button;
btnClick.addEventClickBtn()
///////////////////////







//Не успеваю реализовать, заметки

///реализация удаления товара///

//алгоритм
//каждому товару в каталоге присваиваем id, затем этот id присваиваем кнопке удалить, вешаем событие на кнопку, 
//считываем id кнопки, по id находим товар в каталоге, удаляем, рендорим измененный каталог
//так же по уникальному id можно изменять карточку товара, черезотдельную кнопку



///маска для разбиения числа на разряды///

//алгоритм
//считываем инпут евентом по одной цыфре, передаем данные в функцию  numberWithSpaces(), рендорим инпут
const testNum = 123456789
function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
console.log(numberWithSpaces(testNum))