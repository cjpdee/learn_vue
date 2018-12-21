var currentColor = 'red';

class Product {
    constructor(name,description,category,materials,price,variants) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.materials = materials;
        this.price = price;
        this.variants = variants;
    }
}

var products = [
    new Product(
        'socks',
        'some lovely garments for your feet',
        'clothing',
        [
            'cotton 80%',
            'polyester 20%'
        ],
        7.99,
        [
            {
                color : 'red',
                img   : 'https://i.imgur.com/PbEZbQX.jpg',
                stock : 10
            },
            {
                color : 'blue',
                img   : 'https://i.imgur.com/9JBGWm3.jpg',
                stock : 10
            },
            {
                color : 'green',
                img   : 'https://i.imgur.com/1NKfrOU.jpg',
                stock : 8
            },
        ]
    ),
    new Product(
        'hat',
        'some lovely garment for your head',
        'clothing',
        [
            'cotton 80%',
            'polyester 20%'
        ],
        7.99,
        [
            {
                color : 'red',
                img   : 'https://i.imgur.com/aBVAmPq.png',
                stock : 10
            },
            {
                color : 'blue',
                img   : 'https://i.imgur.com/7ynbsoi.jpg',
                stock : 10
            },
            {
                color : 'green',
                img   : 'https://i.imgur.com/HG4Mk8N.jpg',
                stock : 8
            },
        ]
    ),
    new Product(
        'bat',
        'fantastic for sports',
        'weapons',
        [
            'cotton 20%',
            'polyester 40%',
            'bat 40%'
        ],
        4.99,
        [
            {
                color : 'brown',
                img   : 'https://i.imgur.com/9EITFsm.jpg',
                stock : 10
            },
            {
                color : 'black',
                img   : 'https://i.imgur.com/fewDTE0.jpg',
                stock : 10
            }
        ]
    ),
];

var numProducts = products.length - 1;

console.log('p',numProducts);

Vue.component('mycomponent', {
    props: {
        message : {
            type: String,
            default: 'Hello world'
        }
    },
    template:   `<div>
                    <span>{{ message }}</span>
                </div>`,
    data() {
        return {
            
        }
    }
})

// product component

Vue.component('product', {
    props: {
        message : {
            type: String,
            default: 'Hello world'
        }
    },
    template:   `
        <div id="product-view">
            <button @click="prevProduct()">Prev</button>
            <button @click="nextProduct()">Next</button>
            <div class="product__view" v-if="product">
                <div class="product__image__wrap">
                    <img v-bind:src="image" alt="">
                </div>
                <div class="product__details__wrap">
                    <h1>{{ product.name }}</h1>
                    <span>{{ product.description }}</span>
                    <!-- if materials -->
                    <ul class="product__materials__list">
                        <li v-for="material in product.materials">{{ material }}</li>
                    </ul>
                    <ul class="product__colors__list">
                        <li class="color-box"
                            :style="{ backgroundColor: variant.color }"
                            v-for="variant in product.variants"
                            v-bind:key="variant.variantId"
                            @mouseover="updateProductVariant(variant)">
                        </li>
                    </ul>
                    <p>Price : £{{ product.price }}</p>
                    <p>Stock : {{ stock }}</p>

                    <button v-on:click="addToCart()">increment</button>
                    <p>Cart: {{ cart }}</p>
                    <a href=#>See more {{product.category}}</a>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            productIndex : 1,
            product : null,
            color : null,
            cart : 0,
            image : null,
            stock : null
        }
    },
    created() {
        this.product = products[this.productIndex];
        this.image   = products[this.productIndex].variants[0].img;
        this.stock   = products[this.productIndex].variants[0].stock;
        this.color   = products[this.productIndex].variants[0].color;
    },
    methods: {
        addToCart() {
            this.cart++;
            this.stock--;
            
            let index = products[this.productIndex].variants.indexOf(this.color);
            console.log(products[this.productIndex].variants[0]);
            products[this.productIndex].variants[index].stock--;
            
            console.log(products[this.productIndex]);
        },
        updateProductVariant(variant) {
            this.image = variant.img;
            this.stock = variant.stock;
            this.variant = variant.color;
            this.color = variant.color;
            console.log(this.color);
        },
        updateProductType() {
            this.product = products[this.productIndex];
            this.image   = products[this.productIndex].variants[0].img;
            this.stock   = products[this.productIndex].variants[0].stock;
            this.color   = products[this.productIndex].variants[0].color;
        },
        nextProduct() {
            if(this.productIndex < numProducts) {
                this.productIndex++;
                this.updateProductType();
            }
        },
        prevProduct() {
            if(this.productIndex > 0) {
                this.productIndex--;
                this.updateProductType();
            }
        }
    }
})

var app = new Vue({
    el: '#entry',

})