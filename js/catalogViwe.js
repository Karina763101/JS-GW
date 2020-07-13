k();
class AllProducts {
    constructor(containerProducts, catalogProduct) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }
    createProduct() {
        let wrapper = document.createElement("slot");
        for (let i = 0; i < this.catalogProduct.length; i++) {
            let item = this.getProductItem({
                tagName: "div",
                className: "item"
            })
            let name = this.getProductItem({
                tagName: "a",
                className: "name",
                textName: this.catalogProduct[i].name
            })
            let img = this.getProductItem({
                tagName: "img",
                className: "img",
                backgroundImg: this.catalogProduct[i].img
            })
            let description = this.getProductItem({
                tagName: "p",
                className: "description",
                textName: this.catalogProduct[i].description
            })
            let cost = this.getProductItem({
                tagName: "div",
                className: "price",
                textName: `Цена: ${this.catalogProduct[i].cost} руб`
            })
            let btn = this.getProductItem({
                tagName: "button",
                className: "btn",
                textName: "Записаться"
            })

            function addTavar() {
                item.appendChild(img);
                item.appendChild(name);
                item.appendChild(description);
                item.appendChild(cost);
                item.appendChild(btn);
                wrapper.appendChild(item);
            }

            function categorySelection() {
                addTavar();
                categories.addEventListener('click', function (event) {
                    if (event.target && event.target.innerHTML == 'Макияж') {
                        item.remove();
                        if (catalogProduct[i].category == 'make') {
                            addTavar();
                        }
                    }
                   
                    if (event.target && event.target.value == 'b1') {
                        item.remove();
                        if (catalogProduct[i].make == 'smoki') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b2') {
                        item.remove();
                        if (catalogProduct[i].make == 'str') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b3') {
                        item.remove();
                        if (catalogProduct[i].make == 'cat_eye') {
                            addTavar();
                        }
                    }
                    
                    if (event.target && event.target.value == 'b4') {
                        item.remove();
                        if (catalogProduct[i].make == 'pet') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b5') {
                        item.remove();
                        if (catalogProduct[i].color == 'black') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b6') {
                        item.remove();
                        if (catalogProduct[i].color == 'brown') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b7') {
                        item.remove();
                        if (catalogProduct[i].cost  == '50') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b8') {
                        item.remove();
                        if (catalogProduct[i].cost  == '40') {
                            addTavar();
                        }
                    }
                    //////////////////////////////////////////////////////
                    
                   
                });
                
            }
            categorySelection();

        }
        this.containerProducts.appendChild(wrapper);
    }

    getProductItem(card) {
        let element = document.createElement(card.tagName);
        if ('className' in card) {
            element.setAttribute('class', card.className);
        }
        if ('textName' in card) {
            element.innerHTML = card.textName;
        }
        if ("backgroundImg" in card) {
            element.src = card.backgroundImg;
        }
        return element;
    }
}

let allProducts = new AllProducts('.container_product', catalogProduct);

function subcategory() {
    let i = 0 ,j = 0 ,r = 0 ,f = 0;
    make.addEventListener('click', function () {
        if (i == 0) {
            block_make.style.display = "block";
            i = 1;
        } else {
            block_make.style.display = "none";
            i = 0;
        }
    });
    

}
subcategory();

function display(){
    main.addEventListener('click', function () {
        block_main.style.display = "block";
        block_main1.style.display = "block";
        container_catalog.style.display = "none";
        about_us.style.display = "none";
        map_pl.style.display = "none";
        wrapper1.style.display = "none"
    });

    catalog.addEventListener('click', function () {
        container_catalog.style.display = "block";
        block_main.style.display = "none";
        block_main1.style.display = "none";
        about_us.style.display = "none";
        map_pl.style.display = "none";
        wrapper1.style.display = "none"
    });

    about.addEventListener('click', function () {
        about_us.style.display = "block";
        container_catalog.style.display = "none";
        block_main.style.display = "none";
        block_main1.style.display = "none";
        map_pl.style.display = "none";
        wrapper1.style.display = "none"
    });

    map_k.addEventListener('click', function () {
        map_pl.style.display = "block";
        about_us.style.display = "none";
        container_catalog.style.display = "none";
        block_main.style.display = "none";
        block_main1.style.display = "none";
        wrapper1.style.display = "none"
    });

    sign.addEventListener('click', function () {
        map_pl.style.display = "none";
        about_us.style.display = "none";
        container_catalog.style.display = "none";
        block_main.style.display = "none";
        block_main1.style.display = "none";
    });

    reg.addEventListener('click', function () {
        map_pl.style.display = "none";
        about_us.style.display = "none";
        container_catalog.style.display = "none";
        block_main.style.display = "none";
        block_main1.style.display = "none";
    });
    
}
display();

